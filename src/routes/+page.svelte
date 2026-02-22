<script>
	import ArtGallery from '$lib/components/art/art-gallery.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.seoData.title}</title>
	<meta name="description" content={data.seoData.description} />
</svelte:head>
<div class="container mx-auto pt-4 px-8 space-y-8">
	<ArtGallery pieces={artPieces} />
</div>
