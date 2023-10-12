<script>
	export let title;
	export let bg;
	export let scrim = 'dark';
	export let opacity1 = '0';
	export let opacity2 = '100';
	export let classes = '';
	export { classes as class };

	let background;
	switch (scrim) {
		case 'light':
			background = `linear-gradient(rgba(255, 255, 255, 0.${opacity1}), rgba(255, 255, 255, 0.${opacity2})),url("${bg}")`;
			break;

		case 'dark':
			background = `linear-gradient(rgba(0, 0, 0, 0.${opacity1}), rgba(0, 0, 0, 0.${opacity2})),url("${bg}")`;
			break;

		case 'maroon':
			background = `linear-gradient(rgba(64, 18, 33, 0.${opacity1}), rgba(64, 18, 33, 0.${opacity2})),url("${bg}")`;
			break;

		case 'gold':
			background = `linear-gradient(rgba(254, 197, 82, 0.${opacity1}), rgba(254, 197, 82, 0.${opacity2})),url("${bg}")`;
			break;	

		case 'none':
			background = `url("${bg}")`;
			break;

		default:
			background = `${scrim},url("${bg}")`;
			break;
	}
</script>

<div
	class={'grid h-[100vh] place-items-center bg-cover bg-top md:h-screen ' + classes}
	style:background-image={background}
>
	<div class="px-4 text-center text-5xl md:text-6xl text-white md:text-[72px] drop-shadow-lg ">
		{title}
	</div>
</div>

<style>
</style>
