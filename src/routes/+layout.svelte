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
	// <li>
	// 		<a href="/" class:is-active={page.route.id === '/' || page.route.id === '/[id]'}>Homepage</a>
	// 	</li>
	// 	<li>
	// 		<a href="/about" class:is-active={page.route.id === '/about'}>About</a>
	// 	</li>
</script>

<!-- <Drawer> -->

<!-- <div class="max-w-96 p-8">
	<enhanced:img
		fetchpriority="high"
		alt="Headshot for artist, painter, and sculpter Jacqui Dorsey"
		src={headshot}
	></enhanced:img>

	<Navigation class="pt-8" />
</div> -->

<!-- </Drawer> -->
<!-- <AppShell
	slotSidebarLeft="w-0 lg:w-64"
	class="max-w-screen-xl bg-surface-50-900-token py-4 px-8"
	slotFooter="mt-4"
>
	{#snippet header()}
	
			<AppBar padding="pb-8" background="bg-surface-50-900-token">
				{#snippet lead()}
					
						
					
					{/snippet}
				{#snippet trail()}
					
					
					{/snippet}
			</AppBar> -->

<!-- 		
	{/snippet}
	{#snippet sidebarLeft()} -->

<!-- {/snippet}
	{#snippet footer()} -->
<!-- <span class="text-xs md:text-sm lg:text-base"></span> -->
<!-- {/snippet} -->
<!-- </AppShell> -->

<!-- <div class="grid h-screen grid-rows-[auto_1fr_auto]"> -->
<!-- Header -->

<AppBar class="sticky top-0 z-20">
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
<!-- Grid Columns -->
<div class="flex">
	<!-- Left Sidebar. Hidden on mobile -->
	<aside
		class="border-surface-200-800 sticky top-17 z-10 hidden h-[calc(100vh-68px)] self-start border md:flex"
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
	<main class="grow px-8 py-4">
		{@render children?.()}
	</main>
</div>

<!-- Footer -->
<footer
	class="border-surface-200-800 h-12 border p-2 text-left text-xs md:h-16 md:p-4 md:text-right md:text-sm lg:text-base"
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
