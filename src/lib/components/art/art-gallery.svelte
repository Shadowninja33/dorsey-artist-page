<script lang="ts">
	import type { artPieces } from '$lib/data/art-pieces';
	import { resolve } from '$app/paths';

	interface Props {
		pieces: typeof artPieces;
	}

	let { pieces }: Props = $props();
</script>

<section class="flex flex-wrap gap-4">
	{#each pieces as piece (piece.id)}
		<a href={resolve('/[id]', { id: piece.id })}>
			<div class="card preset-filled-surface-100-900 p-4hover:brightness-50 w-25 p-4 md:w-50">
				<enhanced:img
					class="rounded-lg"
					sizes="(min-width:600px) 200px, 100px"
					src={piece.images[0].src}
					alt={piece.images[0].alt}
				/>
				<div class="w-full text-center text-lg">
					{piece.name}
				</div>
			</div>
		</a>
	{/each}
</section>

<style lang="postcss">
	@reference "tailwindcss";

	/* section {
		grid-template-columns: repeat(minmax(1fr, 400px));
	} */
</style>
