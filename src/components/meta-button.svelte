<script>
	import 'material-icons/iconfont/material-icons.css';

	export let classes = '';
	export let text = '';
	export { classes as class };
    let imgSrc = "../../static/logos/meta.png";
	let link =
		'https://www.meta.com/en-gb/experiences/charles-vr/5970368989647308/?require_login=true&utm_source=developer.oculus.com&utm_medium=oculusredirect';
</script>

<div class={'flex items-center sm:w-max drop-shadow-[0_0_15px_rgba(0,0,0,0.15)] m-5 ' + classes}>
	<a
		id="button"
		class="group flex flex-row items-center justify-center rounded-xl p-2   sm:gap-6"
		href={link}
	>
		<span class="text-xl text-white title">{text}</span>
        <img src={imgSrc} alt="" class="w-12 h-12" />
		<span class="material-icons">chevron_right</span>
	</a>
</div>

<style>
	#button {
		/* background: linear-gradient(to left, #401221 50%, rgb(84, 24, 44) 50%); */
		background-size: 200% 100%;
		background-position: right bottom;
		border: #f6c869 3px solid;
		background-color: #401421;
	}

	#button:hover {
		background-position: left bottom;
		background: #54182c;
	}

	.material-icons {
		color: #f6c869;
		font-size: 48px;
	}

	@media screen and (max-width: 768px) {
		.chapter {
			display: none;
		}
		#button {
			display: flex;
			flex-direction: row;
			justify-content: center;
			padding: 10px;
		}

		.numeral {
			font-size: 36px;
		}

		.material-icons {
			color: #f6c869;
			font-size: 36px;
		}
	}
</style>
