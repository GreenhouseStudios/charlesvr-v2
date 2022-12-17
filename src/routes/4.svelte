<script>
	import Citation from './../components/citation.svelte';
	import Transition from './../components/transition.svelte';
	import BioCard from './../components/bio-card.svelte';
	import ChapterButton from './../components/chapter-button.svelte';
	import Background from './../components/background.svelte';
	import Card from './../components/card.svelte';
	import SectionHero from './../components/section-hero.svelte';
	import ImageCard from './../components/image-card.svelte';
	import Tooltip from './../components/tooltip.svelte';
</script>

<Transition>
	<SectionHero
		title="An Imperial Coronation in Bologna"
		bg="..//backgrounds/abolcoronationdark.jpg"
		opacity1="2"
		opacity2="7"
		scrim="gold"
	/>
	<video
		class="fixed inset-0 -z-50 aspect-auto h-screen w-screen object-cover"
		loop={true}
		muted={true}
		autoplay={true}
	>
		<source src="..//backgrounds/updatedmap.mp4" type="video/mp4" />
	</video>
	<Background
		opacity1="5"
		opacity2="1"
		scrim="maroon"
		parallax
		src=""
		class="flex h-[100vh] flex-col items-end justify-around p-4 md:h-min md:p-16 2xl:p-32 2xl:px-64"
	>
		<Card class="md:w-1/2 lg:w-1/3">
			<div class="w-full ">
				Charles's sack of Rome had made a Roman coronation impossible. Bologna, with its large
				Basilica San Petronio, was chosen as a suitable substitute location, but the change of venue
				presented significant problems from a symbolic point of view. The geography of the Eternal
				City and Saint Peter’s Basilica were vital to the centuries-old rituals of the event.
			</div>
		</Card>
		<Card class="md:w-1/2 lg:w-1/3">
			The imperial and papal courts therefore set about faithfully reproducing the symbolic
			geography of Rome in and around the Basilica of San Petronio. They also worked to ensure that
			the liturgy of the coronation Mass was performed as it would have been in Rome, drawing up a
			detailed <Tooltip word="ordo" light>a list of offices and feasts of the Roman Catholic Church for each day of the year</Tooltip> which specified the texts to be read and chanted in keeping with the age-old
			traditions.
		</Card>
	</Background>
	<Background
		opacity1="5"
		opacity2="3"
		scrim="gold"
		src="..//backgrounds/crowning.jpg"
		parallax
		class="flex h-[100vh] flex-col items-center justify-center p-4 md:h-min md:items-end md:p-16 2xl:p-32 2xl:px-64"
	>
		<Card class="md:w-1/2" light>
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
		opacity1="7"
		opacity2="9"
		scrim="maroon"
		class="flex flex-col p-4 md:gap-24 md:p-16"
		parallax
	>
		<div class=" mb-2 flex flex-col items-center  md:flex-row md:gap-5">
			<div class="my-5 flex items-center">
				<Card class="">
					The splendor of the temporary décor set up for the coronation inside the church interior
					was foreshadowed by the triumphal arches in the new all’antica architectural style of the
					Italian Renaissance that were set up along the processional route leading from the town
					hall to the entrance of San Petronio. These were a marked departure from allegorizing
					mythological or sacred tableaux vivants in the medieval manner set up along the
					processional routes of earlier coronations.
				</Card>
			</div>
			<div class=" flex flex-col items-center  md:flex-row">
				<ImageCard src="static/content/popeclementvii.jpg" citation="" />
			</div>
		</div>
		<div class="flex flex-col items-center md:flex-row md:gap-5">
			<ImageCard src="static/content/rota-porfiletica-st-peter.jpg" citation="" />
			<Card class="mb-5 flex items-center md:w-1/2" flex="">
				<p>
					A wooden ramp led from one end of the piazza to the church entrance; it was lined with
					parade armaments and with beautiful greenery in gilded basins. At the top of the steps
					leading to the church’s main entrance portal, a temporary wooden chapel of Sancta Maria
					Inter Turres was erected; two more such chapels, named for San Gregorio and San Maurizio,
					were set up inside the church on the left side. These temporary structures helped to
					“transform” for the occasion the church of San Petronio into the Vatican basilica of St.
					Peter’s; they stood in for three chapels in St. Peter’s that were important to the
					coronation ceremony. A disc of <Tooltip word="porphyry" light>a rock consisting of feldspar crystals embedded in a compact dark red or purple groundmass</Tooltip> for Charles to kneel on when he was crowned was
					placed inside the church on the wooden ramp leading from the church entrance to the High
					Altar. This was a reference to the the rota porphiletica in the pavement of St. Peter’s,
					which marked the spot whereon Charlemagne knelt when he was crowned by Pope Leo III.
				</p>
			</Card>
		</div>
		<div class=" flex flex-col items-center md:flex-row md:gap-5">
			<Card class="mb-5 flex items-center md:w-1/2" flex="">
				<p>
					Some idea of how these temporary chapels may have looked comes from a drawing of the
					temporary tabernacle over the tomb of St. Peter in front of the apse in the Vatican
					basilica, although the chapels set up in San Petronio were smaller and less monumental.
				</p>
			</Card>
			<ImageCard src="static/content/Maarten_van_Heemskerck_013.jpg" citation="" class="" />
		</div>
		<div class=" flex flex-col items-center md:flex-row md:gap-5">
			<div class="flex flex-col">
				<ImageCard
					src="static/content/Rom,_Basilika_Santa_Maria_Maggiore,_Innenansicht.jpg"
					citation=""
					class=""
				/>
				<ImageCard src="static/content/tempchapels.jpg" citation="" class="" />
			</div>
			<Card class="md:w-1/2 " flex="">
				<p>
					This drawing also shows that in 1530, St. Peter’s was not the magnificently decorated
					majestic “queen of basilicas” we see today; it was indeed an ungainly, partly dismantled
					Constantinian/Early Christian basilica of the fourth century, with an unfinished
					Renaissance centralized church rising within and around it. The Church of San Petronio
					itself was still under construction; it had yet to be vaulted and the choir was later
					extended and enlarged. The unfinished condition of both churches may have made the conceit
					of San Petronio tranformed into St. Peter’s easier to accept at the time. The wooden
					platform put up for the occasion in the middle of San Petronio was arranged to make the
					area in front of the high altar appear sunken, to suggest the sunken crypt-like space in
					front of the high altar in St. Peter’s. According to Vasari, the nave was lined with
					wooden Ionic colonnades set up for the coronation. If Vasari was correct, these colonnades
					would have enhanced the intended transformation of San Petronio into Saint Peter’s, which,
					as the drawing shows, still had its original Constantinian rows of spolia columns lining
					the nave. An idea of what such an Ionic colonnade would have looked like can be gained
					from a Fifth-Century Christian basilica in Rome, Santa Maria Maggiore:
				</p>
			</Card>
		</div>
		<div class="mb-5 flex items-center gap-5 md:gap-10">
			<Card>
				<p>
					Although there are no detailed visual records of the ceremony, other depictions of the
					temporary decorations set up for post-medieval coronations taking place in Gothic churches
					help us to visualize the event.
				</p>
			</Card>
			<ImageCard src="static/content/Sanpetroniointerior.jpg" citation="" />
		</div>
		<div class="flex items-center gap-5">
			<div class="img1">
				<ImageCard src="static/content/sanpetronio.jpg" citation="" />
			</div>
			<div class="img2">
				<ImageCard src="static/content/sacredelouis.jpeg" citation="" />
			</div>
			<div class="img3">
				<ImageCard src="static/content/Coronation_of_Louis_XV_in_Reims.jpg" citation="" />
			</div>
		</div>
		<!-- <Citation /> -->
	</Background>
	<!-- Red Section -->
	<Background
		parallax
		opacity1="5"
		opacity2="8"
		scrim="goldblack"
		src="..//backgrounds/tex16-35.jpg"
		class="flex flex-col items-center p-4 md:p-16 2xl:p-32 2xl:px-64"
	>
		<Card class="" light>
			The sumptuous decorations of tapestries and luxurious textiles not only gave the occasion and
			the interior a festive air, but also showcased the quality of textile production in Charles
			V’s Flemish territories. These <Tooltip word="brocades">a rich silk fabric with raised patterns in gold and silver</Tooltip>, silks, velvets and <Tooltip word="damasks">a firm lustrous fabric (as of linen, cotton, silk, or rayon) made with flat patterns in a satin weave on a plain-woven ground on jacquard looms</Tooltip> were made in imitation of
			and in competition with the prized textiles of the Islamic world and of China.
		</Card>
		<Card class="" light>
			Such precious stuffs adorned the garb of the spectators as well as the interior of the church.
			Indeed the most detailed contemporary account of the coronation devotes more space to minute
			description of what the dignitaries were wearing than to any other subject. Aristocratic
			portraits of the period give a good idea of what the effect of the costume and textile
			decorations would have been.
		</Card>
		<div class="flex items-center justify-center">
			<div class="mr-5 flex flex-col justify-center gap-4 md:mr-0 md:flex-row">
				<div class="img4">
					<ImageCard
						src="static/content/Moretto,_ritratto_di_giovane,_1540-45_ca._02.jpg"
						citation=""
					/>
				</div>
				<div class="img5">
					<ImageCard
						src="static/content/Bronzino_-_Eleonora_di_Toledo_col_figlio_Giovanni_-_Google_Art_Project.jpg"
						citation=""
					/>
				</div>
			</div>
			<div class="flex flex-col justify-center gap-5 md:flex-row">
				<div class="img6">
					<ImageCard src="static/content/Giovanni_battista_moroni.jpg" citation="" />
				</div>
				<div class="img7">
					<ImageCard
						src="static/content/Isotta_Brembati_Grumelli,_by_Giovanni_Battista_Moroni.jpg"
						citation=""
					/>
				</div>
			</div>
		</div>
		<Card class="mb-4 md:mb-24" light>
			<p>The vestments of the clergy, choristers and musicians were every bit as elaborate.</p>
		</Card>
		<div class="flex items-center gap-5">
			<div class="img8">
				<ImageCard src="static/content/singingangels.jpg" citation="" />
			</div>
			<div class="img9">
				<ImageCard src="static/content/St._Peter_Niccoline_Chapel.jpg" citation="" />
			</div>
			<div class="img10">
				<ImageCard src="..//content/saintaugustineofhippo.jpeg" citation="" />
			</div>
		</div>
		<Card class="mb-4 md:mb-24" light>
			<p>
				Decorations with fragrant foliage and flowers freshened the air inside the crowded church,
				at a time when frequent bathing was rare. Temporary bleacher-like seating filled the space
				and accommodated the spectators; some of the bleachers collapsed at one point in the
				ceremony, causing panic among the crowd and killing a few unfortunate onlookers.
			</p>
		</Card>
		<!-- grid md:grid-cols-4 grid-cols-2 items-center justify-center gap-2 -->
		<ChapterButton numeral="V" chapter="A Focus on Music" path="5" />
	</Background>
</Transition>

<style>
	.img1 {
		flex: 0.664;
	}

	.img2 {
		flex: 1.2097;
	}

	.img3 {
		flex: 0.59;
	}

	.img4 {
		flex: 0.45;
	}

	.img5 {
		flex: 0.5;
	}

	.img6 {
		flex: 0.51;
	}

	.img7 {
		flex: 0.42;
	}

	.img8 {
		flex: 0.45;
	}

	.img9 {
		flex: 0.24;
	}

	.img10 {
		flex: 0.35;
	}
</style>
