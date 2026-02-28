<script lang="ts">
	import Navigation from '$lib/components/navigation/navigation.svelte';
	import headshot from '$lib/images/dorsey-head-shot.png?enhanced';
	import '../app.css';
	// import {
	// 	AppBar,
	// 	AppShell,
	// 	initializeStores,
	// 	Drawer,
	// 	getDrawerStore,
	// 	LightSwitch
	// } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	// initializeStores();

	// const drawerStore = getDrawerStore();

	// function drawerOpen(): void {
	// 	drawerStore.open();
	// }
</script>

<!-- <Drawer> -->
<div class="p-8 max-w-96">
	<enhanced:img
		fetchpriority="high"
		alt="Headshot for artist, painter, and sculpter Jacqui Dorsey"
		src={headshot}
	/>
	<Navigation class="pt-8" />
</div>
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
<AppBar>
	<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
		<AppBar.Lead>
			<div class="flex items-center">
				<button class="lg:hidden btn btn-sm mr-4" aria-label="Open drawer">
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
			</div>
		</AppBar.Lead>
		<AppBar.Headline>
			<a href="/"><h1 class="uppercase text-2xl"></h1></a>
		</AppBar.Headline>
		<AppBar.Trail>
			<!-- <LightSwitch /> -->
			<!-- 
			<button type="button" class="btn-icon hover:preset-tonal"><SearchIcon class="size-6" /></button>
			<button type="button" class="btn-icon hover:preset-tonal"><CalendarIcon class="size-6" /></button>
			<button type="button" class="btn-icon hover:preset-tonal"><CircleUserIcon class="size-6" /></button> -->
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>

<!-- 		
	{/snippet}
	{#snippet sidebarLeft()} -->

<div class="px-8 pt-4">
	<enhanced:img
		fetchpriority="high"
		alt="Headshot for artist, painter, and sculpter Jacqui Dorsey"
		src={headshot}
	/>
	<Navigation class="pt-8" />
</div>

<!-- {/snippet}
	{#snippet footer()} -->

<span class="text-xs md:text-sm lg:text-base">
	Copyright © 2026 Jacqui Dorsey. All rights reserved.
</span>

<!-- {/snippet} -->
{@render children?.()}
<!-- </AppShell> -->
