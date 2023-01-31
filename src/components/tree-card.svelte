<script>
	export let src;
	export let alt = '';
	export let name;
	export let years;
	export let noLine = false;
	export let topLine = false;
</script>

<div class="flex flex-col items-center card">
	{#if topLine}
		<div class="h-5 w-[3px] bg-[#fec755]" />
	{/if}
	<div class="shadow-lg  rounded-sm">
		<img {src} {alt} class="rounded-t" />
		<div class="rounded-b px-2 background">
			<div class="md:block hidden">
			<div class="py-2 text-base text-center text-white fontcolor">
				<div class="leading-tight tracking-wide">
					{name}
				</div>
				<em>{years}</em>
			</div>
		</div>
		</div>
	</div>
	{#if !noLine}
		<div class="h-5 w-[3px] bg-[#fec755]" />
	{/if}
</div>

<style>
	.background {
		background-color: #54172c;
	}

	.fontcolor {
		color: #fec755;
	}

	.card{
		filter: drop-shadow(0 0 5px rgb(0 0 0 / 0.25));	
	}
</style>
