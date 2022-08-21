import type { RequestEvent } from '@sveltejs/kit';
import generateScreenshot from '$lib/generateScreenshot';

export type MultipartData = {
	files: MultipartFile[];
	fields: Record<string, any>;
};

export type MultipartFile = {
	name: string;
	data: ArrayBuffer;
	type: string;
};

export async function POST(event: RequestEvent) {
	const data: MultipartData = {
		files: [],
		fields: {}
	};

	const formData = await event.request.formData();
	for (const [key, value] of formData.entries()) {
		if (!value) continue;

		if (typeof value === 'string') {
			event.url.searchParams.set(key, value);
		} else {
			event.url.searchParams.set('uploadedImage', '1');
			data.files.push({
				name: key,
				type: value.type,
				data: await value.arrayBuffer()
			});
		}
	}

	event.url.pathname = '/thumbnail/preview';
	const width = parseInt(event.url.searchParams.get('width') || '1280');
	const height = parseInt(event.url.searchParams.get('height') || '720');
	const screenshot = await generateScreenshot(event.url, width, height, data.files[0]);

	return new Response(screenshot, {
		headers: {
			'content-type': 'image/png',
			'access-control-allow-origin': '*'
		}
	});
}
