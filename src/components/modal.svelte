<script>
	import { modalText, modalState } from '../store/store';
	import {clickOutside} from '../store/store';
	import 'material-icons/iconfont/material-icons.css';
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
			<span class="material-symbols-outlined close-btn-image hover:cursor-pointer bg-black " on:click={closeModal}>
				cancel
				</span>
				<div use:clickOutside on:click_outside={closeModal}>
			<img src={modalTextValue} class="zoom-image " alt="">
		</div>
		</div>
			</div>
			{/if}
			<div class="mobile-display">
			{#if modalTextValue.includes(":")}
			
			<div class="modal-container">
				<div class="modal" use:clickOutside on:click_outside={closeModal}>
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
		@media screen and (min-width: 768px) {
			.mobile-display {
visibility: hidden;
	}
		}

	.close-btn-image {
		min-width: 40px;
		height: 40px;
		position: absolute;
		font-size: 28px;
		right: 35px;
		top: 35px;
		z-index: 100;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		z-index: 100;
	}


	.modal-image {
		width: auto;
		max-height: 100vh;
		/* max-height: 70vh; */
		position: absolute;
		display: flex;	
		justify-content: center;
		align-items: center;
		padding: 25px
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
		top: 5px;
		right: 5px;
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
		border-radius: 0px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
