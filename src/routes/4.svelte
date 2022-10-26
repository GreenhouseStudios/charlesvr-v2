<script>
	import Citation from './../components/citation.svelte';
	import Transition from './../components/transition.svelte';
	import BioCard from './../components/bio-card.svelte';
	import ChapterButton from './../components/chapter-button.svelte';
	import Background from './../components/background.svelte';
	import Card from './../components/card.svelte';
	import SectionHero from './../components/section-hero.svelte';
	import ImageCard from './../components/image-card.svelte';

</script>

<Transition>
	<SectionHero title="An Imperial Coronation in Bologna" bg="..//backgrounds/abolcoronation.jpg" opacity="7" />
	<video
		class="fixed inset-0 -z-50 aspect-auto h-screen w-screen object-cover"
		loop={true}
		muted={true}
		autoplay={true}
	>
		<source src="..//backgrounds/updatedmap.mp4" type="video/mp4" />
	</video>
	<Background
		parallax
		src=""
		scrim="none"
		class="flex flex-col items-end p-4 md:p-16 2xl:p-32 2xl:px-64"
	>
		<Card class="mb-24 md:w-1/2 lg:w-1/3">
			<div class="w-full first-letter:text-[300%]">
				Charles's sack of Rome had made a Roman coronation impossible. Bologna, with its large
				Basilica San Petronio, was chosen as a suitable substitute location, but the change of venue
				presented significant problems from a symbolic point of view. The geography of the Eternal
				City and Saint Peter’s Basilica were vital to the centuries-old rituals of the event.
			</div>
		</Card>
		<Card class="mb-24 md:w-1/2 lg:w-1/3">
			The imperial and papal courts therefore set about faithfully reproducing the symbolic
			geography of Rome in and around the Basilica of San Petronio. They also worked to ensure that
			the liturgy of the coronation Mass was performed as it would have been in Rome, drawing up a
			detailed ordo which specified the texts to be read and chanted in keeping with the age-old
			traditions.
		</Card>
	</Background>
	<Background
		src="..//backgrounds/crowning.jpg"
		parallax
		class="flex flex-col items-end p-4 md:p-16 2xl:p-32 2xl:px-64"
	>
		<Card class="mb-4 md:mb-24 md:w-1/2">
			Although Charles and Clement could not control the location of the ceremony, they were able to
			control the date: February 24, 1530, Charles’s thirtieth birthday. On the Church calendar,
			February 24 celebrates the life of Saint Mathias, the man chosen to replace Judas Iscariot as
			the twelfth apostle. By virtue of the fact that Charles was born on his feast day, Mathias was
			effectively Charles’s patron saint. The selection of this day drew attention to the
			relationship, symbolically casting Charles in Mathias’s place. The text of the proper for
			Mathias’s feast day consistently underscores the close connection between Christ, his
			apostles, and kingship, making it altogether appropriate for the occasion. The Gospel reading
			for the day, from the passage in Acts in which the selection of Mathias is described, followed
			immediately after the coronation itself.
		</Card>
	</Background>
	<!-- Purple Section -->
	<Background
		src="..//backgrounds/tex16-1.jpg"
		scrim="none"
		class="flex flex-col p-4 md:gap-24 md:p-16 2xl:p-32 2xl:px-64"
	>
		<div class=" gap-4 flex flex-col m-2 items-center md:flex-row">

			<div class="flex items-center">
			<Card class="">
				The splendor of the temporary décor set up for the coronation inside the church interior was
				foreshadowed by the triumphal arches in the new all’antica architectural style of the
				Italian Renaissance that were set up along the processional route leading from the town hall
				to the entrance of San Petronio. These were a marked departure from allegorizing
				mythological or sacred tableaux vivants in the medieval manner set up along the processional
				routes of earlier coronations.
			</Card>
		</div>
		<div class=" gap-4 flex flex-col m-2 items-center md:flex-row">
			<ImageCard
			src="..//content/dedication-to-the-emperor.jpg"
			citation=""
			/>
		</div>
		</div>
		<div class=" gap-4 flex flex-col m-2 items-center md:flex-row">
			<ImageCard
			src="..//content/rota-porfiletica-st-peter.jpg"
			citation=""
			/>
		<Card class="flex items-center md:w-1/2" flex="">
			<p>
				A wooden ramp led from one end of the piazza to the church entrance; it was lined with
				parade armaments and with beautiful greenery in gilded basins. At the top of the steps
				leading to the church’s main entrance portal, a temporary wooden chapel of Sancta Maria
				Inter Turres was erected; two more such chapels, named for San Gregorio and San Maurizio,
				were set up inside the church on the left side. These temporary structures helped to
				“transform” for the occasion the church of San Petronio into the Vatican basilica of St.
				Peter’s; they stood in for three chapels in St. Peter’s that were important to the
				coronation ceremony. A disc of porphyry for Charles to kneel on when he was crowned was
				placed inside the church on the wooden ramp leading from the church entrance to the High
				Altar. This was a reference to the the rota porphiletica in the pavement of St. Peter’s,
				which marked the spot whereon Charlemagne knelt when he was crowned by Pope Leo III.
			</p>
		</Card>
		</div>
		<div class="gap-4 flex flex-col m-2 items-center md:flex-row">
			<ImageCard
			src="..//content/Maarten_van_Heemskerck_013.jpg"
			citation=""
			/>
			<Card class="flex items-center md:w-1/2" flex="">
			<p>
				Some idea of how these temporary chapels may have looked comes from a drawing of the
				temporary tabernacle over the tomb of St. Peter in front of the apse in the Vatican
				basilica, although the chapels set up in San Petronio were smaller and less monumental. This
				drawing also shows that in 1530, St. Peter’s was not the magnificently decorated majestic
				“queen of basilicas” we see today; it was indeed an ungainly, partly dismantled
				Constantinian/Early Christian basilica of the fourth century, with an unfinished Renaissance
				centralized church rising within and around it. The Church of San Petronio itself was still
				under construction; it had yet to be vaulted and the choir was later extended and enlarged.
				The unfinished condition of both churches may have made the conceit of San Petronio
				tranformed into St. Peter’s easier to accept at the time. The wooden platform put up for the
				occasion in the middle of San Petronio was arranged to make the area in front of the high
				altar appear sunken, to suggest the sunken crypt-like space in front of the high altar in
				St. Peter’s. According to Vasari, the nave was lined with wooden Ionic colonnades set up for
				the coronation. If Vasari was correct, these colonnades would have enhanced the intended
				transformation of San Petronio into Saint Peter’s, which, as the drawing shows, still had
				its original Constantinian rows of spolia columns lining the nave. An idea of what such an
				Ionic colonnade would have looked like can be gained from a Fifth-Century Christian basilica
				in Rome, Santa Maria Maggiore:
			</p>
		</Card>
	</div>
	<div class="flex items-center gap-5">
			<ImageCard
			src="..//content/Sanpetroniointerior.jpg"
			citation=""
			class="img1"
			/>
			<ImageCard
			src="..//content/Rom,_Basilika_Santa_Maria_Maggiore,_Innenansicht.jpg"
			citation=""
			class="img2"
			/>
			<ImageCard
			src="..//content/Coronation_of_Louis_XV_in_Reims.jpg"
			citation=""
			class="img3"
			/>
	</div>
		<!-- <Citation /> -->
	</Background>
	<!-- Red Section -->
	<Background
		parallax
		src="..//backgrounds/tex16-35.jpg"
		class="flex flex-col items-center p-4 md:p-16 2xl:p-32 2xl:px-64"
	>
		<Card class="mb-24">
			The sumptuous decorations of tapestries and luxurious textiles not only gave the occasion and
			the interior a festive air, but also showcased the quality of textile production in Charles
			V’s Flemish territories. These brocades, silks, velvets and damasks were made in imitation of
			and in competition with the prized textiles of the Islamic world and of China.
		</Card>
		<Card class="mb-24">
			Such precious stuffs adorned the garb of the spectators as well as the interior of the church.
			Indeed the most detailed contemporary account of the coronation devotes more space to minute
			description of what the dignitaries were wearing than to any other subject. Aristocratic
			portraits of the period give a good idea of what the effect of the costume and textile
			decorations would have been.
		</Card>
		<div class=" py-5 flex items-center justify-center gap-2">
			<ImageCard
			src="..//content/Isotta_Brembati_Grumelli,_by_Giovanni_Battista_Moroni.jpg"
			citation=""
			/>
			<ImageCard
			src="..//content/Moretto,_ritratto_di_giovane,_1540-45_ca._02.jpg"
			citation=""
			/>
			<ImageCard
			src="..//content/Bronzino_-_Eleonora_di_Toledo_col_figlio_Giovanni_-_Google_Art_Project.jpg"
			citation=""
			/>
			<ImageCard
			src="..//content/Giovanni_battista_moroni.jpg"
			citation=""
			/>
		</div>
		<ChapterButton numeral="V" chapter="A Focus on Music" path="5" />
	</Background>
</Transition>

<style>
.img1 {
flex: .664;
}

.img2 {
flex: 1.2097;
}

.img3{
flex: .70313
}
</style>
