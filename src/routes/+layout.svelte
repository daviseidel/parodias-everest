<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell class="bg-surface-800">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar class="p-3" background="bg-primary-500">
			<svelte:fragment slot="lead">
        <img class="w-7 space-x-1 " src="./favicon.png"alt="logo ">
				<strong class="text-xl uppercase"> Paródias Everest</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
