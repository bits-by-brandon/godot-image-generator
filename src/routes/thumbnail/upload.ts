import type { RequestEvent } from '@sveltejs/kit';
import FormData from 'form-data';
import { Directus } from '@directus/sdk';
import generateScreenshot from '$lib/generateScreenshot';

export async function GET(event: RequestEvent) {
	const width = parseInt(event.url.searchParams.get('width') || '1200');
	const height = parseInt(event.url.searchParams.get('height') || '630');
	const screenshot = await generateScreenshot(event.url, width, height);

	const token = import.meta.env.VITE_DIRECTUS_UPLOAD_TOKEN;
	const providedToken = event.url.searchParams.get('token');
	if (token !== providedToken) {
		throw new Error('Invalid token provided');
	}

	const host = import.meta.env.VITE_DIRECTUS_URL;
	const directus = new Directus(host, { auth: { staticToken: token } });
	const form = new FormData();
	const CRLF = '\r\n';
	form.append('file', screenshot, {
		header:
			CRLF +
			'--' +
			form.getBoundary() +
			CRLF +
			`Content-Disposition: form-data; name="file"; filename="og-image.png"` +
			CRLF +
			'Content-Type: image/png' +
			CRLF +
			CRLF
	});

	const response = await directus.files.createOne(form, undefined, {
		requestOptions: { headers: { ...form.getHeaders() } }
	});

	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: response
	};
}
