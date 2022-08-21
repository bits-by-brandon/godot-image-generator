import type { RequestEvent } from '@sveltejs/kit';
import generateScreenshot from '$lib/generateScreenshot';

export async function POST(event: RequestEvent) {
	if (!event.request.body) return { status: 500 };

	await new Promise(() => {
		let data = '';
		event.request
	});

	event.url.pathname = '/thumbnail/preview';
	const width = parseInt(event.url.searchParams.get('width') || '1280');
	const height = parseInt(event.url.searchParams.get('height') || '720');
	const screenshot = await generateScreenshot(event.url, width, height);

	return {
		status: 200,
		headers: {
			'content-type': 'image/png',
			'access-control-allow-origin': '*'
		},
		body: screenshot
	};
}
