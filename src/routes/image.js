import playwright from 'playwright-aws-lambda';

export async function GET(event) {
	const width = event.url.searchParams.get('width') || 400;
	const height = event.url.searchParams.get('height') || 300;
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

	const browser = await playwright.launchChromium(); // Or 'firefox' or 'webkit'.
	const page = await browser.newPage();
	await page.setViewportSize({ height, width });
	await page.goto(domUrl.toString(), { waitUntil: 'domcontentloaded' });
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
