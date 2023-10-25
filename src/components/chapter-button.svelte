<script>
	import 'material-icons/iconfont/material-icons.css';
	export let numeral;
	export let chapter;
	export let path;
	export let classes = '';
	export { classes as class };
</script>

<div class={"flex items-center sm:w-max  " +
classes}>
	<a
		id="button"
		class="group flex flex-row items-center justify-center rounded-xl p-2 shadow-black/30   sm:gap-6"
		href={path}
	>
		<p class="numeral text-4xl px-2 text-gold-400 transition-colors group-hover:text-gold-400 duration-500">
			{numeral}
		</p>
		<p class=" text-xl text-white chapter">
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
		background: #54182c;
	}

	#button:hover {
		background-position: left bottom;
		background: #000000;
	}

	.material-icons{
		color: #F6C869;
		font-size: 48px;
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
