<script>
	import Citation from '../components/citation.svelte';
	import Transition from '../components/transition.svelte';
	import ChapterButton from '../components/chapter-button.svelte';
	import Background from '../components/background.svelte';
	import Card from '../components/card.svelte';
	import SectionHero from '../components/section-hero.svelte';
	import ImageCard from '../components/image-card.svelte';
	import Tooltip from '../components/tooltip.svelte';
	import Footer from '../components/footer.svelte';
	import TextCard from '../components/text-card.svelte';
	import 'material-icons/iconfont/material-icons.css';

	const carouselPhotos = [
		{
			link: '../../content/sanpetronio.jpg',
			citation:
				'https://cs.wikipedia.org/wiki/Korunovace_%C4%8Desk%C3%BDch_panovn%C3%ADk%C5%AF#/media/Soubor:Eduard_Gurk_001.jpg'
		},
		{
			link: '../../content/sacredelouis.jpeg',
			citation: 'https://commons.wikimedia.org/wiki/File:Sacre_de_Louis_XV_%C3%A0_Reims.jpg'
		},
		{
			link: '../../content/Coronation_of_Louis_XV_in_Reims.jpg',
			citation: 'https://commons.wikimedia.org/wiki/File:Coronation_of_Louis_XV_in_Reims.JPG'
		}
	];

	const peopleCarouselPhotos = [
		{
			link: '../../content/Bronzino_-_Eleonora_di_Toledo_col_figlio_Giovanni_-_Google_Art_Project.jpg',
			citation:
				'https://en.wikipedia.org/wiki/Portrait_of_Eleanor_of_Toledo#/media/File:Bronzino_-_Eleonora_di_Toledo_col_figlio_Giovanni_-_Google_Art_Project.jpg'
		},
		{
			link: '../../content/Moretto,_ritratto_di_giovane,_1540-45_ca._02.jpg',
			citation:
				'https://commons.wikimedia.org/wiki/File:Moretto,_ritratto_di_giovane,_1540-45_ca._02.jpg'
		},
		{
			link: '../../content/Giovanni_battista_moroni.jpg',
			citation:
				'https://commons.wikimedia.org/wiki/File:Giovanni_battista_moroni,_ritratto_du_don_gabriel_de_la_cueva,_duca_di_albuquerque_e_governatore_spagnolo_di_milano,_1560.JPG'
		},
		{
			link: '../../content/Isotta_Brembati_Grumelli,_by_Giovanni_Battista_Moroni.jpg',
			citation:
				'https://nl.wikipedia.org/wiki/Bestand:Isotta_Brembati_Grumelli,_by_Giovanni_Battista_Moroni.jpg'
		}
	];

	let count = 0;
	let countPeople = 0;

	const increment = () => {
		count++;
		if (count == 3) {
			count = 0;
		}
	};

	const decrement = () => {
		if (count == 0) {
			count = 2;
		} else {
			count--;
		}
	};

	const incrementPeople = () => {
		countPeople++;
		if (countPeople == 4) {
			countPeople = 0;
		}
	};

	const decrementPeople = () => {
		if (countPeople == 0) {
			countPeople = 3;
		} else {
			countPeople--;
		}
	};
</script>

