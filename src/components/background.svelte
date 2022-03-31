<script>
	export let src;
	export let parallax = false;
	export let scrim = 'dark';
	export let classes = '';
	export { classes as class };
	export let cover = true;
	export let opacity = '50';

	let background;
	switch (scrim) {
		case 'light':
			background = `linear-gradient(rgba(255, 255, 255, 0.${opacity}), rgba(255, 255, 255, 0.${opacity})),url("${src}")`;
			break;

		case 'dark':
			background = `linear-gradient(rgba(0, 0, 0, 0.${opacity}), rgba(0, 0, 0, 0.${opacity})),url("${src}")`;
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
	class={'h-min ' + classes}
>
	<slot />
</div>

<style>
</style>
