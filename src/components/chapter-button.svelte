<script>
	import Card from './card.svelte';
	import NextChapter from './next-chapter.svelte';
	import {ChevronRightIcon} from 'svelte-feather-icons';
	export let numeral;
	export let chapter;
	export let path;
	export let light = false;
</script>

<div class=" sm:w-max m-5">
	<a
		id="button"
		class="group flex flex-row items-center justify-center rounded-xl px-6 shadow-lg shadow-black/30 transition-all duration-500  sm:gap-6"
		href={path}
	>
		<p class="pb-2  px-2 text-6xl text-gold-500 transition-colors duration-500 group-hover:text-gold-400">
			{numeral}
		</p>
		<p class="py-6 text-3xl text-white px-5 chapter">
			{chapter} 	
		</p>
		<ChevronRightIcon size="3x" class="text-gold-500 transition-colors duration-1000 group-hover:text-gold-400"/>
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

	@media screen and (max-width: 650px) {
  .chapter {
    display: none;
  }
  #button {
	display:flex;
	flex-direction: row;
	justify-content: center;
	width: max-content;
  }
}
</style>
