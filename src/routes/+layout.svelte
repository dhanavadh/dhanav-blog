<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ArrowUpRight } from '@lucide/svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col w-full items-start justify-center text-green-900">
	<nav class="flex w-full justify-between max-w-md mx-auto p-6 sticky top-0 bg-stone-50">
		<a href="/" class="link">
			<img src={favicon} alt="Logo" width="16" height="16" />
			<p class="hidden sm:flex">Dhanavadh S.</p></a
		>
		<div class="flex gap-2">
			<a href="/" target="_blank" class="link"
				><p>Github</p>
				<ArrowUpRight class="w-4 h-4" /></a
			>
			<a href="/" target="_blank" class="link"
				><p>LinkedIn</p>
				<ArrowUpRight class="w-4 h-4" />
			</a>
		</div>
	</nav>
	{@render children()}
</div>
