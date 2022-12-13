<script>
	export let src;
	export let parallax = false;
	export let scrim = 'dark';
	export let classes = '';
	export { classes as class };
	export let cover = true;
	export let opacity1 = '0';
	export let opacity2 = '100';

	let background;
	switch (scrim) {
		case 'light':
			background = `linear-gradient(rgba(255, 255, 255, 0.${opacity1}), rgba(255, 255, 255, 0.${opacity2})),url("${src}")`;
			break;

		case 'dark':
			background = `linear-gradient(rgba(0, 0, 0, 0.${opacity1}), rgba(0, 0, 0, 0.${opacity2})),url("${src}")`;
			break;

		case 'maroonblack':
			background = `linear-gradient(rgba(64, 18, 33, 0.${opacity1}), rgba(0, 0, 0, 0.${opacity2})),url("${src}")`;
			break;


		case 'maroon':
			background = `linear-gradient(rgba(64, 18, 33, 0.${opacity1}), rgba(64, 18, 33, 0.${opacity2})),url("${src}")`;
			break;

		case 'maroongold':
			background = `linear-gradient(rgba(64, 18, 33, 0.${opacity1}), rgba(246, 200, 105, 0.${opacity2})),url("${src}")`;
			break;

		case 'gold':
			background = `linear-gradient(rgba(246, 200, 105, 0.${opacity1}), rgba(246, 200, 105, 0.${opacity2})),url("${src}")`;
			break;	

		case 'goldblack':
			background = `linear-gradient(rgba(246, 200, 105, 0.${opacity1}), rgba(0, 0, 0, 0.${opacity2})),url("${src}")`;
			break;	

		case 'none':
			background = `url("${src}")`;
			break;

		default:
			background = `${scrim},url("${src}")`;
			break;
	}
</script>

<div
	style:background-image={background}
	class:bg-fixed={parallax}
	class:bg-cover={cover}
	class={'h-min flex justify-center'+ classes}
>
	<slot />
</div>

<style>
</style>
