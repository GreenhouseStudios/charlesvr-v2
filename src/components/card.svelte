<script>
	export let light = false;
	export let classes = '';
	export { classes as class };
</script>

<div
	class={
		'font-normal md:my-12 my-12 backdrop-blur-2xl rounded-md  h-min m-2 p-4 md:m-16 md:p-16 leading-relaxed text-[18px] md:text-[20px] lg:text-[22px] ' +
		(light
			? 'bg-opacity-90 text-[#1C0A10]'
			: 'bg-opacity-80 text-[#F9F4E8]') +
		classes}

>
	<slot />
</div>

<style>

</style>