let chrome = null;
let puppeteer;

export async function GET(event) {
	if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
		// running on the Vercel platform.
		chrome = await import('chrome-aws-lambda');
		puppeteer = await import('puppeteer-core');
	} else {
		// running locally.
		puppeteer = await import('puppeteer');
	}

	const width = event.url.searchParams.get('width') || 400;
	const height = event.url.searchParams.get('height') || 300;

	const launchOptions = chrome ? await chrome.executablePath : {};

	const browser = await puppeteer.launch(launchOptions);
	const page = await browser.newPage();
	await page.setViewport({ height, width, deviceScaleFactor: 2 });

	const domUrl = event.url;
	domUrl.pathname = 'dom';
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
