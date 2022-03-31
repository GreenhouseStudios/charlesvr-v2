<script>
	export let title;
	export let bg;
	export let noScrim = false;
	export let opacity = '50';
	export let classes = '';
	export { classes as class };

	let background;
	noScrim
		? (background = `url("${bg}")`)
		: (background = `linear-gradient(rgba(0, 0, 0, 0.${opacity}), rgba(0, 0, 0, 0.${opacity})),url("${bg}")`);
</script>

<div
	class={'grid h-[95vh] place-items-center bg-cover bg-top md:h-screen ' + classes}
	style:background-image={background}
>
	<div class="px-4 text-center text-6xl text-white md:text-7xl">
		{title}
	</div>
</div>

<style>
</style>
