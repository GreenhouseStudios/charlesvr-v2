<script>
	import Card from './card.svelte';
	import NextChapter from './next-chapter.svelte';
	import {ChevronRightIcon} from 'svelte-feather-icons';
	import 'material-icons/iconfont/material-icons.css';
	export let numeral;
	export let chapter;
	export let path;
</script>

<div class="flex items-center sm:w-max shadow-lg m-4 md:m-12">
	<a
		id="button"
		class="group flex flex-row items-center justify-center rounded-xl p-4 shadow-black/30 transition-all duration-500  sm:gap-6"
		href={path}
	>
		<p class="numeral text-5xl px-2 text-gold-400 transition-colors group-hover:text-gold-400 duration-500">
			{numeral}
		</p>
		<p class=" text-2xl text-white chapter">
			{chapter} 	
		</p>
		<span class="material-icons">chevron_right</span>
		</a>
</div>

<style>
	#button {
		/* background: linear-gradient(to left, #401221 50%, rgb(84, 24, 44) 50%); */
		background-size: 200% 100%;
		background-position: right bottom;
		border: #F6C869 3px solid;
		background: rgb(84, 24, 44);
	}

	.material-icons{
		color: #F6C869;
		font-size: 48px;
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
	font-size: 36px;
  }

  .material-icons{
		color: #F6C869;
		font-size: 36px;
	}
}
</style>
