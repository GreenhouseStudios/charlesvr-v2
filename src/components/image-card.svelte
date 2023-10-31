<script>
export let src;
export let alt = '';
export let citation;
import 'material-icons/iconfont/material-icons.css';
export let light = false;
export let classes = '';
export { classes as class };
export let width = '';


</script>

<div class={
	'flex flex-col items-center mx-auto p-10' +
	(light
		? ' text-[#1C0A10]'
		: ' text-[#F9F4E8]') +
	classes}
>
    <img {src} {alt} class="rounded-md {width}" />
    <div
    class='flex flex-col items-center justify-center source'
>
<a href="{citation}">
<div class="flex items-center gap-2">
    <span class="material-icons">menu_book</span>
    <span class=" text-[24px]">Source</span>
</div>
    <hr class={(light ? 'horizontal-line-black' : 'horizontal-line-white')}>
</a>
</div>
<slot />
</div>

<style>
    .material-icons{
        font-size: 24px;
    }
    @media screen and (max-width: 768px){
        .material-icons{
        font-size: 24px;
    }  
    }
    .horizontal-line-black {
        border: 1px solid black ;
        width: 100px;
        display:none
    }

    .horizontal-line-white {
        border: 1px solid white ;
        width: 100px;
        display:none;
        bottom: 5px
    }

    .source {
        position: relative;
        cursor: pointer;

    }

    .source:hover hr {
        display: block;
        position: absolute;
        bottom: 1px;
    }
</style>