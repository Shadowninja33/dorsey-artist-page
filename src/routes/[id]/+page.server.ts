import { error } from "@sveltejs/kit";
import { artPieces } from "$lib/data/art-pieces";

export function load({params}) {
    const pieceIndex = artPieces.findIndex((art) => art.id === params.id);
    const piece = artPieces[pieceIndex];
    
    if (!piece) throw error(404);

    return {
        pieceIndex,
        piece
    }
}