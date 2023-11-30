<script>
	export let def = 'definition of the word';
	export let word = 'word';
	export let light = false;
	export let classes = '';
	export { classes as class };
	import { createEventDispatcher } from 'svelte';
	import { modalText, modalState } from '../store/store';
	let modalStateValue;
	modalState.subscribe((value) => {
		modalStateValue = value;
	});
	const dispatch = createEventDispatcher();

	function toggle() {
		if (!modalStateValue) modalState.set(true);
		modalText.set(`${word}:${def}`);
	}
</script>

<span
	class={(light
		? 'tooltip text-[#F9F4E8] text-[18px] md:text-[20px] lg:text-[22px]'
		: ' tooltip text-[#1C0A10] text-[18px] md:text-[20px] lg:text-[22px]') + classes}
>
	<strong on:click={toggle}>
		<slot />
		<span class={(light
			? 'tooltiplight tooltiptext'
			: ' tooltipdark tooltiptext') + classes}> <strong>{word}:</strong> <span class="font-thin">{def}</span></span>
	</strong>
</span>
<style>
	
.tooltip {
		cursor: pointer;
		position: relative;
		text-decoration: underline;
		display: inline-block;
	}

	.tooltiptext {
		opacity: 0;
		background-color: rgb(255, 255, 255);
		color: black;
		border-radius: 6px;
		position: absolute;
		padding: 10px;
		z-index: auto;
		width: 200px;
	    bottom: 30px; 
		left: -25px;
		line-height: 1.1;
		font-size: 18px;
	}

	.tooltiplight{
		background-color: rgb(255, 255, 255);
		color: black;	
	}

	.tooltipdark{
		background-color: rgb(0, 0, 0);
		color: rgb(255, 255, 255);
	}

	.tooltip:hover .tooltiptext {
		opacity: 1;
		transition: 0.3s;
	}

	.tooltiptext:hover {
		display: none;
	}

</style>
