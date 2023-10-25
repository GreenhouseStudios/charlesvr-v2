<script>
	export let light = false;
	export let classes = '';
	export { classes as class };

</script>
<div
class={
	'' +
	(light
		? ' text-[#1C0A10]  bg-[#FFE2A5] '
		: ' text-[#F9F4E8]  bg-[#54182c] ') +
	classes}
>
<slot />
</div>
<style>
</style>
