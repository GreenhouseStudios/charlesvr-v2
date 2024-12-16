<script>
	import 'material-icons/iconfont/material-icons.css';
	export let title;
	export let path;
	export let classes = '';
	export { classes as class };
</script>

<div class={"flex items-center sm:w-max" +
classes}>
	<a
		id="button"
		class="group flex flex-row items-center justify-center rounded-3xl px-2 p-3 shadow-black/30   sm:gap-6 w-[225px] group-hover:text-gold-400"
		href={path}
	>

		<p class=" text-[18px] sm:text-xl text-white title p-2 group-hover:text-gold-400 " id="button-title">
			{title} 	
		</p>
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

		p {
			font-family: "Roboto";
		}

	.material-icons{
		color: white;
		font-size: 42px;
	}

	.title {
		font-weight: 500;
	}

	@media screen and (max-width: 640px) {

  #button {
	display:flex;
	flex-direction: row;
	justify-content: center;
    padding: 10px;
	background-color: #401421
  }

  .material-icons{
		font-size: 32px;
	}
}
</style>
