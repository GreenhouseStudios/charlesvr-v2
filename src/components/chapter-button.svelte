<script>
	import Card from './card.svelte';
	import NextChapter from './next-chapter.svelte';
	import {ChevronRightIcon} from 'svelte-feather-icons';
	export let numeral;
	export let chapter;
	export let path;
	export let light = false;
</script>

<div class=" sm:w-max shadow-lg">
	<a
		id="button"
		class="group flex flex-row items-center justify-center rounded-sm p-4 shadow-black/30 transition-all duration-500  sm:gap-6"
		href={path}
	>
		<p class="  numeral text-5xl px-2 text-gold-400 transition-colors group-hover:text-gold-400 duration-500">
			{numeral}
		</p>
		<p class=" text-2xl text-white chapter">
			{chapter} 	
		</p>
		<ChevronRightIcon size="3x" class="text-gold-400  transition-colors duration-1000 group-hover:text-gold-400"/>
		</a>
</div>

<style>
	#button {
		/* background: linear-gradient(to left, #401221 50%, rgb(84, 24, 44) 50%); */
		background-size: 200% 100%;
		background-position: right bottom;
		border: #F6C869 2px solid;
		background: rgb(84, 24, 44);
	}

	#button:hover {
		background-position: left bottom;
		background: rgb(84, 24, 44);
        transform: scale(1.10);
	}

	@media screen and (max-width: 650px) {
  .chapter {
    display: none;
  }
  #button {
	display:flex;
	flex-direction: row;
	justify-content: center;
    padding: 10px;
  }

  .numeral{
	font-size: 48px;
  }
}
</style>
