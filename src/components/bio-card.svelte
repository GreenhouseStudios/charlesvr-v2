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
	class={'bg-maroon bg-opacity-[.85] flex flex-col md:flex-row gap-2 h-min w-full p-4 rounded-md backdrop-blur-3xl shadow-lg ' +
		classes}
>
	<div class="shrink basis-1/3">
		<img {src} {alt} class="rounded-md object-scale-down" />
		<strong class="text-4xl lg:text-5xl">{citation}</strong>
	</div>
	<div
		class="mt-4 mb-8 flex grow basis-2/3 flex-col items-center justify-center px-4 text-center text-gold-400 md:mt-8"
	>
		<strong class="text-4xl lg:text-5xl">{name}</strong>
		<br />
		<em class="mb-4 text-3xl md:mb-8 lg:text-4xl">{years}</em>
		<div class="space-y-4 text-2xl lg:space-y-8 lg:text-3xl">
			<slot />
		</div>
	</div>
</div>

<style>
	.bg-maroon > * {
		text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
	}
</style>
