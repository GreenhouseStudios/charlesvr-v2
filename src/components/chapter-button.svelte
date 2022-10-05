<script>
	import Card from './card.svelte';
	import NextChapter from './next-chapter.svelte';
	export let numeral;
	export let chapter;
	export let path;
	export let light = false;
</script>

<div class=" w-full sm:w-max">
	<NextChapter>
	</NextChapter>
	<a
		id="button"
		class="group flex m-10 flex-col items-center rounded-xl px-6 shadow-lg shadow-black/30 transition-all duration-500 sm:flex-row sm:gap-6"
		href={path}
	>
		<p class="pb-2  px-2 text-6xl text-gold-500 transition-colors duration-500 group-hover:text-gold-400">
			{numeral}
		</p>
		<p class="py-6 text-3xl text-white px-5">
			{chapter}
		</p>
	</a>
</div>

<style>
	#button {
		background: linear-gradient(to left, #401221 50%, #54182c 50%);
		background-size: 200% 100%;
		background-position: right bottom;
	}

	#button:hover {
		background-position: left bottom;
	}


</style>
