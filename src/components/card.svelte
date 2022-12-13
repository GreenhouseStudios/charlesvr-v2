<script>
	export let light = false;
	export let classes = '';
	export { classes as class };
	export let flex = 'flex';
</script>

<div
	class={flex +
		'text-lg md:text-[22px] md:leading-9 font-normal md:px-10 px-5 py-5 md:my-12 my-4 backdrop-blur-3xl rounded-md shadow-lg h-min ' +
		(light
			? 'bg-[#F9F4E8] bg-opacity-90 text-[#1C0A10]  '
			: 'bg-[#1C0A10] bg-opacity-80 text-[#F9F4E8] ') +
		classes}
>
	<slot />
</div>

<style>
	.p-4 {
		padding: clamp(16px, 1em, 32px);
	}
</style>
