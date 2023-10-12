<script>
	export let light = false;
	export let classes = '';
	export { classes as class };
</script>

<div
	class={
		' md:leading-12 font-normal md:my-12 my-4 backdrop-blur-2xl rounded-md  h-min ' +
		(light
			? 'bg-opacity-90 text-[#1C0A10] lg:text-[28px] md:text-[24px] text-[20px]  '
			: 'bg-opacity-80 text-[#F9F4E8] lg:text-[28px] md:text-[24px] text-[20px] ') +
		classes}

>
	<slot />
</div>

<style>
	.p-4 {
		padding: clamp(16px, 1em, 32px);
	}

</style>

<!-- bg-[#F9F4E8]
bg-[#1C0A10] -->