<Transition>
	<SectionHero
		title="An Imperial Coronation in Bologna"
		bg="../../backgrounds/abolcoronationdark.jpg"
		opacity1="2"
		opacity2="7"
		scrim="blackgold"
	/>
	<Background
		opacity1="9"
		opacity2="9"
		scrim="maroon"
		src="../../backgrounds/maroon-background.jpg"
		class="flex flex-col-reverse items-center justify-center "
	>
		<TextCard class="">
			Charles's sack of Rome had made a Roman coronation impossible. Bologna, with its large
			Basilica San Petronio, was chosen as a suitable substitute location, but the change of venue
			presented significant problems from a symbolic point of view. The geography of the Eternal
			City and Saint Peter’s Basilica were vital to the centuries-old rituals of the event.
			<br />
			<br />
			</TextCard>
			<video class="lg:h-full object-cover opacity-70" loop={true} muted={true} autoplay={true} playsinline>
				<source src="../../backgrounds/updatedmap.mp4" type="video/mp4" />
			</video>
			<TextCard>
			The imperial and papal courts therefore set about faithfully reproducing the symbolic geography
			of Rome in and around the Basilica of San Petronio. They also worked to ensure that the liturgy
			of the coronation Mass was performed as it would have been in Rome, drawing up a detailed <Tooltip
				word="Ordo" def="A list of offices and feasts of the Roman Catholic Church for each day of the year"
				light>ordo</Tooltip
			> which specified the texts to be read and chanted in keeping with the age-old traditions.
		</TextCard>
		<div />
	</Background>
	<Background
		opacity1="9"
		opacity2="9"
		scrim="light"
		src="../../backgrounds/light-background.jpg"
		parallax
		class="flex flex-col items-center justify-center lg:grid lg:grid-cols-[1fr_1fr]"
	>
		<TextCard class="" light>
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
		</TextCard>
		<img
		src="../../backgrounds/crowning.jpg"
		alt=" Crowning of Charles V"
		class="h-full w-full object-cover opacity-70 ">
	</Background>
	<!-- Purple Section -->
	<Background
		src="../../backgrounds/tex16-1.jpg"
		opacity1="7"
		opacity2="9"
		scrim="maroon"
		class="flex flex-col-reverse items-center justify-center lg:grid lg:grid-cols-[1fr_1fr]"
	>
	<ImageCard
	src="../../content/popeclementvii.jpg"
	citation=""
	class=""
	width="sm:w-1/2"
	caption="Nicolaus Hogenberg, Procession of Pope Clement VII and the Emperor Charles V after the coronation at Bologna on the 24th February, MDXXX"
/>
		<TextCard class="">
			The splendor of the temporary décor set up for the coronation inside the church interior was
			foreshadowed by the triumphal arches in the new all’antica architectural style of the Italian
			Renaissance that were set up along the processional route leading from the town hall to the
			entrance of San Petronio. These were a marked departure from allegorizing mythological or
			sacred tableaux vivants in the medieval manner set up along the processional routes of earlier
			coronations.
		</TextCard>
	</Background>
	<Background
		src="..//backgrounds/tex16-1.jpg"
		opacity1="7"
		opacity2="9"
		scrim="light"
		class="flex flex-col items-center justify-center lg:grid lg:grid-cols-[1fr_1fr]"
		parallax
	>
		<TextCard class="" light>
			<p>
				A wooden ramp led from one end of the piazza to the church entrance; it was lined with
				parade armaments and with beautiful greenery in gilded basins. At the top of the steps
				leading to the church’s main entrance portal, a temporary wooden chapel of Sancta Maria
				Inter Turres was erected; two more such chapels, named for San Gregorio and San Maurizio,
				were set up inside the church on the left side. These temporary structures helped to
				“transform” for the occasion the church of San Petronio into the Vatican basilica of St.
				Peter’s; they stood in for three chapels in St. Peter’s that were important to the
				coronation ceremony.
			</p>
		</TextCard>
		<ImageCard
src="../../content/procession-artwork.png"
citation="https://rosettaapp.getty.edu/delivery/DeliveryManagerServlet?dps_pid=IE483735"
class=""
light
caption="Artistic representation of the procession"
width="sm:w-1/2"
/>
</Background>
<Background
src="..//backgrounds/tex16-1.jpg"
opacity1="7"
opacity2="9"
scrim="light"
class="flex flex-col-reverse items-center justify-center lg:grid lg:grid-cols-[1fr_1fr]"
parallax
>
		<ImageCard
