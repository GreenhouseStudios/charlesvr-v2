<script>
	import Transition from './../components/transition.svelte';
	import Background from './../components/background.svelte';
	import Card from './../components/card.svelte';
	import ChapterButton from './../components/chapter-button.svelte';
	import SectionHero from './../components/section-hero.svelte';
	import NextChapter from './../components/next-chapter.svelte';
	import { onMount } from 'svelte';
	import Tooltip from './../components/tooltip.svelte';
	import ImageCard from './../components/image-card.svelte';
	import Footer from './../components/footer.svelte';
	import Button from './../components/button.svelte';
	
	let images = [1, 2, 3, 4, 5, 6];
	// let definitions = [{ word: 'coronation', definition: 'the act or occasion of crowning' }];
</script>

<Transition>
	<Background src="..//charlesvrvideoblur.mp4" scrim="gold" opacity1="5" opacity2="7" class="">
		<div class=" flex flex-col items-center justify-center gap-10 bg-cover bg-center p-4 md:p-16 h-[80vh]">
			<video
				class="fixed inset-0 -z-50 aspect-auto h-screen w-screen object-cover"
				id="videobg"
				src="..//charlesvrvideoblur.mp4"
				autoplay
				muted
				loop
				style=""
			/>
			<div class="md:max-w-[70%] mt-32" >
			<img src="..//logos/charlesvr-newduotone.png" alt="Charles VR" class="drop-shadow-sm" />
			<div class="  text-xl m-3 font-medium text-[#4D1B2C] md:text-3xl mt-5 text-center">
				Experience the Imperial Coronation of Holy Roman Emperor Charles V
			</div>
		</div>
		<br/>
		<div class="arrow animated bounce"></div>
			</div>
			</Background>
			<Background src="..//charlesvrvideoblur.mp4" scrim="light" opacity1="9" opacity2="9" class="flex flex-col h-[100vh] sm:h-[75vh] items-center justify-center">
				<div class="flex items-center justify-center px-5 sm:px-0  flex-col sm:flex-row my-4 sm:my-0 ">
			<Card light class="m-1 sm:m-8 lg:m-24 xl:m-42" scrim="light" >
				<p class="">
					Travel to 1530 Bologna to attend the <Tooltip def="Coronation: The act or occasion of crowning">coronation</Tooltip> mass of the Holy Roman Emperor,
					Charles V, in this virtual reality recreation of San Petronio. The details of the coronation
					reflect the social and political turmoil of the times; the experience itself recreates the
					sights and sounds of this religious and political ceremony using <Tooltip def="Contemporaneous: Existing, occurring, or originating during the same time
					">contemporaneous</Tooltip> accounts,
					artwork, and music as source material.
				</p>
</Card>
	<img src="static/content/rudy-placeholder-4.jpg" alt="tbd" class="h-[75vh] dog" />
</div>
</Background>
<Background src="..//charlesvrvideoblur.mp4" scrim="maroon" opacity1="9" opacity2="9" class="flex flex-col h-[100vh] sm:h-[75vh] items-center justify-center">
	<div class="flex items-center justify-center flex-col sm:flex-row  px-5 sm:px-0 my-4 sm:my-0 ">
			<img src="static/content/rudy-placeholder.jpg" alt="tbd" class="h-[75vh]  dog"/>
		<Card class="m-1 sm:m-8 lg:m-24" scrim="clear">
				<p class="">
					Experience the event from multiple perspectives — that of a member of the imperial papal
					court, a <Tooltip def="Basilica: A Roman Catholic church given ceremonial privileges" light>basilica</Tooltip> official, or a Bolognese citizen. Hear music performed during the
					ceremony as recorded by Ensemble Origo. Call up scholarly annotations to explore the
					layers of meaning embedded in the art, architecture, and various ceremonial objects
					present in the scene.
				</p>
			</Card>
				</div>
			</Background>
			<Background src="..//charlesvrvideoblur.mp4" scrim="light" opacity1="9" opacity2="9" class="flex flex-col h-[100vh] sm:h-[75vh] items-center justify-center">
