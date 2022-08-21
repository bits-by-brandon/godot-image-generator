export async function load({ url }) {
	return {
		title: url.searchParams.get('title') || undefined,
		subtext: url.searchParams.get('subtext') || undefined,
		supertext: url.searchParams.get('supertext') || undefined,
		image: url.searchParams.get('image') || undefined
	};
}
