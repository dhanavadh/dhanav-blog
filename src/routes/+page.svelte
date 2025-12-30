<script>
	import Message from '$lib/components/+Message.svelte';
</script>

<section class="flex flex-col w-full max-w-lg mx-auto p-6 mt-12 min-h-screen gap-6">
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
		<h1 class="text-2xl">Blogs</h1>
		<ul class="flex flex-col gap-2 mt-2">
			<li class="flex pt-2 pb-4 border-b border-stone-300">
				<div class="flex flex-col">
					<p class="text-xs text-stone-400 rounded-full border w-fit px-1.5 mb-1">Thai</p>
					<a href="/blogs" class="link"
						><h1 class="text-lg">Attending Exchange Student at Osaka, Japan</h1></a
					>
					<p class="text-stone-500 line-clamp-2 mt-1 text-sm">
						Additionally, I have a growing interest in religious studies and philosophy,
						particularly Buddhist philosophy. I plan to include topics related to philosophy on this
						site, so you can get to know me better and see the various aspects of who I am.
					</p>
				</div>
			</li>
			<li class="flex pt-2 pb-4 border-b border-stone-300">
				<div class="flex flex-col">
					<p class="text-xs text-stone-400 rounded-full border w-fit px-1.5 mb-1">Thai</p>
					<a href="/blogs/2025" class="link"
						><h1 class="text-lg font-looped">รีวิวไปแลกเปลี่ยนที่โอซาก้า 2025</h1></a
					>
					<p class="text-stone-500 line-clamp-2 mt-1 font-looped text-sm">
						โดยที่ประชาชนแห่งสหประชาชาติได้ยืนยันอีกครั้งไว้ในกฎบัตรถึงศรัทธาในสิทธิมนุษยชนขั้นพื้นฐาน
					</p>
				</div>
			</li>
		</ul>
	</div>
</section>
<Message />
