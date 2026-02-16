<script lang="ts">
	import type { artPieces } from '$lib/data/art-pieces';
	import { defaultImage } from '$lib/utils/art-piece';

	export let pieces: typeof artPieces;
</script>

<section class="grid grid-cols-2 md:grid-cols-4 gap-4">
	{#each pieces as piece}
		<a href="/{piece.id}" class="hover:brightness-50">
			<img
				class="h-auto max-w-full rounded-lg"
				src={defaultImage(piece).src}
				alt={defaultImage(piece).alt}
			/>
		</a>
	{/each}
</section>
