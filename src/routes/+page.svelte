<script lang="ts">
	import ArtGallery from '$lib/components/art/art-gallery.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.seoData.title}</title>
	<meta name="description" content={data.seoData.description} />
</svelte:head>
<div class="container space-y-8">
	<ArtGallery pieces={data.artPieces} />
</div>
