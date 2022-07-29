import playwright from 'playwright-aws-lambda';

export async function GET(event) {
	const width = parseInt(event.url.searchParams.get('width') || 1200);
	const height = parseInt(event.url.searchParams.get('height') || 630);
	//
	// const launchOptions = chrome
	// 	? {
	// 			args: chrome.args,
	// 			executablePath: await chrome.executablePath,
	// 			headless: chrome.headless
	// 	  }
	// 	: {};

	// const browser = await context.launch(launchOptions);
	// const page = await browser.newPage();

	const domUrl = event.url;
	domUrl.pathname = 'dom';

	const browser = await playwright.launchChromium({ headless: true }); // Or 'firefox' or 'webkit'.
	const page = await browser.newPage();
	await page.setViewportSize({ height, width });
	await page.goto(domUrl.toString(), { waitUntil: 'domcontentloaded' });
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
				// Image hasn’t loaded yet, added an event listener to know when it does
				return new Promise((resolve, reject) => {
					img.addEventListener('load', resolve);
					img.addEventListener('error', reject);
				});
			})
		]);
	});

	const screenshot = await page.screenshot();
	await browser.close();

	return {
		status: 200,
		headers: {
			'content-type': 'image/png',
			'access-control-allow-origin': '*'
		},
		body: screenshot
	};
}
