<script>
	export let src;
	export let alt = '';
	export let light = false;
	export let classes = '';
	export { classes as class };
	import 'material-icons/iconfont/material-icons.css';
	export let citation;
</script>

<div
	class={'flex flex-col items-center md:flex-row p-5' +
		(light ? ' text-[#1C0A10]  bg-[rgb(255,226,165)]  ' : ' text-[rgb(249,244,232)]  bg-[#54182c]  ') +
		classes}
>
	<div class=" bioimg flex w-1/2 flex-col items-center justify-center break-words">
		<img {src} {alt} class="rounded-md" />
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
	</div>
</div>

<style>
	.material-icons {
		font-size: 24px;
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
