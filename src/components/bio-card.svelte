<script>
	export let src;
	export let alt = '';
	export let name;
	export let citation;
	export let years;
	export let classes = '';
	export { classes as class };
</script>

<div
	class={'bg-maroon bg-opacity-[.85] flex flex-col items-center md:flex-row gap-2 h-min w-full p-4 rounded-md backdrop-blur-3xl shadow-lg -z-10' +
		classes}
>
	<div class="break-words w-1/3 flex flex-col items-center justify-center"><div>
		<img {src} {alt} class="rounded-md object-scale-down block" />
		<p class=" cursor-pointer text-gold-400 break-words max-w-sm text-center hover:text-white"><a href="{citation}">Source</a></p></div>
	</div>
	<div
		class="text-center text-gold-400 p-2 w-2/3"
	>
		<strong class="text-4xl lg:text-5xl">{name}</strong>
		<br />
		<em class="mb-4 text-3xl md:mb-8 lg:text-4xl">{years}</em>
		<div class="space-y-4 text-2xl lg:space-y-8 lg:text-2xl">
			<slot />
		</div>
	</div>
</div>

<style>
	.bg-maroon > * {
		text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
	}
</style>
