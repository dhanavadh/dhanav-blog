<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ArrowUpRight } from '@lucide/svelte';
	import Navbar from '$lib/components/+Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />	
</svelte:head>

<div class="flex flex-col w-full items-start justify-center text-stone-900">
	<Navbar />
	{@render children()}
</div>
