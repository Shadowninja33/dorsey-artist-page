<script lang="ts">
	import { generateGoogleMapsSearchUrl } from '$lib/utils/google-maps';
	import { LayoutGridIcon } from '@lucide/svelte';

	let { data } = $props();

	const noop: string = 'javascript:;';

	let selectedImageIndex = $state(0);

	let selectedImage = $derived(data.piece.images[selectedImageIndex]);
</script>

<svelte:head>
	<title>Jacqui Dorsey | {data.seoData.title}</title>
	<meta name="description" content={data.seoData.description} />
</svelte:head>

<nav class="mx-4 flex justify-between py-4">
	<div class="flex justify-start text-lg">
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
			<LayoutGridIcon class="size-6" />
		</a>
	</div>
</nav>
<section class="flex flex-col space-y-8">
	<h1 class="h4 md:h2 text-center">{'name' in data.piece ? data.piece.name : ''}</h1>

	<div class="">
		<enhanced:img
			fetchpriority="high"
			class="mx-auto max-h-56 w-auto sm:max-h-96"
			sizes="(min-width:1280px) 1280px, (min-width:600px) 200px, 100px"
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
		<div class="flex min-h-fit w-full justify-center space-x-4 overflow-x-auto">
			{#each data.piece.images as image, i}
				<button
					type="button"
					onclick={() => (selectedImageIndex = i)}
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
		<div class="prose dark:prose-invert mx-auto">
			{#each data.piece.description as line}
				<p>{line}</p>
			{/each}
		</div>
	{/if}
</section>
