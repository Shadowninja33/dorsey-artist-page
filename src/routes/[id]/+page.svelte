<script lang="ts">
	export let data;

	$: previousArtPiece = data.pieceIndex - 1 >= 0 ? data.artPieces[data.pieceIndex - 1] : null;
	$: nextArtPiece =
		data.pieceIndex + 1 < data.artPieces.length ? data.artPieces[data.pieceIndex + 1] : null;
	const noop: string = 'javascript:;';
</script>

<nav class="flex justify-between px-8 pt-4">
	<div class="flex justify-start">
		<a class="underline" href={previousArtPiece?.id || noop}>Previous</a><span class="mx-1">/</span
		><a class="underline" href={nextArtPiece?.id || noop}>Next</a>
	</div>
	<div>
		<a href="/">
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					class="fill-token"
					viewBox="0 0 256 256"
					><path
						d="M84,52V92H28a4,4,0,0,1-4-4V64A16,16,0,0,1,40,48H80A4,4,0,0,1,84,52Zm16,152a4,4,0,0,0,4,4h48a4,4,0,0,0,4-4V164H100ZM24,168v24a16,16,0,0,0,16,16H80a4,4,0,0,0,4-4V164H28A4,4,0,0,0,24,168Zm0-56v32a4,4,0,0,0,4,4H84V108H28A4,4,0,0,0,24,112ZM152,48H104a4,4,0,0,0-4,4V92h56V52A4,4,0,0,0,152,48Zm76,60H172v40h56a4,4,0,0,0,4-4V112A4,4,0,0,0,228,108ZM100,148h56V108H100ZM216,48H176a4,4,0,0,0-4,4V92h56a4,4,0,0,0,4-4V64A16,16,0,0,0,216,48Zm12,116H172v40a4,4,0,0,0,4,4h40a16,16,0,0,0,16-16V168A4,4,0,0,0,228,164Z"
					></path></svg
				>
			</span>
		</a>
	</div>
</nav>
<section>
	<h1 class="text-center h2">{'name' in data.piece ? data.piece.name : ''}</h1>

	<img class="mx-auto p-8 max-h-[750px]" src={data.piece.src} alt={data.piece.alt} />

	{#if 'description' in data.piece}
		<div class="mx-auto prose dark:prose-invert">
			{#each data.piece.description as line}
				<p>{line}</p>
			{/each}
		</div>
	{/if}
</section>
