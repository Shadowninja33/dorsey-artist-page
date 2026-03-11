<script lang="ts">
	import './layout.css';
	import headshot from '$lib/images/dorsey-head-shot.png?enhanced';
	import '../app.css';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import LightSwitch from '$lib/components/ui/light-switch.svelte';
	import { HouseIcon, BookIcon, MenuIcon } from '@lucide/svelte';
	import { resolve } from '$app/paths';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let isSidebarOpen = $state(false);

	const toggleSidebar = (newState?: boolean) => (isSidebarOpen = newState ?? !isSidebarOpen);

	const navLinks = [
		{ label: 'Home', href: '/', icon: HouseIcon },
		{ label: 'About', href: '/about', icon: BookIcon }
	] as const;
</script>

<AppBar class="sticky top-0 z-20 h-(--header-height)">
	<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
		<AppBar.Lead>
			<button type="button" aria-label="Open Sidebar" class="btn" onclick={() => toggleSidebar()}>
				<MenuIcon class="size-4" />
			</button>
		</AppBar.Lead>

		<AppBar.Headline>
			<a href={resolve('/')}>
				<h1 class="text-base uppercase sm:text-2xl">Jacqui Dorsey</h1>
			</a>
		</AppBar.Headline>
		<AppBar.Trail>
			<LightSwitch />
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>
<!-- Left Sidebar. Hidden on mobile -->
<div class="flex">
	<aside
		class="border-surface-200-800 sticky top-(--sidebar-top) z-10 hidden h-(--sidebar-height) w-36 self-start border-r md:flex"
	>
		<div class="p-4">
			<enhanced:img
				fetchpriority="high"
				alt="Headshot for artist, painter, and sculpter Jacqui Dorsey"
				src={headshot}
			></enhanced:img>

			<!--  <Navigation class="pt-8" /> -->
			<ul class="py-4">
				{#each navLinks as link (link)}
					{@const Icon = link.icon}
					<a class="btn hover:preset-tonal mb-2 w-full justify-start" href={resolve(link.href)}>
						<Icon class="size-4 " />

						<span class="text-base text-wrap">
							{link.label}
						</span>
					</a>
				{/each}
			</ul>
		</div>
	</aside>

	<!-- Main Content -->
	<main class="flex-1 px-8 py-4">
		{@render children?.()}
	</main>
</div>
<!-- Footer -->
<footer
	class="border-surface-200-800 h-(--footer-height) border p-2 text-right text-xs md:p-4 md:text-sm lg:text-base"
>
	Copyright © 2026 Jacqui Dorsey. All rights reserved.
</footer>

<!-- </div> -->
<style lang="postcss">
	@reference "tailwindcss";

	/* .container {
		@apply grid h-full grid-cols-[auto_1fr];
	} */
</style>
