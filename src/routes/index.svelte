<script>
	import Transition from './../components/transition.svelte';
	import Card from './../components/card.svelte';
	import ChapterButton from './../components/chapter-button.svelte';
	import SectionHero from './../components/section-hero.svelte';
	let images = [1, 2, 3, 4, 5, 6];
</script>

<Transition>
	<div
		class="flex min-h-screen flex-col items-center bg-cover bg-center p-4 pt-0 md:p-16 2xl:p-32 2xl:px-64"
	>
		<video
			src="..//cvr_trailer_compressed.mp4"
			autoplay
			muted
			loop
			style="width: 100vw; position: fixed; right: 0; bottom: 0; z-index: -1;"
		/>
		<img src="..//logos/charlesvr-duotone.png" alt="Charles VR" class="z-10 mt-48 mb-4 w-4/6" />
		<div class="mb-16 text-center text-4xl leading-normal text-[#900006]">
			A Virtual Reality Recreation of the
			<br />
			Imperial Coronation of Holy Roman Emperor Charles V
		</div>
		<Card light class="2xl:max-w-[50%]" flex="">
			<p class="mb-5">
				Travel to 1530 Bologna to attend the coronation mass of the Holy Roman Emperor, Charles V,
				in this virtual reality recreation of San Petronio. The details of the coronation reflect
				the social and political turmoil of the times; the experience itself recreates the sights
				and sounds of this religious and political ceremony using contemporaneous accounts, artwork,
				and music as source material.
			</p>
			<p class="mb-5">
				Experience the event from multiple perspectives — that of a member of the imperial/papal
				court, a basilica official, or a Bolognese citizen. Hear music performed during the ceremony
				as recorded by Ensemble Origo. Call up scholarly annotations to explore the layers of
				meaning embedded in the art, architecture, and various ceremonial objects present in the
				scene.
			</p>
			<p class="mb-5">
				Charles V|R offers a multi-modal window into this event of world-historical importance for
				enthusiasts, students, and scholars of art, architecture, history, music, religion, and
				virtual reality.
			</p>
		</Card>

		<ChapterButton numeral="II" chapter="The Coronation in Context" path="2" light class="p-4" />

		<Card light class="m-10 grid grid-cols-2">
			<ul>
				Jonathan Ampiaw, MFA ‘20 Digital Media & Design
				<br />
				Shawn Chen, BFA ‘20 Digital Media & Design
				<br />
				Lauren Ciulla
				<br />
				Dan Pejril, Asst. Professor-in-Residence, of Digital Media & Design
				<br />
				David Duncan
				<br />
				Ryan Freeland
				<br />
				Brooke Foti Gemmell
				<br />
				Eri Lauer
				<br />
				Tom Lee, Design Technologist
				<br />
				Jin Liu, MFA ‘23 Digital Media & Design
				<br />
				Daisy Martin
			</ul>
			<ul>
				Tim Miller,
				<br />
				Alex Mueller, BA ‘22 Digital Media & Design
				<br />
				Rebecca Niland
				<br />
				Lily Pashapour
				<br />
				Brianna Ricciardone
				<br />
				Eric Rice,
				<br />
				Kenia Rodriguez
				<br />
				Tom Scheinfeldt, Director of Greenhouse
				<br />
				John Spencer
				<br />
				Cara Tracey, BFA ‘22 Digital Media & Design
				<br />
				Michael Young,
			</ul>
		</Card>

		<Card light class="flex flex-col max-w-4xl">
		<h1 class="text-center text-3xl">Funders</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium possimus non officiis natus quasi totam assumenda laboriosam dolores, debitis iusto esse recusandae dignissimos eos architecto alias a tempore enim.</p>
		<div class="grid grid-cols-2">
			{#each images as image}
				<img
					class="m-5 mx-auto"
					src="https://via.placeholder.com/300

C/O https://placeholder.com/"
					alt="credits placeholder"
				/>
			{/each}</div>
		</Card>
	</div>
</Transition>

<style>
</style>
