import { error } from "@sveltejs/kit";
import { artPieces } from "$lib/data/art-pieces";

export function load({params}) {
    const piece = artPieces.find((art) => art.id === params.id);
    
    if (!piece) throw error(404);

    return {
        piece
    }
}