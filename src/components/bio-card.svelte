<script>
	export let src;
	export let alt = '';
	export let name;
	export let color = "black";
	export let light = false;
	export let years;
	export let classes = '';
	export { classes as class };
	import 'material-icons/iconfont/material-icons.css';
	let flipped = false
	
	function flip(node, {
		delay = 0,
		duration = 500
	}) {
		return {
			delay,
			duration,
			css: (t, u) => `
				transform: rotateY(${1 - (u * 180)}deg);
				opacity: ${1 - u};
			`
		};
	}
</script>

<div
class={
	'flex flex-col items-center md:flex-row p-10' +
	(light
		? ' text-[#1C0A10]  bg-[#FFE2A5] '
		: ' text-[#F9F4E8]  bg-[#54182c] ') +
	classes}

>
	<div class=" bioimg flex w-1/3 flex-col items-center justify-center break-words">
		<div class=
			'card-container' on:click={() => flipped = !flipped}>
			<div class=
				'card' 
				>
				{#if flipped}
				<div class="side flex flex-col ds" transition:flip>
					<div class={"side flex flex-col p-4 sm:p-6 text-center rounded-2xl drop-shadow-md" + (light
					? '  bg-[#f3cd7a]'
					: '  bg-[#2c0c17] ')}>
						<strong class="text-[16px] sm:text-4xl">{name}</strong>
						<div class="m-0 text-[14x] sm:text-[18px] italic mb-1 sm:mb-4 sm:m-2">{years}</div>
						<div class="space-y-2  text-[12px] sm:text-[16px] sm:leading-12 sm:space-y-8">
							<slot />
						</div>
					</div>
				</div>
				{:else}
				<div class="side drop-shadow-md" transition:flip>
					<img {src} {alt} class="rounded-2xl w-full h-full overflow-hidden"/>
				</div>
				{/if}
			</div>
		</div>
		<div on:click={() => flipped = !flipped} class="flex flex-col items-center flip ">
		<p class="text-[20px] hidden md:block">Click to Flip</p>
		<img src="../../content/flip-icon-{color}.png" alt="flip button" class=" h-[25px] w-[25px] md:h-[35px] md:w-[35px] md:block hidden">
	</div>
	<div on:click={() => flipped = !flipped} class="flex flex-col items-center flip-mobile ">
		<p class="text-[16px] md:hidden">Tap to Flip</p>
		<img src="../../content/flip-icon-{color}.png" class="arrow bounce h-[20px] w-[20px]  block md:hidden" alt="bouncing arrow pointing to scroll down the page">
		</div>
	</div>
</div>

<style>

	.flip {
		transition: all 0.3s ease-in-out;
		cursor: pointer;
	}

	.flip:hover {
		transform: scale(1.15)
	}
	.flip-mobile:active {
		transition: bounce 0.25s ease-in-out;
		transform: scale(1.25);
		cursor: pointer;
	}

	.black-hidden {
	display: none;	
	}

	.white-hidden {
	display: none;	
	}

	.black {
		display: block;	
	}

	.white {
		display: block;	
	}
	.bg-maroon > * {
		text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
	}


	.material-icons {
		font-size: 36px;
	}


	.material-icons:hover {
		color: white;
	}

	.ds {
		filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.25));
	}

	@media screen and (max-width: 768px) {
		.material-icons {
			font-size: 24px;
		}
		.bioimg{
			object-fit: cover;
			padding: 10px;
			width: 100%; 
            height: 100%;
			object-position: 80% 20%;;
		}
		.flip{
			position: relative;
			top: 50px;
		}
		.flip-mobile{
			position: relative;
		}
	}
	.card-container {
		position: relative;
		height: 450px;
		width: 300px;
		margin: 10px;
	}
	
	.card {
		width: 100%;
		height: 100%;
		position: absolute;
	}
	
	.side {
		position: absolute;
		height: 450px;
		width: 300px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		}

.bioimg:hover {
	cursor: pointer;
}

.arrow {
		bottom: 50px;
		left: 50%;
		/* width: 100px;
		height: 100px; */
	}

	@media screen and (max-width: 480px) {
		.card-container {
		height: 300px;
		width: 200px;
		}

		.side {
		height: 300px;
		width: 200px;	
		}
	}

	@-moz-keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			-moz-transform: translateY(0);
			transform: translateY(0);
		}
		40% {
			-moz-transform: translateY(-10px);
			transform: translateY(-10px);
		}
		60% {
			-moz-transform: translateY(-5px);
			transform: translateY(-5px);
		}
	}
	@-webkit-keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
		40% {
			-webkit-transform: translateY(-10px);
			transform: translateY(-10px);
		}
		60% {
			-webkit-transform: translateY(-5px);
			transform: translateY(-5px);
		}
	}
	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			-moz-transform: translateY(0);
			-ms-transform: translateY(0);
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
		40% {
			-moz-transform: translateY(-10px);
			-ms-transform: translateY(-10px);
			-webkit-transform: translateY(-10px);
			transform: translateY(-10px);
		}
		60% {
			-moz-transform: translateY(-5px);
			-ms-transform: translateY(-5px);
			-webkit-transform: translateY(-5px);
			transform: translateY(-5px);
		}
	}


	.bounce {
		-moz-animation: bounce 2s 1;
		-webkit-animation: bounce 2s 1;
		animation: bounce 2s 1;
	}

</style>
