<script>
	export let show = false;
	export let light = false;
	import { modalText, modalState } from '../store/store';
	import 'material-icons/iconfont/material-icons.css';
	import { XCircleIcon } from 'svelte-feather-icons';
	let modalTextValue;
	let modalStateValue;
	let definition
	let word
	modalText.subscribe((value) => {
		modalTextValue = value;
	   word = modalTextValue.split(':')[0]
	   definition = modalTextValue.split(":")[1]

	});
	modalState.subscribe((value) => {
		modalStateValue = value;
	});
	function closeModal() {
		modalState.set(false);
	}

</script>
<body>
{#if modalStateValue}

			{#if modalTextValue.includes("/")}
			<div class="modal-container-image">
				<div class="modal-image">
					<div class="relative flex flex-row-reverse left-7 m-5">
			<span class="material-symbols-outlined close-btn-image hover:cursor-pointer bg-black" on:click={closeModal}>
				cancel
				</span>
			<img src={modalTextValue} class="zoom-image " alt="">
			</div>
		</div>
			</div>
			{/if}
			<div class="mobile-display">
			{#if modalTextValue.includes(":")}
			
			<div class="modal-container">
				<div class="modal">
			<div class="modal-text p-6">
				<button class="close-btn" on:click={closeModal}><span class="material-symbols-outlined">
					cancel
					</span></button>
				<p id="paragraphText" class="text-[18px] md:text-[20px]"><strong>{word}</strong>: {definition}</p>
			</div>
		</div>
	</div>
	{/if}
</div>
{/if}
</body>
<style>
		@media screen and (min-width: 1024px) {
			.mobile-display {
visibility: hidden;
	}
		}

	.close-btn-image {
		width: 40px;
		height: 40px;
		position: relative;
		top: 15px;
		font-size: 28px;
		right: 50px;
		z-index: 100;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
	}


	.modal-image {
		width: auto;
		max-height: 100vh;
		/* max-height: 70vh; */
		position: relative;
		display: flex;	
		justify-content: center;
		align-items: center;
	}

	.zoom-image {
		position: relative;
		margin: auto;
		max-height: 70vh;

	}

	.modal-container-image {
		position: fixed;
		z-index: 50;
		min-width: 100%;
		min-height: 100dvh;
		background: rgba(0, 0, 0, 0.75);
		left: 0;
		top: 20px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		backdrop-filter: blur(3px);
	}


	.close-btn {
		width: 30px;
		height: 30px;
		position: absolute;
		top: 2px;
		right: 0;
	}
	.modal {
		max-width: 90%;
		height: auto;
		background: white;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
	}
	.modal-container {
		position: fixed;
		z-index: 50;
		width: 100vw;
		height: 100dvh;
		background: rgba(0, 0, 0, 0.75);
		backdrop-filter: blur(3px);
		left: 0;
		top: 0;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
