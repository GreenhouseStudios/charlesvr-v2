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
	<Background src="..//charlesvrvideoblur.mp4" scrim="gold" opacity1="5" opacity2="7" class="">
		<div class="flex flex-col items-center justify-center gap-10 bg-cover bg-center p-4 md:p-16 ">
			<video
				class="fixed inset-0 -z-50 aspect-auto h-screen w-screen object-cover"
				id="videobg"
				src="..//charlesvrvideoblur.mp4"
				autoplay
				muted
				loop
				style=""
			/>
			<img src="..//logos/charlesvr-newduotone.png" alt="Charles VR" class="z-10 mt-32 w-5/6 " />
			<div class="w-5/6 text-center text-3xl font-medium text-[#4D1B2C] md:text-5xl">
				Experience the Imperial Coronation of Holy Roman Emperor Charles V
			</div>
			<Card light class="md:max-w-[80%]" flex="">
				<p class="">
					Travel to 1530 Bologna to attend the <Tooltip word="coronation"
						 >the act or occasion of crowning</Tooltip
					> mass of the Holy Roman Emperor, Charles V, in this virtual reality recreation of <Tooltip word="San Petronio"
					>a large and iconic church in Bologna, Italy; the site of Charles’s coronation </Tooltip
			   >.
					The details of the coronation reflect the social and political turmoil of the times; the experience
					itself recreates the sights and sounds of this religious and political ceremony using <Tooltip word="contemporaneous">existing, occurring, or originating during the same time</Tooltip>
					accounts, artwork, and music as source material.
				</p>
				<br>
				<p class="">
					Experience the event from multiple perspectives — that of a member of the imperial papal
					court, a <Tooltip word="basilica">a Roman Catholic church given ceremonial privileges</Tooltip> official, or a Bolognese citizen. Hear music performed during the
					ceremony as recorded by Ensemble Origo. Call up scholarly annotations to explore the
					layers of meaning embedded in the art, architecture, and various ceremonial objects
					present in the scene.
				</p>
				<br>
				<p class="">
					Charles V|R offers a multi-modal window into this event of world-historical importance for
					enthusiasts, students, and scholars of art, architecture, history, music, religion, and
					virtual reality.
				</p>
			</Card>
			<ChapterButton numeral="II" chapter="The Coronation in Context" path="2" light class="" />
			<Card light class="flex flex-col md:max-w-[80%]">
				<h1 class="text-center text-3xl "><strong>Contributors</strong></h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium
					possimus non officiis natus quasi totam assumenda laboriosam dolores, debitis iusto esse
					recusandae dignissimos eos architecto alias a tempore enim.
				</p>
				<br />
				<div class="grid sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Jonathan Ampiaw</strong></div>
						<div class="mb-5 text-base leading-4">MFA ‘20 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Shawn Chen</strong></div>
						<div class="mb-5 text-base leading-4">BFA ‘20 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Lauren Ciulla</strong></div>
						<div class="mb-5 text-base leading-4">BA ‘20 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>David Duncan</strong></div>
						<div class="mb-5 text-base leading-4">Lorem ipsum</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Ryan Freeland</strong></div>
						<div class="mb-5 text-base leading-4">MFA ‘18 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Brooke Foti Gemmell</strong></div>
						<div class="mb-5 text-base leading-4">Design Technologist</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Eri Lauer</strong></div>
						<div class="mb-5 text-base leading-4">BA ‘20 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Tom Lee</strong></div>
						<div class="mb-5 text-base leading-4">Design Technologist</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Jin Liu</strong></div>
						<div class="mb-5 text-base leading-4">MFA ‘23 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Daisy Martin</strong></div>
						<div class="mb-5 text-base leading-4">Lorem ipsum</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Tim Miller</strong></div>
						<div class="mb-5 text-base leading-4">Lorem ipsum</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Alex Mueller</strong></div>
						<div class="mb-5 text-base leading-4">BA ‘22 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Rebecca Niland</strong></div>
						<div class="mb-5 text-base leading-4">BA ‘17 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Lily Pashapour</strong></div>
						<div class="mb-5 text-base leading-4">BA ‘20 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Dan Pejril</strong></div>
						<div class="mb-5 text-base leading-4">
							Asst. Professor-in-Residence, of Digital Media & Design
						</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Photographer</strong></div>
						<div class="mb-5 text-base leading-4">Lorem ipsum</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Brianna Ricciardone</strong></div>
						<div class="mb-5 text-base leading-4">BA ‘17 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Eric Rice</strong></div>
						<div class="mb-5 text-base leading-4">Lorem ipsum</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Kenia Rodriguez</strong></div>
						<div class="mb-5 text-base leading-4">Lorem ipsum</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Melina Sandel</strong></div>
						<div class="mb-5 text-base leading-4">BFA ‘25 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Tom Scheinfeldt</strong></div>
						<div class="mb-5 text-base leading-4">Director of Greenhouse Studios</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>John Spencer</strong></div>
						<div class="mb-5 text-base leading-4">Lorem ipsum</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Cara Tracey</strong></div>
						<div class="mb-5 text-base leading-4">BFA ‘22 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-4"><strong>Michael Young</strong></div>
						<div class="mb-5 text-base leading-4">Lorem ipsum</div>
					</div>
				</div>
			</Card>
			<Card light class="flex flex-col md:max-w-[80%]">
				<h1 class="text-center text-3xl"><strong>Funders</strong></h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium
					possimus non officiis natus quasi totam assumenda laboriosam dolores, debitis iusto esse
					recusandae dignissimos eos architecto alias a tempore enim.
				</p>
				<div class="grid grid-cols-2 gap-2 ">
					<img
						class="col-span-2 mx-auto"
						src="static/logos/greenhouselogo.png"
						alt="credits placeholder"
					/>
					<img
						class="col-span-2 mx-auto"
						src="static/logos/ucsantacruzlogo.png"
						alt="credits placeholder"
					/>
					<img
						class="col-span-2 mx-auto"
						src="static/logos/Kress_Signature_K copy.jpg"
						alt="credits placeholder"
					/>
					<img
						class="col-span-2 mx-auto"
						src="static/logos/Mellon_Logomark_Lockup_Black.png"
						alt="credits placeholder"
					/>
					<img
					class="col-span-2 mx-auto"
					src="static/logos/OrigoLogo.png"
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
				</div></Card
			>
			<ChapterButton numeral="II" chapter="The Coronation in Context" path="2" light class="" />
		</div>
	</Background>
</Transition>

<style>
</style>
