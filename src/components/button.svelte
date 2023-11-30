<script>
	import 'material-icons/iconfont/material-icons.css';
	export let title;
	export let path;
</script>

<div class="flex items-center sm:w-max">
	<a
		id="button"
		class="group flex flex-row items-center justify-center rounded-xl p-3 shadow-black/30   sm:gap-6"
		href={path}
	>

		<p class=" text-xl text-white title">
			{title} 	
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
		background: #401421
		}

	.material-icons{
		color: #F6C869;
		font-size: 48px;
	}

	#button:hover {
		background-position: left bottom;
		background: #000000;
	}



	@media screen and (max-width: 650px) {

  #button {
	display:flex;
	flex-direction: row;
	justify-content: center;
    padding: 10px;
	background-color: #401421
  }

  .material-icons{
		color: #F6C869;
		font-size: 36px;
	}
}
</style>
