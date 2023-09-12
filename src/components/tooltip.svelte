<script>
	export let def = 'definition of the word';
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
		modalText.set(def);
	}
</script>

<span
	class={(light
		? 'tooltip text-[#F9F4E8] md:text-[20px] text-[18px]  '
		: ' tooltip text-[#1C0A10] md:text-[20px] text-[18px] ') + classes}
>
	<strong on:click={toggle}>
		<slot />
		<span class={(light
			? 'tooltiplight tooltiptext'
			: ' tooltipdark tooltiptext') + classes}>{def}</span>
	</strong>
</span>
<style>
	
/* .tooltip {
  position: relative;
  display: inline-block;
  text-decoration: underline;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 150px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  text-align: center;
  border-radius: 6px;
  font-size: 16px;
  padding: 5px 0;
  line-height: 24px;
    position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
} */
	
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
		padding: 5px;
		z-index: auto;
		width: 200px;
	    bottom: 30px; 
		left: -50px;
		line-height: 1;
		font-size: 14px;
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
