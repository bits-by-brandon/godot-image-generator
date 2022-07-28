import puppeteer from 'puppeteer';

export async function GET(event) {
	const width = event.url.searchParams.get('width') || 400;
	const height = event.url.searchParams.get('height') || 300;

	const browser = await puppeteer.launch();
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
