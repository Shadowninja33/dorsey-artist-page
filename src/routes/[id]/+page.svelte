<script lang="ts">
	import { generateGoogleMapsSearchUrl } from '$lib/utils/google-maps';

	export let data;

	const noop: string = 'javascript:;';

	$: selectedImageIndex = 0;
	$: selectedImage = data.piece.images[selectedImageIndex];
</script>

<svelte:head>
	<title>Jacqui Dorsey | {data.seoData.title}</title>
	<meta name="description" content={data.seoData.description} />
</svelte:head>

<nav class="flex justify-between py-4">
	<div class="flex justify-start">
		{#if data.previousArtPiece?.id}
			<a class="underline" href={data.previousArtPiece.id}>Previous</a>
		{:else}
			<span>Previous</span>
		{/if}
		<span class="mx-1">/</span>
		{#if data.nextArtPiece?.id}
			<a class="underline" href={data.nextArtPiece.id}>Next</a>
		{:else}
			<span>Next</span>
		{/if}
	</div>
	<div>
		<a href="/" aria-label="Back to Gallery">
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					class="fill-token"
					viewBox="0 0 256 256"
					><path
						d="M84,52V92H28a4,4,0,0,1-4-4V64A16,16,0,0,1,40,48H80A4,4,0,0,1,84,52Zm16,152a4,4,0,0,0,4,4h48a4,4,0,0,0,4-4V164H100ZM24,168v24a16,16,0,0,0,16,16H80a4,4,0,0,0,4-4V164H28A4,4,0,0,0,24,168Zm0-56v32a4,4,0,0,0,4,4H84V108H28A4,4,0,0,0,24,112ZM152,48H104a4,4,0,0,0-4,4V92h56V52A4,4,0,0,0,152,48Zm76,60H172v40h56a4,4,0,0,0,4-4V112A4,4,0,0,0,228,108ZM100,148h56V108H100ZM216,48H176a4,4,0,0,0-4,4V92h56a4,4,0,0,0,4-4V64A16,16,0,0,0,216,48Zm12,116H172v40a4,4,0,0,0,4,4h40a16,16,0,0,0,16-16V168A4,4,0,0,0,228,164Z"
					></path>
				</svg>
			</span>
		</a>
	</div>
</nav>
<section class="flex flex-col space-y-8">
	<h1 class="text-center h2">{'name' in data.piece ? data.piece.name : ''}</h1>

	<div class="overflow-auto">
		<enhanced:img
			fetchpriority="high"
			class="mx-auto w-auto h-[200px] sm:h-[400px]"
			src={selectedImage.src}
			alt={selectedImage.alt}
		/>
	</div>

	<!-- Details -->
	<div class="text-center">
		{#if data.piece.location}
			<span class="font-bold">Address: </span>
			<a class="underline" target="_blank" href={generateGoogleMapsSearchUrl(data.piece.location)}
				>{data.piece.location}</a
			>
		{/if}
	</div>

	{#if data.piece.images.length > 1}
		<div class="w-full min-h-fit flex space-x-4 justify-center overflow-x-auto">
			{#each data.piece.images as image, i}
				<button
					type="button"
					on:click={() => (selectedImageIndex = i)}
					aria-label="Select {image.alt}"
				>
					<enhanced:img
						class="{i === selectedImageIndex ? 'opacity-90' : 'opacity-60'} h-auto"
						sizes="50px"
						src={image.src}
						alt={image.alt}
					/>
				</button>
			{/each}
		</div>
	{/if}

	{#if data.piece.description}
		<div class="mx-auto prose dark:prose-invert">
			{#each data.piece.description as line}
				<p>{line}</p>
			{/each}
		</div>
	{/if}
</section>
