<script lang="ts">
	import Navigation from '$lib/components/navigation/navigation.svelte';
	import headshot from '$lib/images/woman.avif';
	import '../app.postcss';
	import {
		AppBar,
		AppShell,
		initializeStores,
		Drawer,
		getDrawerStore,
		LightSwitch
	} from '@skeletonlabs/skeleton';

	initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<Drawer>
	<div class="p-8 max-w-96">
		<img alt="Headshot for artist, painter, and sculpter Jacqui Dorsey" src={headshot} />
		<Navigation class="pt-8" />
	</div>
</Drawer>
<AppShell slotSidebarLeft="w-0 lg:w-64" class="max-w-screen-xl bg-surface-50-900-token p-8">
	<svelte:fragment slot="header">
		<AppBar background="bg-surface-50-900-token">
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
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
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div class="px-8 pt-4">
			<img alt="Headshot for artist, painter, and sculpter Jacqui Dorsey" src={headshot} />
			<Navigation class="pt-8" />
		</div>
	</svelte:fragment>
	<slot />
</AppShell>
