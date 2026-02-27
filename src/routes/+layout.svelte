<script lang="ts">
	import Navigation from '$lib/components/navigation/navigation.svelte';
	import headshot from '$lib/images/dorsey-head-shot.png?enhanced';
	import '../app.css';
	import {
		AppBar,
		AppShell,
		initializeStores,
		Drawer,
		getDrawerStore,
		LightSwitch
	} from '@skeletonlabs/skeleton';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<Drawer>
	<div class="p-8 max-w-96">
		<enhanced:img
			fetchpriority="high"
			alt="Headshot for artist, painter, and sculpter Jacqui Dorsey"
			src={headshot}
		/>
		<Navigation class="pt-8" />
	</div>
</Drawer>
<AppShell
	slotSidebarLeft="w-0 lg:w-64"
	class="max-w-screen-xl bg-surface-50-900-token py-4 px-8"
	slotFooter="mt-4"
>
	{#snippet header()}
	
			<AppBar padding="pb-8" background="bg-surface-50-900-token">
				{#snippet lead()}
					
						<div class="flex items-center">
							<button class="lg:hidden btn btn-sm mr-4" aria-label="Open drawer" onclick={drawerOpen}>
								<span>
									<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
										<rect width="100" height="20" />
										<rect y="30" width="100" height="20" />
										<rect y="60" width="100" height="20" />
									</svg>
								</span>
							</button>
						</div>
						<a href="/"><h1 class="uppercase h2">Jacqui Dorsey</h1></a>
					
					{/snippet}
				{#snippet trail()}
					
						<LightSwitch />
					
					{/snippet}
			</AppBar>
		
	{/snippet}
	{#snippet sidebarLeft()}
	
			<div>
				<enhanced:img
					fetchpriority="high"
					alt="Headshot for artist, painter, and sculpter Jacqui Dorsey"
					src={headshot}
				/>
				<Navigation class="pt-8" />
			</div>
		
	{/snippet}
	{#snippet footer()}
	
			<span class="text-xs md:text-sm lg:text-base">
				Copyright © 2026 Jacqui Dorsey. All rights reserved.
			</span>
		
	{/snippet}
	{@render children?.()}
</AppShell>
