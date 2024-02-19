<script>
	export let light = false;
	export let classes = '';
	export { classes as class };
</script>

<div
	class={
		'font-normal md:my-12 my-12 backdrop-blur-2xl rounded-md  h-min p-4 m-2 md:p-16  md:m-16 leading-relaxed text-[16px] md:text-[18px] lg:text-[20px] ' +
		(light
			? 'bg-opacity-90 text-[#1C0A10]'
			: 'bg-opacity-80 text-[#F9F4E8]') +
		classes}

>
	<slot />
</div>

<style>

</style>