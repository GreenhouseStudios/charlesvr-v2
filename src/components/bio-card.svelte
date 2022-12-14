<script>
	export let src;
	export let alt = '';
	export let name;
	export let citation;
	export let years;
	export let classes = '';
	export { classes as class };
	import 'material-icons/iconfont/material-icons.css';
</script>

<div
	class={'background bg-opacity-[.85] flex flex-col items-center md:flex-row gap-2 p-8 h-min w-full p-4 rounded-md backdrop-blur-3xl shadow-lg -z-10' +
		classes}
>
	<div class="break-words w-1/3 flex flex-col items-center justify-center">
		<img {src} {alt} class="rounded-md object-scale-down block" />
		<span class="material-icons"><a href="{citation}">menu_book</a></span>
	</div>
	<div
		class="text-center text-gold-400 p-2 md:w-2/3"
	>
		<strong class="text-3xl lg:text-5xl">{name}</strong>
		<br />
		<em class="mb-4 text-2xl md:mb-8 lg:text-4xl">{years}</em>
		<div class="space-y-4 text-lg md:text-[22px] md:leading-9 lg:space-y-8">
			<slot />
		</div>
	</div>
</div>

<style>
	.bg-maroon > * {
		text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
	}

	.background {
		background-color: #54172c;
	}

	.material-icons{
        color: #fec755;
        font-size: 36px;
    }

    .material-icons:hover{
        color: white;
    }

    @media screen and (max-width: 768px){
        .material-icons{
        font-size: 24px;
    }  
    }
</style>
