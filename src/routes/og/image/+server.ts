import type { RequestEvent } from '@sveltejs/kit';
import generateScreenshot from '$lib/generateScreenshot';

export async function GET(event: RequestEvent) {
	event.url.pathname = '/og/preview';
	const width = parseInt(event.url.searchParams.get('width') || '1200');
	const height = parseInt(event.url.searchParams.get('height') || '630');
	const screenshot = await generateScreenshot(event.url, width, height);

	return new Response(screenshot, {
		headers: {
			'content-type': 'image/png',
			'access-control-allow-origin': '*'
		}
	});
}
