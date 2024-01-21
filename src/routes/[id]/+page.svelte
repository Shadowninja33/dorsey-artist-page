<script lang="ts">
	export let data;

	$: previousArtPiece = data.pieceIndex - 1 >= 0 ? data.artPieces[data.pieceIndex - 1] : null;
	$: nextArtPiece =
		data.pieceIndex + 1 < data.artPieces.length ? data.artPieces[data.pieceIndex + 1] : null;
	const noop: string = 'javascript:;';
</script>

<section class="flex justify-between px-8 pt-8 pb-0">
	<div class="flex items-center">
		<a class="underline" href={previousArtPiece?.id || noop}>Previous</a><span class="mx-1">/</span
		><a class="underline" href={nextArtPiece?.id || noop}>Next</a>
		{data.pieceIndex}
	</div>
	<div>
		<a href="/">
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="#000000"
					viewBox="0 0 256 256"
					><path
						d="M84,52V92H28a4,4,0,0,1-4-4V64A16,16,0,0,1,40,48H80A4,4,0,0,1,84,52Zm16,152a4,4,0,0,0,4,4h48a4,4,0,0,0,4-4V164H100ZM24,168v24a16,16,0,0,0,16,16H80a4,4,0,0,0,4-4V164H28A4,4,0,0,0,24,168Zm0-56v32a4,4,0,0,0,4,4H84V108H28A4,4,0,0,0,24,112ZM152,48H104a4,4,0,0,0-4,4V92h56V52A4,4,0,0,0,152,48Zm76,60H172v40h56a4,4,0,0,0,4-4V112A4,4,0,0,0,228,108ZM100,148h56V108H100ZM216,48H176a4,4,0,0,0-4,4V92h56a4,4,0,0,0,4-4V64A16,16,0,0,0,216,48Zm12,116H172v40a4,4,0,0,0,4,4h40a16,16,0,0,0,16-16V168A4,4,0,0,0,228,164Z"
					></path></svg
				>
			</span>
		</a>
	</div>
</section>

<img class="mx-auto p-8 max-h-[750px]" src={data.piece.src} alt={data.piece.alt} />
