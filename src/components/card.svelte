<script>
	export let light = false;
	export let classes = '';
	export { classes as class };
	export let flex = 'flex';
</script>

<div
	class={flex +
		' text-[22px] leading-10 font-normal p-4 backdrop-blur-3xl rounded-md shadow-lg h-min ' +
		(light
			? 'bg-white bg-opacity-70 text-black font-medium '
			: 'bg-black bg-opacity-60 text-white ') +
		classes}
>
	<slot />
</div>

<style>
	.p-4 {
		padding: clamp(16px, 1em, 32px);
	}
</style>
