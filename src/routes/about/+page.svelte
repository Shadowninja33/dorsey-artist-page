<script lang="ts">
	import Headshot from '$lib/components/headshot.svelte';
</script>

<svelte:head>
	<title>Jacqui Dorsey | About</title>
	<meta
		name="description"
		content="Information about artist, sculptor, and painter Jacqui Dorsey"
	/>
</svelte:head>
<article>
	<enhanced:img
		fetchpriority="high"
		class="mx-auto mb-8 md:hidden"
		alt="Headshot for artist, painter, and sculpter Jacqui Dorsey"
		src="$lib/images/dorsey-head-shot.png"
	></enhanced:img>

	<div class="prose">
		<p>
			Jacqui Dorsey is an accomplished sculptor, muralist, retired nurse and painter, whose work has
			won many awards throughout the nation. Her three-dimensional clay works are sensitive
			endearing narratives of family, friends, and historical figures.
		</p>

		<p>
			Her clay bust, "The Way To Freedom" was shown at the Pittsburgh Center for the Arts. Artist
			Jacqui Dorsey is actively involved in the community and served as a docent at McNay Museum of
			Arts.
		</p>
	</div>
</article>
