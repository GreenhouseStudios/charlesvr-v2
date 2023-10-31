<script>
	export let light = false;
	export let classes = '';
	export { classes as class };
</script>

<div
	class={
		'font-normal md:my-12 my-4 backdrop-blur-2xl rounded-md  h-min m-4 p-4 md:m-16 md:p-16 leading-relaxed ' +
		(light
			? 'bg-opacity-90 text-[#1C0A10] md:text-[24px] text-[20px]  '
			: 'bg-opacity-80 text-[#F9F4E8] md:text-[24px] text-[20px] ') +
		classes}

>
	<slot />
</div>

<style>

</style>

<!-- bg-[#F9F4E8]
bg-[#1C0A10] -->
