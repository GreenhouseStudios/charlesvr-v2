<script>
	import Transition from '../components/transition.svelte';
	import Background from '../components/background.svelte';
	import Card from '../components/card.svelte';
	import SectionHero from '../components/section-hero.svelte';
	import Footer from '../components/footer.svelte';
	import TextCard from '../components/text-card.svelte';
	import Button from './../components/button.svelte';
</script>

<Transition>
	<SectionHero title="The Charles V|R Experience" bg="../../backgrounds/vr-goggles.jpg" scrim="blackgold" opacity1="5" opacity2="7" />
	<Background
		parallax
		src="../../backgrounds/fabric.jpg"
		scrim="maroon"
		opacity1="9"
		opacity2="7"
		class="flex flex-col justify-center items-center md:space-y-24 md:p-16 2xl:p-32 2xl:px-64 bg-cover lg:bg-fixed"
	>
		<Card class="">
			<div class="w-full ">
				Thanks to surviving eyewitness accounts of Charles’s imperial coronation, we know a great
				deal about what transpired, and yet concrete descriptions of actual music-making are rare
				and not very informative. Nevertheless, it is possible to reconstruct a plausible account of
				much of the music at the ceremony and to describe its cultural and historical significance.
<br>
<br>
				The coronation of Charles V raises questions surrounding a unified Europe, hegemony and
			colonialism, religious difference and tolerance, and the role of tradition in contemporaneous
			culture. These issues remain at the forefront of 21st-century society. Though the event
			occurred almost five hundred years ago, many of the questions that were at play in Charles V's
			coronation are still very much at play today.
			</div>
		</Card>
	</Background>
	<Background
		src="../../backgrounds/basilicafloor.jpg"
		scrim="light"
		opacity1="9"
		opacity2="7"
		class="flex flex-col-reverse items-center justify-center lg:grid lg:grid-cols-[1fr_1fr]"
	>
			<div class="grid grid-cols-2 place-items-center gap-16 md:order-last p-10 w-2/3 m-auto">
				<div class="flex flex-col items-center text-center text-[16px]">
					<img src="../../content/pope.png" alt="" class="mb-2" />
					<p class="leading-tight font-bold">
					Pope Clement VII
					</p>
				</div>
				<div class="flex flex-col items-center text-center text-[16px]">
					<img src="../../content/choirsinger.png" alt="" class="mb-2" />
					<p class="leading-tight font-bold">
					Papal Choir Member
					</p>
				</div>
				<div class="flex flex-col items-center text-center text-[16px]">
					<img src="../../content/pope.png" alt="" class="mb-2" />
					<p class="leading-tight font-bold">
					Church Official
					</p>
				</div>
				<div class="flex flex-col items-center text-center text-[16px]">
					<img src="../../content/choirsinger.png" alt="" class="mb-2" />
					<p class="leading-tight font-bold">
					Church Attendee
				</p>
				</div>
			</div>
			<TextCard light class="">
				The Charles V|R experience encourages students to engage with these issues in their
				historical context. Users can inhabit four different characters, each in a different
				location inside the Basilica of San Petronio, and each with a different role in the
				ceremony. These characters are Pope Clement VII, a member of the papal choir, an attendee in
				the nave of the church, and a church official. Each role comes with a different level of
				comprehension of the proceedings and the activity each character undertakes. The four roles
				the user can inhabit demonstrate the degree to which physical access, literacy, and overall
				understanding were determined by class distinctions in early modern society.
			</TextCard>
	</Background>
	<Background
		src="../../backgrounds/maroon-background.png"
		parallax
		scrim="maroon"
		opacity1="8"
		opacity2="5"
		class="flex flex-col-reverse items-center justify-center lg:grid lg:grid-cols-[1fr_1fr]"
	>
	<img
	src="../../backgrounds/crown.png"
	alt=" Crowning of Charles V"
	class="h-full w-full object-cover opacity-50 ">
		<TextCard class="">
			During the experience, Pope Clement VII places the crown on Charles’s head, recites an oath,
			and conveys the imperial insignia. He understands the Latin he is reciting perfectly, and to
			emulate this, the text and translation of what he is saying accompanies his voice in the
			program. As the pope places the crown on Charles’s head or the scepter in his hand, the user
			can reflect on the symbolism of each object by looking at it and clicking on a footnote
			symbol.
		</TextCard>
	</Background>
	<Background
		src="../../backgrounds/light-background.png"
		class="flex flex-col items-center justify-center lg:grid lg:grid-cols-[1fr_1fr]"
	>
		<TextCard class="" light>
			The three other characters all experience different levels of understanding in regard to the
			ceremony. The member of the papal choir sings plainchant and complex polyphony in Latin as the
			ceremony progresses. He is engaged and focused on the music, while the attendee in the nave of
			the church cannot understand the Latin being sung. He can barely follow the experience, and
			his attention is therefore instead drawn to the conversations near him, the finery of the
			dignitaries’ garb, and the art and architecture that surround him. The church official also
			pays little attention to the liturgy. He alternatively looks on from one of the many side
			chapels in the cathedral. He marvels at the artwork and architecture that surround him and
			sizes up the clothing of his peers with a critical eye.
		</TextCard>
		<img
		src="../../backgrounds/vr-overview.jpg"
		alt=" Crowning of Charles V"
		class="h-full w-full object-cover opacity-70">
	</Background>
	<Background src="../../backgrounds/maroon-background.png" class="flex flex-col items-center justify-center lg:grid lg:grid-cols-[1fr_1fr]">
		<video
		class=" inset-0  aspect-auto object-contain opacity-50"
		loop={true}
		muted={true}
		autoplay={true}
		playsinline

	>
		<source src="../../backgrounds/introcrawl.mp4" type="video/mp4" />
	</video>
	<TextCard class=" flex flex-col items-center">
		The coronation mass would have been heard by many and seen directly by very few. Its sound and
		its location were undoubtedly its most important features. Users can encounter both from
		various points of view in the Charles V|R Experience.
		<div class="my-3">
		<Button title="Placeholder" path="1"/>
	</div>
	</TextCard>
	</Background>
</Transition>
<Footer></Footer>
<style>
</style>
