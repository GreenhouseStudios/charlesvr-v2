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
		class="flex flex-col items-center justify-centerbg-cover bg-center p-4 pt-0 md:p-16 2xl:p-32 2xl:px-64"
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
				Travel to 1530 Bologna to attend the <span class="tooltip"> <strong>coronation<span class="tooltiptext">the act or occasion of crowning
				</span></strong></span> mass of the Holy Roman Emperor, Charles V,
				in this virtual reality recreation of <span class="tooltip"> <strong>San Petronio<span class="tooltiptext">a large and iconic church in Bologna, Italy; the site of Charles’s coronation
				</span></strong></span>. The details of the coronation reflect
				the social and political turmoil of the times; the experience itself recreates the sights
				and sounds of this religious and political ceremony using contemporaneous accounts, artwork,
				and music as source material.
			</p>
			<p class="mb-10">
				Experience the event from multiple perspectives — that of a member of the imperial/papal
				court, a <span class="tooltip"><span class="flexcontainer"><strong>basilica<span class="tooltiptext">a Roman Catholic church given ceremonial privileges
				</span></strong></span></span> official, or a Bolognese citizen. Hear music performed during the ceremony
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

		<Card light class="flex flex-col max-w-[80%] m-10">
			<h1 class="text-center text-3xl"><strong>Contributors</strong></h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium possimus non officiis natus quasi totam assumenda laboriosam dolores, debitis iusto esse recusandae dignissimos eos architecto alias a tempore enim.</p>
			<div class="grid grid-cols-2 p-5">
			<ul class="text-center">
				<strong>Jonathan Ampiaw,</strong> 
				<div class="text-base mb-2 leading-3">MFA ‘20 Digital Media & Design</div>
				<strong>Shawn Chen,</strong> 
				<div class="text-base mb-2 leading-3">BFA ‘20 Digital Media & Design</div>
				<strong>Lauren Ciulla,</strong> 
				<div class="text-base mb-2 leading-3">BA ‘20 Digital Media & Design</div>
				<strong>Dan Pejril,</strong> 
				<div class="text-base mb-2 leading-3">Asst. Professor-in-Residence, of Digital Media & Design</div>
				<strong>David Duncan</strong>
				<div class="text-base mb-2 leading-3">Lorem ipsum</div>
				<strong>Ryan Freeland,</strong>
				<div class="text-base mb-2 leading-3">MFA ‘18 Digital Media & Design</div>
				<strong>Brooke Foti Gemmell,</strong>
				<div class="text-base mb-2 leading-3">Design Technologist</div>
				<strong>Eri Lauer,</strong>
				<div class="text-base mb-2 leading-3">BA ‘20 Digital Media & Design</div>
				<strong>Tom Lee,</strong>
				<div class="text-base mb-2 leading-3">Design Technologist</div>
				<strong>Jin Liu,</strong>
				<div class="text-base mb-2 leading-3">MFA ‘23 Digital Media & Design</div>
				<strong>Daisy Martin</strong>
				<div class="text-base mb-2 leading-3">Lorem ipsum</div>
				<strong>Photographer</strong>
				<div class="text-base mb-2 leading-3">Lorem ipsum</div>
			</ul>
			<ul class="text-center">
				<strong>Tim Miller</strong>
				<div class="text-base mb-2 leading-3">Lorem ipsum</div>
				<strong>Alex Mueller</strong> 
				<div class="text-base mb-2 leading-3">BA ‘22 Digital Media & Design </div>
				<strong>Rebecca Niland</strong>
				<div class="text-base mb-2 leading-3">BA ‘17 Digital Media & Design </div>
				<strong>Lily Pashapour</strong> 
				<div class="text-base mb-2 leading-3">BA ‘20 Digital Media & Design </div>
				<strong>Brianna Ricciardone</strong>
				<div class="text-base mb-2 leading-3">BA ‘17 Digital Media & Design </div>
				<strong>Eric Rice</strong>
				<div class="text-base mb-2 leading-3">Lorem ipsum </div>
				<strong>Kenia Rodriguez</strong>
				<div class="text-base mb-2 leading-3">Lorem ipsum</div>
				<strong>Tom Scheinfeldt</strong> 
				<div class="text-base mb-2 leading-3">Director of Greenhouse Studio </div>
				<strong>John Spencer</strong>
				<div class="text-base mb-2 leading-3">Lorem ipsum</div>
				<strong>Cara Tracey</strong>
				<div class="text-base mb-2 leading-3">BFA ‘22 Digital Media & Design </div>
				<strong>Michael Young</strong>
				<div class="text-base mb-2 leading-3">Lorem ipsum</div>
				<strong>Melina Sandel</strong>
				<div class="text-base mb-2 leading-3">BFA ‘25 Digital Media & Design </div>
			</ul>
		</div>
		</Card>

		<Card light class="flex flex-col max-w-[80%] m-10">
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
.tooltip {
  cursor: pointer;  
  visibility: visible;
  color: black;
  position: relative;
  text-decoration: underline;
}
.tooltiptext {
  visibility: hidden;
  align-items: center;
  background-color: rgb(255, 255, 255);
  color: black;
  border-radius: 6px;
  padding: 5px 5px;
  position: absolute;
  z-index: auto;
  width: max-content;
  max-width: 250px;
  font-size: 16px;
  line-height: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

</style>
