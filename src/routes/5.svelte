<script>
	import Transition from './../components/transition.svelte';
	import BioCard from './../components/bio-card.svelte';
	import ChapterButton from './../components/chapter-button.svelte';
	import Background from './../components/background.svelte';
	import Card from './../components/card.svelte';
	import SectionHero from './../components/section-hero.svelte';
	import Tooltip from './../components/tooltip.svelte';
</script>

<Transition>
	<SectionHero title="A Focus on Music" bg="..//backgrounds/afocusonmusic.jpg" opacity1="1" opacity2="5" scrim="gold" />
	<Background
		src="..//backgrounds/Elderly_Karl_V.jpg"
		scrim="maroon"
		opacity1="7"
		opacity2="3"
		class="flex flex-col items-end p-4 md:p-16 2xl:p-32 2xl:px-64 bg-bottom"
	>
		<Card class="w-full  md:w-3/5">
			<div class="w-full">
				Charles and Clement could also control aspects of the prescribed liturgy and the music of
				the Mass. It is clear from what we know of Charles’s personality that the ceremony–and not
				least its music–was important to him. An oft-cited passage from Prudencio de Sandoval’s
				biography of Charles V underscores the ruler’s interest in music:
			</div>
		</Card>
		<Card class="w-full md:w-2/3 !text-gold-400 pl-10 ml-10 mr-0 md:text-3xl text-2xl italic">
			“And he knew music, and felt it and liked it, for many times the friars, behind the door,
			heard him leave his cell and go to the main altar, and they saw him beating time and singing
			in harmony with those who sang in the choir....”
		</Card>
		<Card class=" md:w-3/5">
			Music was extremely important to the ceremony and to the culture and politics of the
			Renaissance. Nearly every liturgical text in the period was sung, and even lay people could
			recognize <Tooltip word="plainchant" light>a monophonic rhythmically free liturgical chant of any of various Christian rites</Tooltip> sung daily or on important feast days. Because liturgical music had a
			long tradition of elaborations of prescribed plainchant with polyphony (music with multiple
			parts), listeners in the period were often very capable of hearing the original chant embedded
			within a composition such as a <Tooltip word="motet" light>a polyphonic choral composition on a sacred text usually without instrumental accompaniment</Tooltip> and understanding its significance — a practice similar
			in some ways to recognizing a sample in today’s hip hop. Popular songs could also be used as
			the basis for polyphonic masses, again resulting in a kind of intertextuality that could carry
			significant meaning. In both instances — motets based on chant and masses based on popular
			songs — liturgical text is combined with musical references to different text that serves as a
			kind of commentary or gloss.
		</Card>
	</Background>
	<Background
		src="..//backgrounds/sheetmusic.jpg"
		scrim="gold"
		opacity1="8"
		opacity2="5"
		class="flex auto-rows-max items-center flex-col p-4 md:gap-24 md:p-16 2xl:p-32 2xl:px-64"
		parallax
	>
		<Card class="mb-12 p-4 md:p-16 " light>
			The symbolic importance of music for these Renaissance audiences is apparent in the
			differences that existed between the royal coronation in Aachen and the imperial coronation in
			Rome, or in Charles’s case, Bologna. Aachen was the traditional coronation site of German
			kings (as opposed to emperors). A royal coronation (i.e., as king) had to happen before an
			imperial coronation (i.e., as emperor) took place, normally in Rome. Manuscripts that document
			the royal and imperial coronation ceremonies reveal broad similarities between the two
			(anointing with oil and bestowing of weapons and <Tooltip word="insignia">a badge of authority or honor</Tooltip>, for example), but important details
			pertaining to music distinguish the ceremonies. For the royal coronation in Aachen, the chants
			and prayers known collectively as the proper were to be those for January 6, or the feast of
			Epiphany, the day Christ’s divinity was revealed to the Magi.
		</Card>
		<Card class="mb-4 p-4 md:p-16" light>
			The allegorical significance of the texts of these chants in this context would not have gone
			unnoticed, for they refer repeatedly to Christ as a new king. The newly crowned king was to
			rule on Christ’s behalf, and his authority was revealed to the faithful in the course of the
			coronation ceremony, just as Christ was revealed to the Magi. As the Magi recognized the
			authority of the infant Christ, kneeling down and paying him homage, so the secular rulers of
			the Empire were to pay homage to the newly crowned king. In contrast to the proper chants of
			Aachen’s royal coronation ceremonies, Rome’s imperial ceremonies required only that the
			correct proper of the day be sung.
		</Card>
	</Background>
	<SectionHero title="Dual Motets" scrim = "maroon" bg="..//backgrounds/singing.jpg" opacity1="5" opacity2="7" />
	<video
		class="fixed inset-0 -z-50 aspect-auto h-screen w-screen object-cover"
		loop={true}
		muted={true}
		autoplay={true}
	>
		<source src="..//backgrounds/choirman2.mp4" type="video/mp4" />
	</video>
	<Background src="" class="flex flex-col justify-center h-[100vh] items-center p-4 md:p-16 2xl:p-32 2xl:px-64" scrim="gold" opacity1="7" opacity2="3">
		<Card class="" light>
			Other aspects of the event demonstrate the ways in which music was put to political purposes
			in the coronation. Because the <Tooltip word="retinues">a group of retainers or attendants</Tooltip> of both the pope and the emperor were in attendance at
			the coronation, the choirs of both men were present. The papal choir included the celebrated
			Italian composer Costanzo Festa, and the imperial choir was directed by Adrien Thiebault, a
			relatively unknown composer today. The imperial choir’s most illustrious member was the South
			Netherlandish composer Nicolas Gombert, who served as master of the emperor’s choirboys. A
			witness to the coronation mentioned that the Credo was sung in canto figurato, a euphemism for
			polyphony at the time. It seems unlikely that the Credo would have been the only work of
			polyphony at the event. It is likely that polyphonic works by all three composers were heard
			at Charles’s coronation.
		</Card>
	</Background>
	<Background
		src="..//backgrounds/wideview.jpg"
		scrim="maroon"
		opacity1="7"
		opacity2="3"
		class="flex flex-col justify-center h-[100vh] items-center p-4 md:p-16 2xl:p-32 2xl:px-64"
	>
		<Card class="">
			Festa’s contribution was the six-voice motet, Ecce advenit dominator. It is preserved in a
			Sistine Chapel manuscript that contains no attributions, but seems to be dedicated exclusively
			to Festa’s works. The work’s most immediately striking feature is a <Tooltip def="the plainsong or simple Gregorian melody originally sung in unison and prescribed as to form and use by ecclesiastical tradition" light>cantus firmus</Tooltip> clearly
			based upon the ancient opening acclamation of the Laudes Regiæ: “Christus vincit, christus
			regnat, christus imperat.” For a time, this motet was identified with the coronation of
			Clement rather than Charles, but Pietschmann is able to cite an obscure Spanish manuscript
			that also preserves the work. In this version, the word “Christus” in the cantus firmus has
			been replaced with “Carolus,” removing any doubt about the work’s association with Charles V.
		</Card>
	</Background>
	<Background
		src="..//backgrounds/detail.jpg"
		class="flex flex-col bg-bottom items-center p-4 md:p-16 2xl:p-32 2xl:px-64"
		scrim="gold" opacity1="5" opacity2="3"
	>
	<div class="flex flex-col items-start">
		<Card class="md:w-1/2" light>
			The opening of Festa’s motet is derived from the <Tooltip def="a piece of music sung or played at the beginning of a worship service">introit</Tooltip> for Epiphany, referencing the royal
			coronation ceremony in Aachen. The next portion of the text is from the introit for the third
			mass on Christmas Day, Puer natus est, and may have had the effect of calling Charlemagne’s
			imperial coronation on Christmas in the year 800 to mind. The rest of the text is derived from
			various psalms.
		</Card>
		<Card class="md:w-1/2" light>
			The final word of the motet, “fiat,” is relatively unusual in the liturgy and is almost
			unheard of as the final word of liturgical text. Its meaning, “may it be done,” is roughly
			equivalent to the Semitic “amen” used throughout the liturgy. The word was prescribed in
			Aachen’s coronation ritual and was associated with the “Caesar-hails” of the Roman Empire.
			Thus the texts at both the beginning and the end of the motet refer to Aachen’s royal
			coronation rite, a service in which the pope was never involved.
		</Card>
		<Card class="md:w-1/2" light>
			Given Festa’s allegiance to Clement, the composer must have set these texts—and indeed the
			very imperial “Christus vincit” cantus firmus—at Clement’s direction. Festa’s motet can
			therefore be understood as a considerable homage to Charles on the part of Clement.
		</Card>
	</div>
	</Background>
	<Background
		src="..//backgrounds/pope.jpg"
		class="md:p-16 flex flex-col items-center justify-center bg-bottom"
		scrim="maroonblack" opacity1="7" opacity2="5"
	>
	<div class="flex flex-col items-end p-4 md:p-16">
		<Card class=" md:w-1/2">
			There was a kind of parity between the choirs of Clement and Charles, since a composer from
			each ensemble contributed a motet for the event. Adrien Thiebeault’s contribution to the
			coronation’s music is the motet Coronat pontifex, which mentions Clement by name as a crowning
			pope. The motet compliments Clement, but it does so by distinguishing him from other popes who
			did not have the opportunity to crown a ruler as powerful as Charles. Unfortunately, only two
			voices of this five- or six-voice work have survived.
		</Card>
		<Card class=" md:w-1/2">
			The result of the two motets—if they were heard in a sort of dialogue—is that Clement is
			rendered subservient to Charles. This conclusion seems to also be borne out by some of
			Clement’s behavior. There are two moments in the ceremony in which the emperor was to kiss the
			pope’s feet. Clement was heard apologizing to the emperor in the first instance, and embracing
			him to prevent the second from taking place.
		</Card>
		</div>
		<div class="flex justify-center mb-4">
		<ChapterButton numeral="VI" chapter="A Coronation Mass" path="6" />
	</div>
	</Background>
</Transition>

<style>

</style>
