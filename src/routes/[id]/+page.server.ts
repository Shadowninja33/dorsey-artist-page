import { error } from '@sveltejs/kit';
import { artPieces } from '$lib/data/art-pieces';

export function load({ params }: { params: { id: string } }) {
	const pieceIndex = artPieces.findIndex((art) => art.id === params.id);
	const piece = artPieces[pieceIndex];

	const previousArtPiece = pieceIndex - 1 >= 0 ? artPieces[pieceIndex - 1] : null;
	const nextArtPiece = pieceIndex + 1 < artPieces.length ? artPieces[pieceIndex + 1] : null;

	if (!piece) throw error(404);

	return {
		pieceIndex,
		piece,
		previousArtPiece,
		nextArtPiece
	};
}
