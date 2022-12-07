<script>
	import Transition from './../components/transition.svelte';
	import Background from './../components/background.svelte';
	import Card from './../components/card.svelte';
	import ChapterButton from './../components/chapter-button.svelte';
	import SectionHero from './../components/section-hero.svelte';
	import NextChapter from './../components/next-chapter.svelte';
	import { onMount } from 'svelte';
	import Tooltip from './../components/tooltip.svelte';
	let images = [1, 2, 3, 4, 5, 6];
</script>
<Transition>
	<Background
		src="..//charlesvrvideoblur.mp4"
		scrim="gold"
		opacity="4"
		class=""
	>
	<div
		class="flex flex-col items-center gap-10 justify-center bg-cover bg-center p-4 md:p-16 "
	>
	<video class='fixed inset-0 -z-50 aspect-auto h-screen w-screen object-cover' id="videobg"
			src="..//charlesvrvideoblur.mp4"
			autoplay
			muted
			loop
			style=""
		/>
		<img src="..//logos/charlesvr-newduotone.png" alt="Charles VR" class="z-10 mt-32 w-5/6 " />
		<div class="text-center text-3xl md:text-5xl w-5/6 font-medium text-[#4D1B2C]">
			Experience the Imperial Coronation of Holy Roman Emperor Charles V
		</div>
		<Card light class="md:max-w-[80%]" flex="">
			<p class="mt-10 mb-10">
				Travel to 1530 Bologna to attend the <Tooltip word="coronation">the act or occasion of crowning</Tooltip> mass of the Holy Roman Emperor, Charles V,
				in this virtual reality recreation of San Petronio. The details of the coronation reflect
				the social and political turmoil of the times; the experience itself recreates the sights
				and sounds of this religious and political ceremony using contemporaneous accounts, artwork,
				and music as source material.
			</p>
			<p class="mb-10">
				Experience the event from multiple perspectives — that of a member of the imperial papal
				court, a basilica official, or a Bolognese citizen. Hear music performed during the ceremony
				as recorded by Ensemble Origo. Call up scholarly annotations to explore the layers of
				meaning embedded in the art, architecture, and various ceremonial objects present in the
				scene.
			</p>
			<p class="mb-10">
				Charles V|R offers a multi-modal window into this event of world-historical importance for
				enthusiasts, students, and scholars of art, architecture, history, music, religion, and
				virtual reality.
			</p>
		</Card>
	<!-- </div> -->
		<ChapterButton numeral="II" chapter="The Coronation in Context" path="2" light class="" />
		<Card light class="flex flex-col md:max-w-[80%]">
			<h1 class="text-center text-3xl "><strong>Contributors</strong></h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium possimus non officiis natus quasi totam assumenda laboriosam dolores, debitis iusto esse recusandae dignissimos eos architecto alias a tempore enim.</p>
			<div class="grid sm:grid-cols-2 md:gap-5 md:grid-cols-4">
			<ul class="text-center">
				<div class="leading-5 mb-2"><strong>Jonathan Ampiaw</strong> </div>
				<div class="text-base mb-5 leading-4">MFA ‘20 Digital Media & Design</div>
				<div class="leading-5 mb-2"><strong>Shawn Chen</strong></div>
				<div class="text-base mb-5 leading-4">BFA ‘20 Digital Media & Design</div>
				<div class="leading-5 mb-2"><strong>Lauren Ciulla</strong> </div>
				<div class="text-base mb-5 leading-4">BA ‘20 Digital Media & Design</div>
				<div class="leading-5 mb-2"><strong>Dan Pejril</strong></div>
				<div class="text-base mb-5 leading-4">Asst. Professor-in-Residence, of Digital Media & Design</div>
				<div class="leading-5 mb-2"><strong>David Duncan</strong></div>
				<div class="text-base mb-5 leading-4">Lorem ipsum</div>
				<div class="leading-5 mb-2"><strong>Ryan Freeland</strong></div>
				<div class="text-base mb-5 leading-4">MFA ‘18 Digital Media & Design</div>
			</ul>
			<ul class="text-center">
				<div class="leading-5 mb-2"><strong>Brooke Foti Gemmell</strong></div>
				<div class="text-base mb-5 leading-4">Design Technologist</div>
				<div class="leading-5 mb-2"><strong>Eri Lauer</strong></div>
				<div class="text-base mb-5 leading-4">BA ‘20 Digital Media & Design</div>
				<div class="leading-5 mb-2"><strong>Tom Lee</strong></div>
				<div class="text-base mb-5 leading-4">Design Technologist</div>
				<div class="leading-5 mb-2"><strong>Jin Liu</strong></div>
				<div class="text-base mb-5 leading-4">MFA ‘23 Digital Media & Design</div>
				<div class="leading-5 mb-2"><strong>Daisy Martin</strong></div>
				<div class="text-base mb-5 leading-4">Lorem ipsum</div>
				<div class="leading-5 mb-2"><strong>Photographer</strong></div>
				<div class="text-base mb-5 leading-4">Lorem ipsum</div>
			</ul>
			<ul class="text-center">
				<div class="leading-5 mb-2"><strong>Tim Miller</strong></div>
				<div class="text-base mb-5 leading-4">Lorem ipsum</div>
				<div class="leading-5 mb-2"><strong>Alex Mueller</strong> </div>
				<div class="text-base mb-5 leading-4">BA ‘22 Digital Media & Design </div>
				<div class="leading-5 mb-2"><strong>Rebecca Niland</strong></div>
				<div class="text-base mb-5 leading-4">BA ‘17 Digital Media & Design </div>
				<div class="leading-5 mb-2"><strong>Lily Pashapour</strong> </div>
				<div class="text-base mb-5 leading-4">BA ‘20 Digital Media & Design </div>
				<div class="leading-5 mb-2"><strong>Brianna Ricciardone</strong></div>
				<div class="text-base mb-5 leading-4">BA ‘17 Digital Media & Design </div>
				<div class="leading-5 mb-2"><strong>Eric Rice</strong></div>
				<div class="text-base mb-5 leading-4">Lorem ipsum </div>
			</ul>
			<ul class="text-center">
				<div class="leading-5 mb-2"><strong>Kenia Rodriguez</strong></div>
				<div class="text-base mb-5 leading-4">Lorem ipsum</div>
				<div class="leading-5 mb-2"><strong>Tom Scheinfeldt</strong> </div>
				<div class="text-base mb-5 leading-4">Director of Greenhouse Studios </div>
				<div class="leading-5 mb-2"><strong>John Spencer</strong></div>
				<div class="text-base mb-5 leading-4">Lorem ipsum</div>
				<div class="leading-5 mb-2"><strong>Cara Tracey</strong></div>
				<div class="text-base mb-5 leading-4">BFA ‘22 Digital Media & Design </div>
				<div class="leading-5 mb-2"><strong>Michael Young</strong></div>
				<div class="text-base mb-5 leading-4">Lorem ipsum</div>
				<div class="leading-5 mb-2"><strong>Melina Sandel</strong></div>
				<div class="text-base mb-5 leading-4">BFA ‘25 Digital Media & Design </div>
			</ul>
		</div>
		</Card>
		<Card light class="flex flex-col md:max-w-[80%]">
		<h1 class="text-center text-3xl"><strong>Funders</strong></h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium possimus non officiis natus quasi totam assumenda laboriosam dolores, debitis iusto esse recusandae dignissimos eos architecto alias a tempore enim.</p>
		<div class="grid grid-cols-2 gap-2 ">
				<img
					class="m-5 mx-auto col-span-2"
					src="https://via.placeholder.com/600x200

C/O https://placeholder.com/"
					alt="credits placeholder"
				/>
				<img
					class="m-5 mx-auto"
					src="https://via.placeholder.com/300

C/O https://placeholder.com/"
					alt="credits placeholder"
				/>
				<img
					class="m-5 mx-auto"
					src="https://via.placeholder.com/300

C/O https://placeholder.com/"
					alt="credits placeholder"
				/>
				<img
					class="m-5 mx-auto"
					src="https://via.placeholder.com/300

C/O https://placeholder.com/"
					alt="credits placeholder"
				/>
				<img
					class="m-5 mx-auto"
					src="https://via.placeholder.com/300

C/O https://placeholder.com/"
					alt="credits placeholder"
				/>
		</Card>	
	</div>
	</Background>
</Transition>
<style>



</style>
