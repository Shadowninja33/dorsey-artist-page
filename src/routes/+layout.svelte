<script lang="ts">
	import './layout.css';
	import headshot from '$lib/images/dorsey-head-shot.png?enhanced';
	import '../app.css';
	import { AppBar, Navigation } from '@skeletonlabs/skeleton-svelte';
	import LightSwitch from '$lib/components/ui/light-switch.svelte';
	import { HouseIcon, BookIcon, MenuIcon, ArrowLeftIcon, ArrowRightIcon } from '@lucide/svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	const mainLinks = [
		{ label: 'Home', href: '/#', icon: HouseIcon },
		{ label: 'About', href: '/about', icon: BookIcon }
		// recreation: [
		// 	{ label: 'Biking', href: '/#', icon: BikeIcon },
		// 	{ label: 'Sailing', href: '/#', icon: SailboatIcon },
		// 	{ label: 'Hiking', href: '/#', icon: MountainIcon },
		// ],
		// relaxation: [
		// 	{ label: 'Lounge', href: '/#', icon: TreePalmIcon },
		// 	{ label: 'Spa', href: '/#', icon: BubblesIcon },
		// 	{ label: 'Sleep', href: '/#', icon: BedDoubleIcon },
		// ],
	];

	const galleryLinks = [
		{ label: 'Home', href: '/#', icon: HouseIcon },
		{ label: 'About', href: '/about', icon: BookIcon },
		{ label: 'Previous', href: '/about', icon: ArrowLeftIcon },
		{ label: 'Next', href: '/about', icon: ArrowRightIcon }
	];
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
	class="max-w-screen-xl bg-surface-50-900-token p-8"
	slotFooter="mt-8"
> -->
<!-- {#snippet header()} -->
<!-- <AppBar padding="px-8 py-4" background="bg-surface-50-900-token">
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
<AppBar>
	<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
		<AppBar.Lead>
			<MenuIcon class="size-4" />
		</AppBar.Lead>

		<AppBar.Headline>
			<a href="/">
				<h1 class="text-base uppercase sm:text-2xl">Jacqui Dorsey</h1>
			</a>
		</AppBar.Headline>
		<AppBar.Trail>
			<LightSwitch />
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>
<!-- Grid Columns -->
<div class="grid h-full grid-cols-1 md:grid-cols-[auto_1fr]">
	<!-- Left Sidebar. Hidden on mobile -->
	<aside class="hidden md:block">
		<div class="px-8 pt-4">
			<enhanced:img
				fetchpriority="high"
				alt="Headshot for artist, painter, and sculpter Jacqui Dorsey"
				src={headshot}
			></enhanced:img>

			<!-- <Navigation class="pt-8" /> -->
			<ul>
				{#each galleryLinks as link (link)}
					{@const Icon = link.icon}
					<a class="btn hover:preset-tonal w-full content-start px-2" href={link.href}>
						<Icon class="size-4" />

						<span class="text-base">
							{link.label}
						</span>
					</a>
				{/each}
			</ul>
		</div>
	</aside>
	<!-- Main Content -->
	<main class="space-y-4 p-4">
		{@render children?.()}
	</main>

	<Navigation layout="bar" class="sticky bottom-0 md:hidden">
		<Navigation.Menu class="grid grid-cols-4 gap-2">
			{#each galleryLinks as link (link)}
				{@const Icon = link.icon}
				<Navigation.TriggerAnchor href={link.href}>
					<Icon class="size-5" />
					<Navigation.TriggerText>{link.label}</Navigation.TriggerText>
				</Navigation.TriggerAnchor>
			{/each}
		</Navigation.Menu>
	</Navigation>
</div>

<!-- Footer -->
<footer class="p-4 text-xs md:text-sm lg:text-base">
	Copyright © 2026 Jacqui Dorsey. All rights reserved.
</footer>
<!-- </div> -->
