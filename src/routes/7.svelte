<script>
	import Transition from './../components/transition.svelte';
	import BioCard from './../components/bio-card.svelte';
	import ChapterButton from './../components/chapter-button.svelte';
	import Background from './../components/background.svelte';
	import Card from './../components/card.svelte';
	import SectionHero from './../components/section-hero.svelte';
</script>

<Transition>
	<video
		class="fixed inset-0 -z-50 aspect-auto h-screen w-screen object-cover"
		loop={true}
		muted={true}
		autoplay={true}
	>
		<source src="..//backgrounds/introcrawl.mp4" type="video/mp4" />
	</video>
	<SectionHero title="The Charles V|R Experience" bg="..//backgrounds/vr-goggles.jpg" scrim="gold" />
	<Background
		parallax
		src="..//backgrounds/fabric.jpg"
		scrim="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))"
		class="flex flex-col items-end p-4 md:p-16 2xl:p-32 2xl:px-64"
	>
		<Card class="my-24">
			<div class="w-full first-letter:text-[300%]">
				Thanks to surviving eyewitness accounts of Charles’s imperial coronation, we know a great
				deal about what transpired, and yet concrete descriptions of actual music-making are rare
				and not very informative. Nevertheless, it is possible to reconstruct a plausible account of
				much of the music at the ceremony and to describe its cultural and historical significance.
			</div>
		</Card>
		<Card class="my-12">
			The coronation of Charles V raises questions surrounding a unified Europe, hegemony and
			colonialism, religious difference and tolerance, and the role of tradition in contemporaneous
			culture. These issues remain at the forefront of 21st-century society. Though the event
			occurred almost five hundred years ago, many of the questions that were at play in Charles V's
			coronation are still very much at play today.
		</Card>
	</Background>
	<Background
		src="..//backgrounds/vr-overtheshoulder.jpg"
		scrim="light"
		opacity="8"
		class="flex flex-col p-4 md:p-16 2xl:p-32 2xl:px-64"
	>
		<div class="my-24 flex grid-cols-2 flex-col gap-24 md:grid items-center">
			<div class="grid grid-cols-2 place-items-center gap-16 md:order-last">
				<div class="flex flex-col items-center">
					<img src="..//content/pope.png" alt="" class="mb-2" />
					Pope Clement VII
				</div>
				<div class="flex flex-col items-center">
					<img src="..//content/choirsinger.png" alt="" class="mb-2" />
					Papal Choir Member
				</div>
				<div class="flex flex-col items-center">
					<img src="..//content/pope.png" alt="" class="mb-2" />
					Church Official
				</div>
				<div class="flex flex-col items-center">
					<img src="..//content/choirsinger.png" alt="" class="mb-2" />
					Church Attendee
				</div>
			</div>
			<Card light>
				The Charles V|R experience encourages students to engage with these issues in their
				historical context. Users can inhabit four different characters, each in a different
				location inside the Basilica of San Petronio, and each with a different role in the
				ceremony. These characters are Pope Clement VII, a member of the papal choir, an attendee in
				the nave of the church, and a church official. Each role comes with a different level of
				comprehension of the proceedings and the activity each character undertakes. The four roles
				the user can inhabit demonstrate the degree to which physical access, literacy, and overall
				understanding were determined by class distinctions in early modern society.
			</Card>
		</div>
	</Background>
	<Background
		src="..//backgrounds/crown.png"
		parallax
		class="flex flex-col items-end p-4 md:p-16 2xl:p-32 2xl:px-64"
	>
		<Card class="my-24 md:my-48">
			During the experience, Pope Clement VII places the crown on Charles’s head, recites an oath,
			and conveys the imperial insignia. He understands the Latin he is reciting perfectly, and to
			emulate this, the text and translation of what he is saying accompanies his voice in the
			program. As the pope places the crown on Charles’s head or the scepter in his hand, the user
			can reflect on the symbolism of each object by looking at it and clicking on a footnote
			symbol.
		</Card>
	</Background>
	<Background
		src="..//backgrounds/vr-overview.jpg"
		scrim="light"
		opacity="8"
		class="flex flex-col items-center p-4 md:p-16 2xl:p-32 2xl:px-64"
	>
		<Card class="my-24 md:my-48" light>
			The three other characters all experience different levels of understanding in regard to the
			ceremony. The member of the papal choir sings plainchant and complex polyphony in Latin as the
			ceremony progresses. He is engaged and focused on the music, while the attendee in the nave of
			the church cannot understand the Latin being sung. He can barely follow the experience, and
			his attention is therefore instead drawn to the conversations near him, the finery of the
			dignitaries’ garb, and the art and architecture that surround him. The church official also
			pays little attention to the liturgy. He alternatively looks on from one of the many side
			chapels in the cathedral. He marvels at the artwork and architecture that surround him and
			sizes up the clothing of his peers with a critical eye.
		</Card>
	</Background>
	<Background src="" class="flex flex-col items-center p-4 md:p-16 2xl:p-32 2xl:px-64">
		<Card class="my-24 md:my-48">
			The coronation mass would have been heard by many and seen directly by very few. Its sound and
			its location were undoubtedly its most important features. Users can encounter both from
			various points of view in the Charles V|R Experience.
		</Card>
	</Background>
</Transition>

<style>
</style>
