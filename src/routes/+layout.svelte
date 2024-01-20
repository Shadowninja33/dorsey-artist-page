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
		drawerStore.open({});
	}
</script>

<Drawer>
	<img class="p-4" alt="Headshot for artist, painter, and sculpter Jacqui Dorsey" src={headshot} />
	<Navigation />
</Drawer>
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<svelte:fragment slot="header">
		<AppBar>
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
					<strong class="text-xl uppercase">Jacqui Dorsey</strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<img
			class="p-4"
			alt="Headshot for artist, painter, and sculpter Jacqui Dorsey"
			src={headshot}
		/>
		<Navigation />
	</svelte:fragment>
</AppShell>
