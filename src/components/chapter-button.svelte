<script>
	import 'material-icons/iconfont/material-icons.css';
	export let numeral;
	export let chapter;
	export let path;
	export let classes = '';
	export { classes as class };
</script>

<div class={"flex items-center sm:w-max drop-shadow-[0_0_15px_rgba(0,0,0,0.15)] m-5 " +
classes}>
	<a
		id="button"
		class="group flex flex-row items-center justify-center rounded-3xl py-2 px-4  sm:gap-0"
		href={path}
	>
		<!-- <p class="numeral text-[36px] px-2 text-white transition-colors group-hover:text-gold-400">
			{numeral}
		</p> -->
		<p class="m-3 text-xl text-white chapter group-hover:text-gold-400">
			Next Chapter
		</p>
		<span class="material-icons text-white group-hover:text-gold-400">chevron_right</span>
		</a>
</div>

<style>
	#button {
		/* background: linear-gradient(to left, #401221 50%, rgb(84, 24, 44) 50%); */
		background-size: 200% 100%;
		background-position: right bottom;
		border: #F6C869 5px solid;
		background: #54182c;
	}

	#button:hover {
		background-position: left bottom;
		background-color: #401421	
	}

	.material-icons{
		font-size: 42px;
	}

	.chapter {
		font-weight: 500;
	}



	@media screen and (max-width: 768px) {

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
		font-size: 36px;
	}
}
</style>
