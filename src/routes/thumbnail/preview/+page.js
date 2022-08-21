export async function load({ url }) {
	return {
		title: url.searchParams.get('title') || undefined,
		supertext: url.searchParams.get('supertext') || undefined,
		externalImage: url.searchParams.get('externalImage') || undefined,
		uploadedImage: url.searchParams.get('uploadedImage') || undefined
	};
}
