export function generateGoogleMapsSearchUrl(address: string): string {
	const url = new URL('https://www.google.com/maps/search/?api=1');
	url.searchParams.append('query', address);
	return url.toString();
}
