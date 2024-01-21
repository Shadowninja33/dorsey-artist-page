<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	let className = '';
	export { className as class };

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav {className}">
	<ul>
		<li><a href="/" on:click={drawerClose}>Homepage</a></li>
		<li><a href="/about" on:click={drawerClose}>About</a></li>
	</ul>
</nav>
