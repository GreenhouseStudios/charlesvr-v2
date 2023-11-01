<script>
	import Transition from './../components/transition.svelte';
	import Background from './../components/background.svelte';
	import Card from './../components/card.svelte';
	import Tooltip from './../components/tooltip.svelte';
	import Footer from './../components/footer.svelte';
	import Button from './../components/button.svelte';
	let people = [
		{ personName: 'Jonathan Ampiaw', personTitle: 'MFA ‘20 Digital Media & Design' },
		{ personName: 'Clarissa Ceglio', personTitle: 'Greenhouse Studios Associate Director of Research' },
		{ personName: 'Shawn Chen', personTitle: 'BFA ‘20 Digital Media & Design' },
		{ personName: 'Lauren Ciulla', personTitle: 'BA ‘20 Digital Media & Design' },
		{ personName: 'David Duncan', personTitle: 'PhD Candidate, History, UC Santa Cruz' },
		{ personName: 'Ryan Freeland', personTitle: 'MFA ‘18 Digital Media & Design' },
		{ personName: 'Brooke Foti Gemmell', personTitle: 'Greenhouse Studios Design Strategist' },
		{ personName: 'Eri Lauer', personTitle: 'BA ‘20 Digital Media & Design' },
		{ personName: 'Tom Lee', personTitle: 'Greenhouse Studios Technology Strategist' },
		{ personName: 'Jin Liu', personTitle: 'MFA ‘23 Digital Media & Design' },
		{ personName: 'Daisy Martin', personTitle: 'Director, History & Civics Project, UC Santa Cruz' },
		{ personName: 'Tim Miller', personTitle: 'Greenhouse Studios Mellon Fellow' },
		{ personName: 'Alex Mueller', personTitle: 'BA ‘22 Digital Media & Design' },
		{ personName: 'Rebecca Niland', personTitle: 'BA ‘17 Digital Media & Design' },
		{ personName: 'Lily Pashapour', personTitle: 'BA ‘20 Digital Media & Design' },
		{ personName: 'Dan Pejril', personTitle: 'Asst. Prof. in-Residence, Digital Media & Design' },
		{ personName: 'Photographer', personTitle: 'Lorem ipsum' },
		{ personName: 'Brianna Ricciardone', personTitle: 'BA ‘17 Digital Media & Design' },
		{ personName: 'Eric Rice', personTitle: 'Dept. Head & Professor of Music History' },
		{ personName: 'Kenia Rodriguez', personTitle: "PhD '25 English Language & Literature/Letters" },
		{ personName: 'Melina Sandel', personTitle: 'BFA ‘25 Digital Media & Design' },
		{ personName: 'Tom Scheinfeldt', personTitle: 'Director of Greenhouse Studios' },
		{ personName: 'John Spencer', personTitle: 'Lorem ipsum' },
		{ personName: 'Cara Tracey', personTitle: 'BFA ‘22 Digital Media & Design' },
		{ personName: 'Michael Young', personTitle: 'Publishing Services & Humanities Librarian' }
	];
	let images = [1, 2, 3, 4, 5, 6];
	// let definitions = [{ word: 'coronation', definition: 'the act or occasion of crowning' }];
</script>

