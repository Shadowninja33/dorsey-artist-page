import { artPieces } from '$lib/data/art-pieces';
import type { SeoData } from '../types';
import 'string-ts/native';

export function load() {
	const seoData: SeoData = {
		title: 'Jacqui Dorsey',
		description:
			'The website for artist, painter, and sculpter Jacqui Dorsey. It includes examples of her work and information about her.'
	};

	return {
		artPieces,
		seoData
	};
}
