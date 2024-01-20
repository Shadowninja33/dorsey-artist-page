<script lang="ts">
	export let data;
</script>

<aside>
	<h2>More Art Pieces</h2>
	<ul>
		{#each data.artPieces as { id, alt }}
			<li>
				<a href="/{id}">{alt}</a>
			</li>
		{/each}
	</ul>
</aside>
<slot />
