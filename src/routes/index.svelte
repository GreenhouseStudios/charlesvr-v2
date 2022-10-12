<script>
	import Transition from './../components/transition.svelte';
	import Background from './../components/background.svelte';
	import Card from './../components/card.svelte';
	import ChapterButton from './../components/chapter-button.svelte';
	import SectionHero from './../components/section-hero.svelte';
	import NextChapter from './../components/next-chapter.svelte';
	let images = [1, 2, 3, 4, 5, 6];
</script>

<Transition>
	<Background
		src="..//cvr_trailer_compressed.mp4"
		scrim="light"
		opacity="6"
		class=""
	>
	<div
		class="flex flex-col items-center bg-cover bg-center p-4 pt-0 md:p-16 2xl:p-32 2xl:px-64"
	>
	<video class='' id="videobg"
			src="..//cvr_trailer_compressed.mp4"
			autoplay
			muted
			loop
			style="position: fixed; right: 0; bottom: 0; z-index: -1;"
		/>
		<img src="..//logos/charlesvr-duotone.png" alt="Charles VR" class="z-10 mt-48 mb-4 w-4/6" />
		<div class="mb-16 text-center text-4xl leading-normal text-[#401221]">
			A Virtual Reality Recreation of the
			<br />
			Imperial Coronation of Holy Roman Emperor Charles V
		</div>
		<Card light class="max-w-[80%] m-10" flex="">
			<p class="mb-10">
				Travel to 1530 Bologna to attend the coronation mass of the Holy Roman Emperor, Charles V,
				in this virtual reality recreation of San Petronio. The details of the coronation reflect
				the social and political turmoil of the times; the experience itself recreates the sights
				and sounds of this religious and political ceremony using contemporaneous accounts, artwork,
				and music as source material.
			</p>
			<p class="mb-10">
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
		<ChapterButton numeral="II" chapter="The Coronation in Context" path="2" light class="" />

		<Card light class= "max-w-[80%] m-10 grid grid-cols-2 gap-x-10">
			<ul>
				<strong>Jonathan Ampiaw,</strong> MFA ‘20 Digital Media & Design
				<br />
				<strong>Shawn Chen,</strong> BFA ‘20 Digital Media & Design
				<br />
				<strong>Lauren Ciulla,</strong> BA ‘20 Digital Media & Design
				<br />
				<strong>Dan Pejril,</strong> Asst. Professor-in-Residence, of Digital Media & Design
				<br />
				<strong>David Duncan</strong>
				<br />
				<strong>Ryan Freeland,</strong> MFA ‘18 Digital Media & Design
				<br />
				<strong>Brooke Foti Gemmell,</strong> Design Technologist
				<br />
				<strong>Eri Lauer,</strong> BA ‘20 Digital Media & Design
				<br />
				<strong>Tom Lee,</strong> Design Technologist
				<br />
				<strong>Jin Liu,</strong> MFA ‘23 Digital Media & Design
				<br />
				<strong>Daisy Martin</strong>
			</ul>
			<ul>
				<strong>Tim Miller,</strong>
				<br />
				<strong>Alex Mueller,</strong> BA ‘22 Digital Media & Design
				<br />
				<strong>Rebecca Niland,</strong> BA ‘17 Digital Media & Design
				<br />
				<strong>Lily Pashapour,</strong> BA ‘20 Digital Media & Design
				<br />
				<strong>Brianna Ricciardone,</strong> BA ‘17 Digital Media & Design
				<br />
				<strong>Eric Rice,</strong>
				<br />
				<strong>Kenia Rodriguez</strong>
				<br />
				<strong>Tom Scheinfeldt,</strong> Director of Greenhouse Studios
				<br />
				<strong>John Spencer</strong>
				<br />
				<strong>Cara Tracey,</strong> BFA ‘22 Digital Media & Design
				<br />
				<strong>Michael Young,</strong>
				<br />
				<strong>Melina Sandel</strong> BFA ‘25 Digital Media & Design
			</ul>
		</Card>

		<Card light class="flex flex-col max-w-[80%] m-10">
		<h1 class="text-center text-3xl">Funders</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium possimus non officiis natus quasi totam assumenda laboriosam dolores, debitis iusto esse recusandae dignissimos eos architecto alias a tempore enim.</p>
		<div class="grid gap-x-1 grid-cols-2 ">
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
	</Background>
</Transition>
<style>
@media (min-aspect-ratio: 16/9) {
#videobg {
	width: 100%;
	height: auto;
}
}
@media (max-aspect-ratio: 16/9) {
	#videobg {
		width: auto;
		height: 100%;
	}
}

video {
max-width: auto;
}
</style>
