<script lang="ts">
	import { page } from '$app/stores';
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
		<li>
			<a
				href="/"
				class:is-active={$page.route.id === '/' || $page.route.id === '/[id]'}
				on:click={drawerClose}>Homepage</a
			>
		</li>
		<li>
			<a href="/about" class:is-active={$page.route.id === '/about'} on:click={drawerClose}>About</a
			>
		</li>
	</ul>
</nav>

<style>
	a.is-active {
		@apply bg-primary-500-400-token text-on-primary-token focus:text-primary-900-50-token;
	}
</style>
