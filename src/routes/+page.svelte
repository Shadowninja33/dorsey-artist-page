<script lang="ts">
	import ArtGallery from '$lib/components/art/art-gallery.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.seoData.title}</title>
	<meta name="description" content={data.seoData.description} />
</svelte:head>
<div class="container mx-auto space-y-8 p-4">
	<ArtGallery pieces={data.artPieces} />
</div>
