<script>
	export let src;
	export let alt = '';
	export let caption = '';
	export let citation;
	import 'material-icons/iconfont/material-icons.css';
	export let light = false;
	export let classes = '';
	export { classes as class };
	export let width = '';
	export let height = '';
	import { createEventDispatcher } from 'svelte';
	import { modalText, modalState } from '../store/store';
	let modalStateValueImage;
	modalState.subscribe((value) => {
		modalStateValueImage = value;
	});
	const dispatch = createEventDispatcher();

	function toggle() {
		if (!modalStateValueImage) modalState.set(true);
		modalText.set(src);
	}
</script>

<div
	class={'flex flex-col items-center mx-auto p-10' +
		(light ? ' text-[#1C0A10]' : ' text-[#F9F4E8]') +
		classes}
>
	<div class="rounded-md {width} flex flex-col items-center">
		<div class="relative">
			<img {src} {alt} class="rounded-md {height}" />
			<span
				on:click={toggle}
				class={'text-[32px] rounded-md  material-symbols-outlined absolute top-2 right-2 ' +
					(light ? 'bg-[#FFE2A5] hover:bg-[#ffffff] p-1 hover:cursor-pointer' : 'bg-[#4D1B2C] hover:bg-[#000000] p-1 hover:cursor-pointer')}
			>
				zoom_in
			</span>
		</div>

		<div
			class={'text-[18px]  p-5  w-full text-center ' + (light ? 'bg-[#FFE2A5]' : 'bg-[#4D1B2C]')}
		>
			{caption}
			<div class="source flex flex-col items-center justify-center">
				<a href={citation}>
					{#if caption}
						<div class="mt-2 flex items-center gap-2">
							<span class="material-icons text-[20px]">menu_book</span>
							<span class=" text-[18px] ">Source</span>
						</div>
						<hr class={light ? 'horizontal-line-black' : 'horizontal-line-white'} />
					{/if}
					{#if !caption}
						<div class="flex items-center gap-2">
							<span class="material-icons text-[20px]">menu_book</span>
							<span class=" text-[18px] ">Source</span>
						</div>
						<hr class={light ? 'horizontal-line-black' : 'horizontal-line-white'} />
					{/if}
				</a>
			</div>
		</div>
	</div>
	<slot />
</div>

<style>
	.horizontal-line-black {
		border: 1px solid black;
		width: 75px;
		display: none;
	}

	.horizontal-line-white {
		border: 1px solid white;
		width: 75px;
		display: none;
		bottom: 5px;
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

	a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
