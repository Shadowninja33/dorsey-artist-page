<script lang="ts">
	import { page } from '$app/state';
	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

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

<style lang="postcss">
	@reference "../../../app.css";
	a.is-active {
		/* @apply bg-primary-500 text-primary-contrast-500; */
	}
</style>
