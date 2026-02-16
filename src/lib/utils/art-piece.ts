import type { Image, ArtPiece } from '$lib/data/art-pieces';
export function defaultImage(artpiece: ArtPiece): Image {
	return artpiece.images[0];
}
