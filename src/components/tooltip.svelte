<script>
    export let word;
    export let light = false;
	export let classes = '';
	export { classes as class };
</script>

<span class={(light
? 'tooltip text-[#F9F4E8] md:text-[20px] text-[18px]  '
: ' tooltip text-[#1C0A10] md:text-[20px] text-[18px] ') +
classes}>
	<strong>
		{word}
        <span class="tooltiptext"><slot>Definition here</slot></span>
	</strong>
</span>

<style>

.tooltip {
  cursor: pointer;  
  color: black;
  position: relative;
  text-decoration: underline;
}

.tooltiptext {
  opacity: 0;
  background-color: rgb(255, 255, 255);
  color: black;
  border-radius: 6px;
  position: absolute;
  padding: 5px;
  z-index: auto;
  width: max-content;
  /* bottom: 30px; */

  line-height: 1;
}

@media screen and (min-width: 650px){
	.tooltiptext{
		top: -30px;
  		left: -100px;
	}
}

.tooltip:hover .tooltiptext {
	opacity: 1;
    transition: 0.3s;
}

.tooltiptext:hover {
	display: none;
}
</style>
