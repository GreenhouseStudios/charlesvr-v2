<script>
	export let show = false;
	import { modalText, modalState } from '../store/store';
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
	<div class="modal-container">
		<div class="modal p-24">
			<button class="close-btn" on:click={closeModal}
				><XCircleIcon></XCircleIcon></button
			>
			<div class="modal-text">
				{modalTextValue}
			</div>
		</div>
	</div>
{/if}

<style>
	.close-btn {
		width: 30px;
		height: 30px;
		position: absolute;
		top: 0;
		right: 0;
	}
	.modal {
		width: 90%;
		height: 50vh;
		background: white;
		margin: 25vh auto;
		position: relative;
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
