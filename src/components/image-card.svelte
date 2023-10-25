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
    <div class="flex items-center gap-2 justify-center hover-u">
    <span class="material-icons"><a href="{citation}">menu_book</a></span>
    <span class=" text-[24px]">Source</span>
</div>
<slot />
</div>

<style>
    .material-icons{
        font-size: 24px;
    }

    .material-icons:hover{
        color: white;
    }

    .hover-u:hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 768px){
        .material-icons{
        font-size: 24px;
    }  
    }
</style>