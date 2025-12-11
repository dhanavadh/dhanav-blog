<script lang="ts">
    import { ArrowUpRight } from '@lucide/svelte';
    import favicon from '$lib/assets/favicon.svg';
 
</script>


<nav class="flex w-full justify-between max-w-lg mx-auto p-6 sticky top-0 bg-stone-50">
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