src="../../content/rota-porfiletica-st-peter.jpg"
citation="https://www.romawonder.com/wp-content/uploads/2017/07/rota-porfiletica-st-
peter.jpg"
class=""
light
caption="Porphyry Disc in St. Peter's"
width="sm:w-1/2"
/>
<TextCard light>
	A disc of <Tooltip word="Porphyry"
			 def="A rock consisting of feldspar crystals embedded in a compact dark red or purple groundmass"
			>porphyry</Tooltip
		> for Charles to kneel on when he was crowned was placed inside the church on the wooden ramp
		leading from the church entrance to the High Altar. This was a reference to the the rota porphiletica
		in the pavement of St. Peter’s, which marked the spot whereon Charlemagne knelt when he was crowned
		by Pope Leo III.
</TextCard>
	</Background>
	<Background
		src="../../backgrounds/tex16-1.jpg"
		opacity1="7"
		opacity2="9"
		scrim="maroon"
		class="flex flex-col items-center justify-center lg:grid lg:grid-cols-[1fr_1fr]"
	>
		<TextCard class="">
			Some idea of how these temporary chapels may have looked comes from a drawing of the temporary
			tabernacle over the tomb of St. Peter in front of the apse in the Vatican basilica, although
			the chapels set up in San Petronio were smaller and less monumental. This drawing also shows
			that in 1530, St. Peter’s was not the magnificently decorated majestic “queen of basilicas” we
			see today; it was indeed an ungainly, partly dismantled Constantinian/Early Christian basilica
			of the fourth century, with an unfinished Renaissance centralized church rising within and
			around it.
		</TextCard>
		<ImageCard
			src="../../content/Maarten_van_Heemskerck_013.jpg"
			citation="https://commons.wikimedia.org/wiki/File:Maarten_van_Heemskerck_013.jpg"
			class=""
			caption="Drawing of St. Peter’s in 1530"
			width="sm:w-2/3"
		/>
	</Background>
	<Background
		src="../../backgrounds/tex16-1.jpg"
		opacity1="7"
		opacity2="9"
		scrim="light"
		class="flex flex-col-reverse items-center justify-center lg:grid lg:grid-cols-[1fr_1fr]"
		parallax
	>
	<ImageCard
	src="../../content/tempchapels.jpg"
	citation=""
	class=""
	width="sm:w-2/3"
	light
	caption="VR recreation of the wooden platform in San Petronio"