<div class="flex items-center flex-col sm:flex-row  px-5 sm:px-0 my-4 sm:my-0 " >
	<Card class="m-1  sm:m-8 lg:m-24" light>
				<p class="">
					Charles V|R offers a multi-modal window into this event of world-historical importance for
					enthusiasts, students, and scholars of art, architecture, history, music, religion, and
					virtual reality.
				</p>
				<div class="flex gap-10 mt-10">
				<Button title="Read More" path="1" class="" />
				<Button title="Download" path="2" class="" />
			</div>
			</Card>
				<img src="static/content/rudy-placeholder-2.jpg" alt="tbd" class="h-[75vh] dog"/>
			</div>
			</Background>
			<Background src="..//charlesvrvideoblur.mp4" scrim="maroon" opacity1="9" opacity2="9" class="">
				<div class="flex items-center justify-center gap-10 bg-cover bg-center p-4 md:p-16 ">
			<Card dark class="md:w-[80%] w-[100%]">
				<div class="p-4">
				<h1 class="text-center text-5xl m-4 mb-20"><strong>Credits</strong></h1>
				<img
				class="w-[50%] mx-auto my-10  hidden md:block"
				src="static/logos/greenhouselogowhite.png"
				alt="credits placeholder"
			/>
			<img
			class=" mx-auto my-10 w-[25%] md:hidden"
			src="static/logos/greenhouse-square-logo.png"
			alt="credits placeholder"
		/>
				<div class="grid sm:grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Jonathan Ampiaw</strong></div>
						<div class="mb-5 text-[18px] leading-5">MFA ‘20 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Clarissa Ceglio</strong></div>
						<div class="mb-5 text-[18px] leading-5">Greenhouse Studios Associate Director of Research</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Shawn Chen</strong></div>
						<div class="mb-5 text-[18px] leading-5">BFA ‘20 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Lauren Ciulla</strong></div>
						<div class="mb-5 text-[18px] leading-5">BA ‘20 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>David Duncan</strong></div>
						<div class="mb-5 text-[18px] leading-5">PhD Candidate, History, UC Santa Cruz</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Ryan Freeland</strong></div>
						<div class="mb-5 text-[18px] leading-5">MFA ‘18 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Brooke Foti Gemmell</strong></div>
						<div class="mb-5 text-[18px] leading-5">Greenhouse Studios Design Strategist</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Eri Lauer</strong></div>
						<div class="mb-5 text-[18px] leading-5">BA ‘20 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Tom Lee</strong></div>
						<div class="mb-5 text-[18px] leading-5">Greenhouse Studios Technology Strategist</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Jin Liu</strong></div>
						<div class="mb-5 text-[18px] leading-5">MFA ‘23 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Daisy Martin</strong></div>
						<div class="mb-5 text-[18px] leading-5">Director, History & Civics Project, UC Santa Cruz</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Tim Miller</strong></div>
						<div class="mb-5 text-[18px] leading-5">Greenhouse Studios Mellon Fellow</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Alex Mueller</strong></div>
						<div class="mb-5 text-[18px] leading-5">BA ‘22 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Rebecca Niland</strong></div>
						<div class="mb-5 text-[18px] leading-5">BA ‘17 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Lily Pashapour</strong></div>
						<div class="mb-5 text-[18px] leading-5">BA ‘20 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Dan Pejril</strong></div>
						<div class="mb-5 text-[18px] leading-5">
							Asst. Prof. in-Residence, Digital Media & Design
						</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Photographer</strong></div>
						<div class="mb-5 text-[18px] leading-5">Lorem ipsum</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Brianna Ricciardone</strong></div>
						<div class="mb-5 text-[18px] leading-5">BA ‘17 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Eric Rice</strong></div>
						<div class="mb-5 text-[18px] leading-5">Dept. Head & Professor of Music History</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Kenia Rodriguez</strong></div>
						<div class="mb-5 text-[18px] leading-5">PhD '25 English Language & Literature/Letters</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Melina Sandel</strong></div>
						<div class="mb-5 text-[18px] leading-5">BFA ‘25 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Tom Scheinfeldt</strong></div>
						<div class="mb-5 text-[18px] leading-5">Director of Greenhouse Studios</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>John Spencer</strong></div>
						<div class="mb-5 text-[18px] leading-5">Lorem ipsum</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Cara Tracey</strong></div>
						<div class="mb-5 text-[18px] leading-5">BFA ‘22 Digital Media & Design</div>
					</div>
					<div class="text-center">
						<div class="mb-1 leading-10"><strong>Michael Young</strong></div>
						<div class="mb-5 text-[18px] leading-5">Publishing Services & Humanities Librarian</div>
					</div>
				</div>
			</div>
			</Card>
		</div>
		</Background>
		<Background src="..//charlesvrvideoblur.mp4" scrim="light" opacity1="9" opacity2="9" class="">
			<div class=" flex flex-col items-center justify-center gap-10 bg-cover bg-center p-4 md:p-16">
<Card light class="flex flex-col ">
				<h1 class="text-center text-5xl text-[#54182c] mb-10 md:mb-20"><strong>Partners</strong></h1>
				<div class="grid grid-rows-4 grid-cols-none md:grid-cols-4 md:grid-rows-none max-w-[300px] md:max-w-[1250px] md:gap-10 items-center justify-center gap-5">
					<img
					class=""
					src="static/logos/Mellon_Logomark_Lockup_Black.png"
					alt="credits placeholder"
				/>
				<img
				class=""
				src="static/logos/ucsantacruzlogo.png"
				alt="credits placeholder"
			/>
				<img
						class=""
						src="static/logos/OrigoLogo.png"
						alt="credits placeholder"
					/>
					<img
					class=""
					src="static/logos/kress-logo.png"
					alt="credits placeholder"
				/>	
				</div>
				</Card
			>
			</div>
		</Background>
		</Transition>
		<Footer></Footer>
<style>
.dog {
	aspect-ratio: 1/1; 
	object-fit: cover;
}
@media screen and (max-width: 1200px){
	.dog {
	aspect-ratio: 3/5
}
    }

	@media screen and (max-width: 640px){
		.dog {
	aspect-ratio: auto;
	width: 100%;
	height: auto;
}
    }

@-moz-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
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
  0%, 20%, 50%, 80%, 100% {
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
  0%, 20%, 50%, 80%, 100% {
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
  background-image: url(static/content/down-arrow.png);
  background-size: contain;
}

.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

.fade {
  opacity:0;
  transition: 1s all ease-out;
}
</style>
