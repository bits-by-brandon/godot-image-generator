import playwright from 'playwright-aws-lambda';

export default async function generateScreenshot(url: URL, width: number, height: number) {
	const browser = await playwright.launchChromium({ headless: true }); // Or 'firefox' or 'webkit'.
	const page = await browser.newPage();
	await page.setViewportSize({ height, width });
	await page.goto(url.toString(), { waitUntil: 'domcontentloaded' });
	await page.evaluate(async () => {
		const selectors = Array.from(document.querySelectorAll('img'));
		await Promise.all([
			document.fonts.ready,
			...selectors.map((img) => {
				// Image has already finished loading, let’s see if it worked
				if (img.complete) {
					// Image loaded and has presence
					if (img.naturalHeight !== 0) return;
					// Image failed, so it has no height
					throw new Error('Image failed to load');
				}
				// Image has not loaded yet, added an event listener to know when it does
				return new Promise((resolve, reject) => {
					img.addEventListener('load', resolve);
					img.addEventListener('error', reject);
				});
			})
		]);
	});

	const screenshot = await page.screenshot();
	await browser.close();
	return screenshot;
}
