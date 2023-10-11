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
	'flex flex-col items-center md:flex-row h-full w-full' +
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
						<strong class="text-3xl lg:text-5xl">{name}</strong>
						<br />
						<em class="mb-4 text-2xl md:mb-8 lg:text-4xl">{years}</em>
						<div class="space-y-4 text-lg md:text-[20px] md:leading-12 lg:space-y-8">
							<slot />
						</div>
						<img src="../static/content/flip-icon-{color}.png" alt="flip button" class="flip mx-auto">
					</div>
				</div>
				{:else}
				<div class="side back" transition:flip>
					<img {src} {alt} class="rounded-md bioimg" />
					<img src="../static/content/flip-icon-{color}.png" alt="flip button" class="flip">
				</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>

	.flip {
		width: 35px;
		height: 35px;
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
            height: 250px;
			object-position: 80% 20%;;
		}
	}
	.card-container {
		position: relative;
		height: 100%;
		width: 100%;
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
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	
</style>
