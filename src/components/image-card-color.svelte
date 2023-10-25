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
class={
	'flex flex-col items-center md:flex-row p-5' +
	(light
		? ' text-[#1C0A10]  bg-[#FFE2A5] '
		: ' text-[#F9F4E8]  bg-[#54182c] ') +
	classes}

>
	<div class=" bioimg flex w-1/2 flex-col items-center justify-center break-words">
					<img {src} {alt} class="rounded-md bioimg" />
					<span class="material-icons"><a href="{citation}">menu_book</a>Source</span>
	</div>
</div>

<style>
	.material-icons {
		font-size: 36px;
	}


	.material-icons:hover {
		text-decoration: underline;
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

</style>
