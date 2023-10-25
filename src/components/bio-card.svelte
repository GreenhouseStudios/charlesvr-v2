<script>
	export let src;
	export let alt = '';
	export let name;
	export let color = "black";
	export let citation;
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
	'flex flex-col items-center md:flex-row p-5' +
	(light
		? ' text-[#1C0A10]  bg-[#FFE2A5] '
		: ' text-[#F9F4E8]  bg-[#54182c] ') +
	classes}

>
	<div class=" bioimg flex w-1/3 flex-col items-center justify-center break-words">
		<div class="card-container" on:click={() => flipped = !flipped}>
			<div class="card">
				{#if flipped}
				<div class="side flex flex-col" transition:flip>
					<div class="p-2 text-center">
						<strong class="text-2xl lg:text-5xl">{name}</strong>
						<br />
						<em class="mb-4 text-xl md:mb-8 lg:text-4xl">{years}</em>
						<div class="space-y-4 text-lg text-[18px] md:leading-12 lg:space-y-8">
							<slot />
						</div>
						<!-- <img src="../static/content/flip-icon-{color}.png" alt="flip button" class="flip mx-auto"> -->
					</div>
				</div>
				{:else}
				<div class="side" transition:flip>
					<img {src} {alt} class="rounded-md bioimg h-full" />
					<!-- <img src="../static/content/flip-icon-{color}.png" alt="flip button" class="flip"> -->
				</div>
				{/if}
			</div>
		</div>
		<img src="../static/content/flip-icon-{color}.png" alt="flip button" class="flip m-1 h-[25px] w-[25px] md:h-[35px] md:w-[35px]" on:click={() => flipped = !flipped}>

	</div>
</div>

<style>

	.flip {
		transition: all 0.3s ease-in-out;
		cursor: pointer;
	}

	.flip:hover {
		transform: scale(1.3)
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

	@media screen and (max-width: 768px) {
		.material-icons {
			font-size: 24px;
		}
		.bioimg{
			object-fit: cover;
			padding: 10px;
			width: 400px; 
            height: 300px;
			object-position: 80% 20%;;
		}
		.flip{
			position: relative;
			top: 20px;
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
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		}

</style>
