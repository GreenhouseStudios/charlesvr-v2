<script>
	export let show = false;
	export let light = false;
	import { modalText, modalState } from '../store/store';
	import 'material-icons/iconfont/material-icons.css';
	import { XCircleIcon } from 'svelte-feather-icons';
	let modalTextValue;
	let modalStateValue;
	modalText.subscribe((value) => {
		modalTextValue = value;
	});
	modalState.subscribe((value) => {
		modalStateValue = value;
	});
	function closeModal() {
		modalState.set(false);
	}
	
</script>

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
			{#if modalTextValue.includes(":")}
			<div class="modal-container">
				<div class="modal">
			<div class="modal-text">
				<button class="close-btn" on:click={closeModal}><span class="material-symbols-outlined">
					cancel
					</span></button>
				<p id="paragraphText" class="p-12">{modalTextValue}</p>
			</div>
		</div>
	</div>
	{/if}
{/if}

<style>

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
		max-height: 70vh;
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
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.9);
		left: 0;
		top: 20px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}


	.close-btn {
		width: 30px;
		height: 30px;
		position: absolute;
		top: 0;
		right: 0;
	}
	.modal {
		width: 100%;
		height: 80vh;
		background: white;
		margin: 15vh auto;
		position: relative;
		display: flex;
	}
	.modal-container {
		position: fixed;
		z-index: 50;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.9);
		left: 0;
		top: 0;
		border-radius: 10px;
	}
</style>
