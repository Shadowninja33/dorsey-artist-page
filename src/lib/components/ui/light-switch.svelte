<script lang="ts">
	import { page } from '$app/state';
	// import { getDrawerStore } from '@skeletonlabs/skeleton';
	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();

	// const drawerStore = getDrawerStore();

	// function drawerClose(): void {
	// 	drawerStore.close();
	// }

	const setTheme = (theme: 'light' | 'dark') => (localStorage.theme = theme);
</script>

<div class="flex space">
	<button onclick={(_event) => setTheme('light')} type="button">Light Mode</button>
	<button onclick={(_event) => setTheme('dark')} type="button">Dark Mode</button>
</div>

<nav class="list-nav {className}">
	<ul>
		<li>
			<a href="/" class:is-active={page.route.id === '/' || page.route.id === '/[id]'}>Homepage</a>
		</li>
		<li>
			<a href="/about" class:is-active={page.route.id === '/about'}>About</a>
		</li>
	</ul>
</nav>

<style lang="css">
	/* a.is-active {
		@apply bg-primary-500-400-token text-on-primary-token;
	} */
</style>
