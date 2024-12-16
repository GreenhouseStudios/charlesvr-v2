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
		? 'tooltip text-[#F9F4E8] text-[16px] md:text-[18px] lg:text-[20px]'
		: ' tooltip text-[#1C0A10] text-[16px] md:text-[18px] lg:text-[20px]') + classes}
>
	<strong on:click={toggle}>
		<slot />
		<span class={(light
			? 'tooltiplight tooltiptext'
			: ' tooltipdark tooltiptext') + classes}> <strong>{word}:</strong> <span>{def}</span></span>
	</strong>
</span>
<style>
	
strong {
	font-weight: 700;
}
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
		padding: 12px;
		z-index: auto;
		width: 250px;
	    bottom: 30px; 
		left: -25px;
		line-height: 1.35;
		font-size: 16px;
		font-weight: 300;
	}

	.tooltiplight{
		background-color: rgb(255, 255, 255);
		color: black;	
	}

	.tooltipdark{
		background-color:#54182c;
		color: rgb(255, 255, 255);
	}

	.tooltip:hover .tooltiptext {
		opacity: 1;
		transition: 0.3s;
	}


	@media screen and (max-width: 768px) {
		.tooltip:hover .tooltiptext {
		opacity: 0;
	}
		}
	.tooltiptext:hover {
		display: none;
	}

</style>