<Transition>
	<Background src="../../charlesvrvideoblur.mp4" scrim="gold" opacity1="5" opacity2="7" class="">
		<div
			class=" flex h-[80vh] flex-col items-center justify-center gap-10 bg-cover bg-center p-4 md:p-16"
		>
			<video
				class="fixed inset-0 -z-50 aspect-auto h-screen w-screen object-cover"
				id="videobg"
				src="../../charlesvrvideoblur.mp4"
				autoplay
				muted
				loop
				style=""
			/>
			<div class="mt-32 md:max-w-[70%]">
				<img src="../../logos/charlesvr-newduotone.png" alt="Charles VR" class="drop-shadow-sm" />
				<div class="  m-3 mt-5 text-center text-xl font-medium text-[#4D1B2C] md:text-3xl">
					Experience the Imperial Coronation of Holy Roman Emperor Charles V
				</div>
			</div>
			<br />
			<div class="arrow animated bounce" />
		</div>
	</Background>
	<Background
		src="../../charlesvrvideoblur.mp4"
		scrim="light"
		opacity1="9"
		opacity2="9"
		class="flex h-min flex-col items-center justify-center sm:h-[75vh]"
	>
		<div class="flex flex-col-reverse items-center justify-center  sm:my-0 sm:flex-row  sm:px-0 ">
				<Card light class="m-0 md:m-0 lg:m-18 xl:m-28 md:text-[22px] text-[20px] lg:text-[28px]">
					<p class="pb-12 sm:pb-0">
						Travel to 1530 Bologna to attend the <Tooltip
							def="Coronation: The act or occasion of crowning"><p class="md:text-[22px] text-[20px] lg:text-[28px]">coronation</p></Tooltip
						> mass of the Holy Roman Emperor, Charles V, in this virtual reality recreation of San Petronio.
						The details of the coronation reflect the social and political turmoil of the times; the
						experience itself recreates the sights and sounds of this religious and political ceremony
						using <Tooltip
							def="Contemporaneous: Existing, occurring, or originating during the same time
					"><p class="md:text-[22px] text-[20px] lg:text-[28px]">contemporaneous</p></Tooltip
						> accounts, artwork, and music as source material.
					</p>
				</Card>
			<img src="../../content/rudy-placeholder-4.jpg" alt="tbd" class="dog h-[75vh]" />
		</div>
	</Background>
	<Background
		src="../../charlesvrvideoblur.mp4"
		scrim="maroon"
		opacity1="9"
		opacity2="9"
		class="flex h-min flex-col items-center justify-center sm:h-[75vh]"
	>
		<div class="flex flex-col items-center justify-center sm:my-0 sm:flex-row sm:px-0 ">
			<img src="../../content/rudy-placeholder.jpg" alt="tbd" class="dog  h-[75vh]" />
			<Card class=" m-0 md:m-4 lg:m-18 xl:m-28    md:text-[20px] text-[20px] lg:text-[28px] ">
				<p class="pb-12 sm:pb-0">
					Experience the event from multiple perspectives — that of a member of the imperial papal
					court, a 
						<Tooltip
						def="Basilica: A Roman Catholic church given ceremonial privileges"
						light><p class="md:text-[22px] text-[20px] lg:text-[28px]">basilica</p>
						</Tooltip> 
					official, or a Bolognese citizen. Hear music performed during the ceremony as recorded by
					Ensemble Origo. Call up scholarly annotations to explore the layers of meaning embedded in
					the art, architecture, and various ceremonial objects present in the scene.
				</p>
			</Card>
		</div>
	</Background>
	<Background
		src="../../charlesvrvideoblur.mp4"
		scrim="light"
		opacity1="9"
		opacity2="9"
		class="flex h-min flex-col items-center justify-center sm:h-[75vh]"
	>
		<div class="flex flex-col-reverse items-center sm:my-0 sm:flex-row sm:px-0 image-description">
				<Card class="m-0 md:m-4 lg:m-18 xl:m-28  md:text-[20px] text-[20px] lg:text-[28px]" light>
					<div class="pb-12 sm:pb-0">
					<p class="">
						Charles V|R offers a multi-modal window into this event of world-historical importance
						for enthusiasts, students, and scholars of art, architecture, history, music, religion,
						and virtual reality.
					</p>
					<div class="mt-10 flex gap-10">
						<Button title="Read More" path="1" class="" />
						<Button title="Download" path="2" class="" />
					</div>
					</div>
				</Card>
			<img src="../../content/rudy-placeholder-2.jpg" alt="tbd" class="dog h-[75vh]" />
		</div>
	</Background>
	<Background src="../../charlesvrvideoblur.mp4" scrim="maroon" opacity1="9" opacity2="9" class="">
		<div class="flex items-center justify-center gap-10 bg-cover bg-center p-4 md:p-16 ">
			<Card  class="w-[100%] md:w-[80%]">
				<div class="p-4">
					<h1 class="m-4 text-center text-6xl"><strong>Credits</strong></h1>
					<img
						class="mx-auto my-20 hidden  w-[50%] md:block"
						src="../../logos/greenhouselogowhite.png"
						alt="credits placeholder"
					/>
					<img
						class=" mx-auto my-10 w-[25%] md:hidden"
						src="../../logos/greenhouse-square-logo.png"
						alt="credits placeholder"
					/>

					<div class="grid sm:grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
						{#each people as person}
							<div class="text-center">
								<div class="mb-1 leading-10"><strong>{person.personName}</strong></div>
								<div class="mb-5 text-[18px] leading-5">{person.personTitle}</div>
							</div>
						{/each}
					</div>
				</div>
			</Card>
		</div>
	</Background>
	<Background src="../../charlesvrvideoblur.mp4" scrim="light" opacity1="9" opacity2="9" class="">
		<div class=" flex flex-col items-center justify-center gap-10 bg-cover bg-center p-4 md:p-16">
			<Card light class="flex flex-col  ">
				<h1 class="my-10 text-center text-6xl text-[#54182c] md:mb-20 ">
					<strong>Partners</strong>
				</h1>
				<div
					class="flex flex-col items-center justify-center gap-16 my-10 md:grid md:grid-cols-4"
				>
					<img
						class="max-h-[100px] md:max-h-full p-2 "
						src="../../logos/Mellon_Logomark_Lockup_Black.png"
						alt="credits placeholder"
					/>
					<img
						class=" max-h-[100px] md:max-h-full p-2 "
						src="../../logos/ucsantacruzlogo.png"
						alt="credits placeholder"
					/>
					<img class=" max-h-[125px] md:max-h-full p-2" src="../../logos/OrigoLogo.png" alt="credits placeholder" />
					<img class=" max-h-[100px] md:max-h-full p-2" src="../../logos/kress-logo.png" alt="credits placeholder" />
				</div>
			</Card>
		</div>
	</Background>
</Transition>
<Footer />

<style>
	.dog {
		aspect-ratio: 1/1;
		object-fit: cover;
	}
	@media screen and (max-width: 1200px) {
		.dog {
			aspect-ratio: 3/5;
		}
	}

	@media screen and (max-width: 640px) {
		.dog {
			aspect-ratio: auto;
			width: 100%;
			height: auto;
		}
	}

	@-moz-keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			-moz-transform: translateY(0);
			transform: translateY(0);
		}
		40% {
			-moz-transform: translateY(-20px);
			transform: translateY(-20px);
		}
		60% {
			-moz-transform: translateY(-10px);
			transform: translateY(-10px);
		}
	}
	@-webkit-keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
		40% {
			-webkit-transform: translateY(-20px);
			transform: translateY(-20px);
		}
		60% {
			-webkit-transform: translateY(-10px);
			transform: translateY(-10px);
		}
	}
	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			-moz-transform: translateY(0);
			-ms-transform: translateY(0);
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
		40% {
			-moz-transform: translateY(-20px);
			-ms-transform: translateY(-20px);
			-webkit-transform: translateY(-20px);
			transform: translateY(-20px);
		}
		60% {
			-moz-transform: translateY(-10px);
			-ms-transform: translateY(-10px);
			-webkit-transform: translateY(-10px);
			transform: translateY(-10px);
		}
	}

	.arrow {
		bottom: 50px;
		left: 50%;
		margin-left: -20px;
		width: 75px;
		height: 75px;
		background-image: url(../../content/down-arrow.png);
		background-size: contain;
	}

	.bounce {
		-moz-animation: bounce 2s infinite;
		-webkit-animation: bounce 2s infinite;
		animation: bounce 2s infinite;
	}

</style>
