<script>
	import { artPieces } from './../lib/data/art-pieces';
	import ArtGallery from '$lib/components/art/art-gallery.svelte';
</script>

<div class="container mx-auto pt-4 px-8 space-y-8">
	<ArtGallery pieces={artPieces} />
</div>
