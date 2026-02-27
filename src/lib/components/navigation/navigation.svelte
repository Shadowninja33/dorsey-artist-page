<script lang="ts">
	import { page } from '$app/state';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
	

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
				class:is-active={page.route.id === '/' || page.route.id === '/[id]'}
				onclick={drawerClose}>Homepage</a
			>
		</li>
		<li>
			<a href="/about" class:is-active={page.route.id === '/about'} onclick={drawerClose}>About</a
			>
		</li>
	</ul>
</nav>

<style lang="postcss">
	a.is-active {
		@apply bg-primary-500-400-token text-on-primary-token;
	}
</style>
