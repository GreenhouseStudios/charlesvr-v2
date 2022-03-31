<script>
	export let src;
	export let alt = '';
	export let name;
	export let years;
	export let noLine = false;
	export let topLine = false;
</script>

<div class="flex flex-col items-center">
	{#if topLine}
		<div class="h-5 w-[2px] bg-white bg-opacity-60" />
	{/if}
	<div class="max-w-[128px] shadow-lg">
		<img {src} {alt} class="rounded-t" />
		<div class="rounded-b bg-black px-2">
			<div class="py-2 text-center text-white">
				<div class="leading-tight tracking-wide">
					{name}
				</div>
				<em>{years}</em>
			</div>
		</div>
	</div>
	{#if !noLine}
		<div class="h-5 w-[2px] bg-white bg-opacity-60" />
	{/if}
</div>

<style>
</style>
