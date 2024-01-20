<script lang="ts">
	import type { artPieces } from '$lib/data/art-pieces';

	export let pieces: typeof artPieces;
</script>

<section class="grid grid-cols-2 md:grid-cols-4 gap-4">
	{#each pieces as piece}
		<a href="/{piece.id}" class="hover:brightness-50">
			<img class="h-auto max-w-full rounded-lg" src={piece.src} alt={piece.alt} />
		</a>
	{/each}
</section>
