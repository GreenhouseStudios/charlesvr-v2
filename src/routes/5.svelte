<script>
	import Transition from '../components/transition.svelte';
	import BioCard from '../components/bio-card.svelte';
	import ChapterButton from '../components/chapter-button.svelte';
	import Background from '../components/background.svelte';
	import Card from '../components/card.svelte';
	import SectionHero from '../components/section-hero.svelte';
	import Footer from '../components/footer.svelte';
</script>

<Transition>
	<SectionHero title="A Melancholy Mass" scrim="gold" opacity1="1" opacity2="5"/>
	<Background
		src="..//backgrounds/paintings.jpg"
		class="flex flex-col items-end justify-center h-[100vh] p-4 md:p-16 2xl:p-32 2xl:px-64"
		scrim="maroon" opacity1="7" opacity2="2"
	>
		<Card class="">
			<div class="w-full ">
				In addition to these two motets, it seems likely that Nicolas Gombert was also called upon
				to compose a work for the event, and indeed a five-voice mass published by the Scotto firm
				of Venice in 1542 is entitled “Missa a la incoronacion.” Gombert was in Charles’s employ at
				the time of the coronation, and the mass in question is securely attributed to Gombert in
				two printed sources. The assertion that this mass was at least composed for Charles’s
				imperial coronation is therefore widely accepted.
			</div>
		</Card>
		<Card class="">
			A mass is a much larger undertaking than a motet. There is no question that Gombert’s mass is
			an impressive work, one fairly typical of the composer’s style. All voice parts move
			continuously, contain few rests, and are linked by imitation in which one voice repeats,
			recognizably if not literally, a portion of melody previously heard in another voice. This
			produces a style marked by grandezza and achieves a marvelous effect. It is likely that,
			despite the fact that Thiebault was senior to Gombert in the emperor’s musical hierarchy,
			Charles held his maître des enfants in higher regard than his choirmaster.
		</Card>
	</Background>

	<video
		class="fixed inset-0 -z-50 aspect-auto h-screen w-screen object-cover"
		loop={true}
		muted={true}
		autoplay={true}
	>
		<source src="..//backgrounds/choirshot.mp4" type="video/mp4" />
	</video>
	<Background src="..//backgrounds/basilicaexterior.jpg" parallax class="flex flex-col h-[100vh] justify-center items-end p-4 md:p-16 2xl:p-32 2xl:px-64" scrim="light" opacity1="8" opacity2="6">
		<Card class="my-24 md:my-48" light>
			The surviving accounts of the event mention a stretch of “prayers” after the singing of the
			gradual. A report by Hironimo Bontempo makes a specific reference to singers reciting the
			prayers: “His majesty having had all these [insignia], a number of prayers were sung by the
			singers while the emperor was kneeling, and he was that way for more than a quarter hour.”
			This is when the Laudes Regiæ were to be sung, and it seems plausible that the two motets and
			an abbreviated form of the Laudes could have been sung during this fifteen-minute period.
		</Card>
	</Background>
	<Background src="..//backgrounds/mural.jpg" class="flex flex-col justify-center items-center h-[100vh] p-4 md:p-16 2xl:p-32 2xl:px-64" scrim="maroon" opacity1="7" opacity2="3">
		<Card class="">
			The mass may strike modern listeners as an odd choice for a coronation. A subsequent print of
			the work identifies it not as a mass for coronation, but as the Missa Sur tous regretz, the
			title referring to the fact that Sur tous regretz, a chanson by Jean Richafort, served as the
			mass’s model. The song is a decidedly sad one. Its text translates: 
		</Card>
		<Card class=" !text-gold-400 text-2xl md:text-3xl italic">
			“Above all regrets, I cry
			most piteously for my own, heaving sighs piercing my weary heart. Since I have lost my amiable
			liqueur, I complain and will complain for a long time.”
		</Card>
		<Card class="">
			The tone of the four-voice chanson,
			which is cast in the Dorian mode, matches the regret of the text, with a pervading imitative
			texture that Gombert thickens in his mass through the use of an additional voice and the
			continuous movement that Bartoli describes. Though much depends on the interpretation of the
			work in performance, its overall effect is unmistakably solemn and at least a little sad.
		</Card>
	</Background>
	
	<Background src="..//backgrounds/basilicaexterior2.jpg" parallax class="flex flex-col items-center p-4 md:p-16 2xl:p-32 2xl:px-64" scrim="light" opacity1="8" opacity2="6">
		<Card class="my-12" light>
			It is tempting, given the circumstances leading to the Sack of Rome three years prior to the
			coronation and Charles’s documented embarrassment about it, to attribute the character of this
			mass to Charles’s regret. Its basis of the regretful chanson could channel Charles’s general
			regret about the political situation and the Sack in particular.
		</Card>
		<Card class="" light>
			A more likely explanation is a particular predilection for melancholic music on Charles’s
			part. In Luys de Narváez’s 1538 anthology of intabulations for the vihuela—versions of
			polyphonic works for a guitar-like instrument popular in Spain at the time—a version of
			Josquin des Prez’s Mille Regretz bears the title “La Canción del Emperador.” Mille Regretz was
			the model for a mass by Cristóbal de Morales that appeared in a print bearing Charles’s coat
			of arms. In a 1995 article on allusions to Josquin’s Mille Regretz, Owen Rees noted Charles’s
			likely familiarity with a manuscript owned by his aunt that contained a number of similar
			“regret” chansons. While it may be difficult for modern listeners to distinguish between
			expressions of sadness and solemnity in this style of polyphony, this particular occasion
			seems to express the latter by redeploying counterpoint originally meant to express the
			former.
		</Card>
	</Background>
	<Background
		src="..//backgrounds/musicstand.jpg"
		class="flex flex-col h-[100vh] justify-center items-center p-4 md:p-16 2xl:p-32 2xl:px-64"
		scrim="maroon" opacity1="7" opacity2="3"
	>
		<Card class="my-24 md:my-48">
			Whether Gombert’s mass expresses Charles’s regret or simple solemnity will remain obscure.
			None of the surviving commentary on the coronation mentions the character of the music, and
			indeed only a single source mentions polyphonic performance at all. The accounts make clear
			that the large crowds made hearing the proceedings difficult, and we may well imagine that
			whatever meaning was drawn from any of the music—chant and polyphony alike—was reserved for
			those participants in the ceremony who could hear it. This exclusivity may have gone even
			further, since Gombert’s mass was originally published without reference to its model.
		</Card>
	</Background>
	<Background
		src="..//backgrounds/wall.jpg"
		parallax
		class="flex flex-col h-[100vh] justify-center items-center p-4 md:p-16 2xl:p-32 2xl:px-64"
		scrim="goldblack" opacity1="7" opacity2="7"
	>
		<Card class="my-24 md:my-48" >
			It is conceivable that Charles and Gombert were the only listeners who knew the model
			definitively during the coronation ceremony itself. What is clear is that Charles and Clement
			both made conscious choices about the repertory to be performed in the context of a highly
			prescribed ceremony and that the music was imbued with meaning that was meant to transcend the
			political circumstances of the day.
		</Card>
		<ChapterButton numeral="VI" chapter="The Charles V|R Experience" path="6" />
	</Background>
</Transition>
<Footer></Footer>
<style>
	@media (max-width: 768px) {
		.dropcap:first-letter {
		font-size: 4rem;
		float: left;
		margin: -.4em 0.1em -.5em 0;
	}
}

	
</style>
