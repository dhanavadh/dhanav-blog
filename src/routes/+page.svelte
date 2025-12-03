<script lang="ts">
	import { Dot } from '@lucide/svelte';
</script>

<section class="flex flex-col w-full max-w-md mx-auto p-6 mt-12 min-h-screen gap-6">
	<div class="paragraph">
		<h1 class="text-4xl">Dhanavadh Saito</h1>
		<p>
			Student at <a href="https://svelte.dev/docs/kit" class="link">Chulalongkorn University</a>
		</p>
		<p>
			Coding excites me because it allows me to bring creative ideas to life while maintaining
			structure and organization, which I truly enjoy.
		</p>
		<p>
			Outside of programming, one of my favorite hobbies is playing Karuta, a traditional Japanese
			card game. I’m also an active member of the Bangkok Karuta Club, where I get to engage with
			others who share this interest.
		</p>
		<p>
			Additionally, I have a growing interest in religious studies and philosophy, particularly
			Buddhist philosophy. I plan to include topics related to philosophy on this site, so you can
			get to know me better and see the various aspects of who I am.
		</p>
	</div>
	<div class="flex flex-col">
		<h1 class="text-2xl">Articles</h1>
		<p>This is my notebook to keep the things I'm working around.</p>
		<section class="flex flex-col gap-2 mt-2">
			<div class="flex">
				<Dot />
				<div class="flex flex-col">
					<a href="/articles" class="link"><h1 class="text-lg">Anthropic</h1></a>
					<p>Undergraduate Student at Chulalongkorn University</p>
				</div>
			</div>
			<div class="flex">
				<Dot />
				<div class="flex flex-col">
					<h1 class="text-lg">Heading 1</h1>
					<p>Undergraduate Student at Chulalongkorn University</p>
				</div>
			</div>
			<div class="flex">
				<Dot />
				<div class="flex flex-col">
					<h1 class="text-lg">Heading 1</h1>
					<p>Undergraduate Student at Chulalongkorn University</p>
				</div>
			</div>
		</section>
	</div>
	<div class="flex flex-col">
		<h1 class="text-2xl">Projects</h1>
		<p>What I've done recently</p>
		<section class="flex flex-col gap-2 mt-2">
			<div class="flex flex-col p-4 border w-fit rounded-xl border-stone-300">
				<h1 class="text-lg">Heading 1</h1>
				<p>Undergraduate Student at Chulalongkorn University</p>
			</div>
			<div class="flex flex-col p-4 border w-fit rounded-xl border-stone-300">
				<h1 class="text-lg">Heading 1</h1>
				<p>Undergraduate Student at Chulalongkorn University</p>
			</div>
			<div class="flex flex-col p-4 border w-fit rounded-xl border-stone-300">
				<h1 class="text-lg">Heading 1</h1>
				<p>Undergraduate Student at Chulalongkorn University</p>
			</div>
			<div class="flex flex-col p-4 border w-fit rounded-xl border-stone-300">
				<h1 class="text-lg">Heading 1</h1>
				<p>Undergraduate Student at Chulalongkorn University</p>
			</div>
			<div class="flex flex-col p-4 border w-fit rounded-xl border-stone-300">
				<h1 class="text-lg">Heading 1</h1>
				<p>Undergraduate Student at Chulalongkorn University</p>
			</div>
		</section>
	</div>
</section>
