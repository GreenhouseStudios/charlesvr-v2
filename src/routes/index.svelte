<script>
	import Transition from './../components/transition.svelte';
	import Card from './../components/card.svelte';
	import ChapterButton from './../components/chapter-button.svelte';
	import SectionHero from './../components/section-hero.svelte';
</script>

<Transition>
	<div
		class="flex min-h-screen flex-col items-center bg-cover bg-center p-4 pt-0 md:p-16 2xl:p-32 2xl:px-64"
		style="background-image: linear-gradient(rgba(255, 255, 255, 0.7) 60%, rgba(255, 255, 255, 0.6)), url('..//backgrounds/index.png')"
	>
		<img src="..//logos/charlesvr-duotone.png" alt="Charles VR" class="mt-48 mb-4 w-4/6" />
		<div class="mb-16 text-center text-4xl leading-normal text-[#900006]">
			A Virtual Reality Recreation of the
			<br />
			Imperial Coronation of Holy Roman Emperor Charles V
		</div>
		<Card light class="2xl:max-w-[50%]">
			Travel to 1530 Bologna to attend the coronation mass of the Holy Roman Emperor, Charles V, in
			this virtual reality recreation of San Petronio. The details of the coronation reflect the
			social and political turmoil of the times; the experience itself recreates the sights and
			sounds of this religious and political ceremony using contemporaneous accounts, artwork, and
			music as source material.
			<br />
			Experience the event from multiple perspectives — that of a member of the imperial/papal court,
			a basilica official, or a Bolognese citizen. Hear music performed during the ceremony as recorded
			by Ensemble Origo. Call up scholarly annotations to explore the layers of meaning embedded in the
			art, architecture, and various ceremonial objects present in the scene.
			<br />
			Charles V|R offers a multi-modal window into this event of world-historical importance for enthusiasts,
			students, and scholars of art, architecture, history, music, religion, and virtual reality.
		</Card>

		<ChapterButton numeral="II" chapter="Historical Background" path="2" light class="p-4" />

		<Card light class="m-10">
			<br />
			Tom Lee, Design Technologist 
			<br />
			Tom Scheinfeldt, Director of Greenhouse 
			<br />
			Jonathan Ampiaw, MFA ‘20 Digital Media & Design 
			<br />
			Shawn Chen, BFA ‘20 Digital Media & Design 
			<br />
			Tim Miller, Title
			<br />
			Dan Pejril, Title 
			<br />
			Eric Rice, Title
			<br />
			Michael Young, 
			<br />
			Jin Liu, MFA ‘23 
			<br />
			Alex Mueller 
			<br />
			Cara Tracey 
			<br />
			Lauren Ciulla 
			<br />
			Lily Pashapour
			<br />
			Brooke Foti Gemmell 
			<br />
			Kenia Rodriguez 
			<br />
			Daisy Martin 
			<br />
			David Duncan 
			<br />
			Photographer… 
			<br />
			Eri Lauer 
			<br />
			Ryan Freeland 
			<br />
			Brianna Ricciardone 
			<br />
			Rebecca Niland 
			<br />
			John Spencer
			<br />
			Greenhouse Studios
			<img src="..//logos/GS-Full-Brackets.png" alt="Charles VR" class="mt-48 mb-4 w-2/6" />

		</Card>


	</div>
</Transition>

<style>
</style>