/>
	<TextCard class="" light>
		<p>
			The Church of San Petronio itself was still under construction; it had yet to be vaulted and
			the choir was later extended and enlarged. The unfinished condition of both churches may
			have made the conceit of San Petronio tranformed into St. Peter’s easier to accept at the
			time. The wooden platform put up for the occasion in the middle of San Petronio was arranged
			to make the area in front of the high altar appear sunken, to suggest the sunken crypt-like
			space in front of the high altar in St. Peter’s. 
			</p>
			</TextCard>
			</Background>
			<Background
			src="../../backgrounds/tex16-1.jpg"
			opacity1="7"
			opacity2="9"
			scrim="light"
			class="flex flex-col items-center justify-center lg:grid lg:grid-cols-[1fr_1fr]"
			parallax
		>
			<TextCard light>
				<p>
			According to Vasari, the nave was lined
			with wooden Ionic colonnades set up for the coronation. If Vasari was correct, these
			colonnades would have enhanced the intended transformation of San Petronio into Saint
			Peter’s, which, as the drawing shows, still had its original Constantinian rows of spolia
			columns lining the nave. An idea of what such an Ionic colonnade would have looked like can
			be gained from a Fifth-Century Christian basilica in Rome, Santa Maria Maggiore.
		</p>
	</TextCard>
			<ImageCard
				src="../../content/Rom,_Basilika_Santa_Maria_Maggiore,_Innenansicht.jpg"
				citation="https://commons.wikimedia.org/wiki/File:Rom,_Basilika_Santa_Maria_Maggiore,_Innenansicht.jpg"
				class=""
				width="sm:w-2/3"
				light
				caption="Santa Maria Maggiore, Rome"
			/>
	</Background>
	<Background
		src="../../backgrounds/tex16-1.jpg"
		opacity1="7"
		opacity2="9"
		scrim="maroon"
		class="flex flex-col-reverse items-center justify-center lg:grid lg:grid-cols-[1fr_1fr]"
	>
		<ImageCard
			src="../../content/Sanpetroniointerior.jpg"
			citation="https://commons.wikimedia.org/wiki/File:Sanpetroniointerior.jpg"
			width="sm:w-2/3"
		/>
		<TextCard class="">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</TextCard>
	</Background>
	<Background
		src="../../backgrounds/tex16-1.jpg"
		opacity1="7"
		opacity2="9"
		scrim="light"
		class="flex flex-col items-center lg:grid lg:grid-cols-[1fr_1fr]"
		parallax
	>
	<TextCard class="text-[18px] leading-relaxed md:text-[20px] lg:text-[24px]" light>
		Although there are no detailed visual records of the ceremony, other depictions of the
		temporary decorations set up for post-medieval coronations taking place in Gothic churches
		help us to visualize the event. The sumptuous decorations of tapestries and luxurious textiles
		not only gave the occasion and the interior a festive air, but also showcased the quality of
		textile production in Charles V’s Flemish territories. These <Tooltip
			word="Brocades"def="A rich silk fabric with raised patterns in gold and silver">brocades</Tooltip
		>, silks, velvets and <Tooltip word="Damasks"
			def="A firm lustrous fabric (as of linen, cotton, silk, or rayon) made with flat patterns in a satin weave on a plain-woven ground on jacquard looms"
			>damasks</Tooltip
		> were made in imitation of and in competition with the prized textiles of the Islamic world and
		of China.
	</TextCard>
		<div class="flex flex-col items-center">
			<ImageCard
				src={carouselPhotos[count].link}
				citation={carouselPhotos[count].citation}
				light
				height="h-[400px]"
			/>
			<div class="flex items-center gap-5 pb-10">
				<button class="material-symbols-outlined" on:click={decrement}> arrow_back </button>
				<button class="material-symbols-outlined" on:click={increment}> arrow_forward </button>
			</div>
		</div>
	</Background>
	<!-- Red Section -->
	<Background
		opacity1="8"
		opacity2="8"
		scrim="maroon"
		src="../../backgrounds/tex16-35.jpg"
		class="flex flex-col items-center  "
	>

		<TextCard class="text-[18px] leading-relaxed md:text-[20px] lg:text-[24px] flex flex-col items-center ">
			<div class="">
				Such precious stuffs adorned the garb of the spectators as well as the interior of the
				church. Indeed the most detailed contemporary account of the coronation devotes more space
				to minute description of what the dignitaries were wearing than to any other subject.
				Aristocratic portraits of the period give a good idea of what the effect of the costume and
				textile decorations would have been. The vestments of the clergy, choristers and musicians
				were every bit as elaborate.
			</div>
			</TextCard>
			<div class="flex flex-col items-center justify-center">
				<ImageCard
					src={peopleCarouselPhotos[countPeople].link}
					citation={peopleCarouselPhotos[countPeople].citation}
					height="h-[400px]"
				/>
				<div class="flex items-center gap-5 pb-10">
					<button class="material-symbols-outlined text-white" on:click={decrementPeople}>
						arrow_back
					</button>
					<button class="material-symbols-outlined text-white" on:click={incrementPeople}>
						arrow_forward
					</button>
				</div>
			</div>
			<TextCard class="text-[18px] leading-relaxed md:text-[20px] lg:text-[24px] flex flex-col items-center ">
			<div class="pb-5">
				Decorations with fragrant foliage and flowers freshened the air inside the crowded church,
				at a time when frequent bathing was rare. Temporary bleacher-like seating filled the space
				and accommodated the spectators; some of the bleachers collapsed at one point in the
				ceremony, causing panic among the crowd and killing a few unfortunate onlookers.
			</div>
			<ChapterButton numeral="IV" chapter="A Focus on Music" path="4" />
		</TextCard>
	</Background>
</Transition>
<Footer />

<style>
	button:hover {
		transform: scale(1.5);
	}
</style>
