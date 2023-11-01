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
		opacity2="7"
		scrim="maroon"
		parallax
		src=""
		class="justify-center md:grid md:grid-cols-[1fr_1fr] items-center flex flex-col-reverse"
	>
	<TextCard class="">
			Charles's sack of Rome had made a Roman coronation impossible. Bologna, with its large
			Basilica San Petronio, was chosen as a suitable substitute location, but the change of venue
			presented significant problems from a symbolic point of view. The geography of the Eternal
			City and Saint Peter’s Basilica were vital to the centuries-old rituals of the event.
<br />
<br />
The imperial and papal courts therefore set about faithfully reproducing the symbolic
		geography of Rome in and around the Basilica of San Petronio. They also worked to ensure that
		the liturgy of the coronation Mass was performed as it would have been in Rome, drawing up a
		detailed <Tooltip def="Ordo: A list of offices and feasts of the Roman Catholic Church for each day of the year" light>ordo</Tooltip> which specified the texts to be read and chanted in keeping with the age-old
		traditions.
	</TextCard>
	<video
	class="opacity-40 object-cover h-full"
	loop={true}
	muted={true}
	autoplay={true}
>
	<source src="../../backgrounds/updatedmap.mp4" type="video/mp4" />
</video>
<div>
</div>
	</Background>
	<Background
		opacity1="9"
		opacity2="9"
		scrim="light"
		src="../../backgrounds/crowning.jpg"
		parallax
		class="justify-center md:grid md:grid-cols-[1fr_1fr] items-center flex flex-col"
	>
		<img src="../../backgrounds/crowning.jpg" alt=" Crowning of Charles V" class="h-full w-full object-cover opacity-50 ">
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
	</Background>
	<!-- Purple Section -->
	<Background
		src="../../backgrounds/tex16-1.jpg"
		opacity1="7"
		opacity2="9"
		scrim="maroon"
		class="justify-center md:grid md:grid-cols-[1fr_1fr] items-center flex flex-col-reverse"
		parallax
	>
				<TextCard class="">
					The splendor of the temporary décor set up for the coronation inside the church interior
					was foreshadowed by the triumphal arches in the new all’antica architectural style of the
					Italian Renaissance that were set up along the processional route leading from the town
					hall to the entrance of San Petronio. These were a marked departure from allegorizing
					mythological or sacred tableaux vivants in the medieval manner set up along the
					processional routes of earlier coronations.
				</TextCard>
				<ImageCard src="static/content/popeclementvii.jpg" citation="" class="" width="w-2/3"  />
		</Background>
		<Background
		src="../../backgrounds/tex16-1.jpg"
		opacity1="7"
		opacity2="9"
		scrim="light"
		class="justify-center md:grid md:grid-cols-[1fr_1fr] items-center flex flex-col"
		parallax
	>
	<ImageCard src="static/content/rota-porfiletica-st-peter.jpg" citation="https://www.romawonder.com/wp-content/uploads/2017/07/rota-porfiletica-st-
	peter.jpg" class="" light/>
			<TextCard class="" light>
				<p>
					A wooden ramp led from one end of the piazza to the church entrance; it was lined with
					parade armaments and with beautiful greenery in gilded basins. At the top of the steps
					leading to the church’s main entrance portal, a temporary wooden chapel of Sancta Maria
					Inter Turres was erected; two more such chapels, named for San Gregorio and San Maurizio,
					were set up inside the church on the left side. These temporary structures helped to
					“transform” for the occasion the church of San Petronio into the Vatican basilica of St.
					Peter’s; they stood in for three chapels in St. Peter’s that were important to the
					coronation ceremony. A disc of <Tooltip def="Porphyry: A rock consisting of feldspar crystals embedded in a compact dark red or purple groundmass">porphyry</Tooltip> for Charles to kneel on when he was crowned was
					placed inside the church on the wooden ramp leading from the church entrance to the High
					Altar. This was a reference to the the rota porphiletica in the pavement of St. Peter’s,
					which marked the spot whereon Charlemagne knelt when he was crowned by Pope Leo III.
				</p>
			</TextCard>


		</Background>
		<Background
		src="../../backgrounds/tex16-1.jpg"
		opacity1="7"
		opacity2="9"
		scrim="maroon"
		class="justify-center md:grid md:grid-cols-[1fr_1fr] items-center flex flex-col-reverse"
		parallax
	>
			<TextCard class=" " >
					Some idea of how these temporary chapels may have looked comes from a drawing of the
					temporary tabernacle over the tomb of St. Peter in front of the apse in the Vatican
					basilica, although the chapels set up in San Petronio were smaller and less monumental.
			</TextCard>
			<ImageCard src="static/content/Maarten_van_Heemskerck_013.jpg" citation="https://commons.wikimedia.org/wiki/File:Maarten_van_Heemskerck_013.jpg" class="" />

		</Background>
		<Background
		src="../../backgrounds/tex16-1.jpg"
		opacity1="7"
		opacity2="9"
		scrim="light"
		class="justify-center md:grid md:grid-cols-[1fr_1fr] items-center flex flex-col"
		parallax
	>
	<div class="flex md:flex-col flex-row items-center">
		<ImageCard
			src="static/content/Rom,_Basilika_Santa_Maria_Maggiore,_Innenansicht.jpg"
			citation="https://commons.wikimedia.org/wiki/File:Rom,_Basilika_Santa_Maria_Maggiore,_Innenansicht.jpg"
			class=""
			width="md:w-1/2"
			light
		/>
		<ImageCard src="static/content/tempchapels.jpg" citation="" class="" width="md:w-1/2" light />
	</div>
			<TextCard class="" light>
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
			</TextCard>
		</Background>
		<Background
		src="../../backgrounds/tex16-1.jpg"
		opacity1="7"
		opacity2="9"
		scrim="maroon"
		class="justify-center md:grid md:grid-cols-[1fr_1fr] items-center flex flex-col-reverse"
		parallax
	>
	<TextCard class="">
		<p>
			Although there are no detailed visual records of the ceremony, other depictions of the
			temporary decorations set up for post-medieval coronations taking place in Gothic churches
			help us to visualize the event.
		</p>
	</TextCard>		
	<ImageCard src="static/content/Sanpetroniointerior.jpg" citation="https://commons.wikimedia.org/wiki/File:Sanpetroniointerior.jpg" width="w-2/3" />
		</Background>
		<Background
		src="../../backgrounds/tex16-1.jpg"
		opacity1="7"
		opacity2="9"
		scrim="light"
		class="flex flex-col items-center p-4 md:p-16 2xl:p-32 2xl:px-64"
		parallax
	>
	<div class="flex items-center md:gap-5 ">
			<ImageCard src="static/content/sanpetronio.jpg" citation="https://cs.wikipedia.org/wiki/Korunovace_%C4%8Desk%C3%BDch_panovn%C3%ADk%C5%AF#/media/Soubor:Eduard_Gurk_001.jpg" width="w-full" light />
			<ImageCard src="static/content/sacredelouis.jpeg" citation="https://commons.wikimedia.org/wiki/File:Sacre_de_Louis_XV_%C3%A0_Reims.jpg" light width="w-full" />
			<ImageCard src="static/content/Coronation_of_Louis_XV_in_Reims.jpg" citation="https://commons.wikimedia.org/wiki/File:Coronation_of_Louis_XV_in_Reims.JPG" light width="w-full" />
	</div>
	<Card class="p-4 text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed md:p-16" light >
		The sumptuous decorations of tapestries and luxurious textiles not only gave the occasion and
		the interior a festive air, but also showcased the quality of textile production in Charles
		V’s Flemish territories. These <Tooltip def="Brocades: A rich silk fabric with raised patterns in gold and silver" >brocades</Tooltip>, silks, velvets and <Tooltip def="Damasks: A firm lustrous fabric (as of linen, cotton, silk, or rayon) made with flat patterns in a satin weave on a plain-woven ground on jacquard looms" >damasks</Tooltip> were made in imitation of
		and in competition with the prized textiles of the Islamic world and of China.
</Card>
		
	</Background>
	<!-- Red Section -->
	<Background
		parallax
		opacity1="8"
		opacity2="8"
		scrim="maroon"
		src="../../backgrounds/tex16-35.jpg"
		class="flex flex-col items-center p-4 md:p-16 2xl:p-32 2xl:px-64"
	>
		<div class="flex items-center justify-center">
			<div class="mr-5 flex flex-col justify-center gap-4 md:mr-0 md:flex-row">
				<div class="img4">
					<ImageCard
						src="static/content/Moretto,_ritratto_di_giovane,_1540-45_ca._02.jpg"
						citation="https://commons.wikimedia.org/wiki/File:Moretto,_ritratto_di_giovane,_1540-45_ca._02.jpg"
					/>
				</div>
				<div class="img5">
					<ImageCard
						src="static/content/Bronzino_-_Eleonora_di_Toledo_col_figlio_Giovanni_-_Google_Art_Project.jpg"
						citation="https://en.wikipedia.org/wiki/Portrait_of_Eleanor_of_Toledo#/media/File:Bronzino_-_Eleonora_di_Toledo_col_figlio_Giovanni_-_Google_Art_Project.jpg"
					/>
				</div>
			</div>
			<div class="flex flex-col justify-center gap-5 md:flex-row">
				<div class="img6">
					<ImageCard src="static/content/Giovanni_battista_moroni.jpg" citation="https://commons.wikimedia.org/wiki/File:Giovanni_battista_moroni,_ritratto_du_don_gabriel_de_la_cueva,_duca_di_albuquerque_e_governatore_spagnolo_di_milano,_1560.JPG" />
				</div>
				<div class="img7">
					<ImageCard
						src="static/content/Isotta_Brembati_Grumelli,_by_Giovanni_Battista_Moroni.jpg"
						citation="https://nl.wikipedia.org/wiki/Bestand:Isotta_Brembati_Grumelli,_by_Giovanni_Battista_Moroni.jpg"
					/>
				</div>
			</div>
		</div>
		<Card class="p-4 text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed md:p-16" >
			Such precious stuffs adorned the garb of the spectators as well as the interior of the church.
			Indeed the most detailed contemporary account of the coronation devotes more space to minute
			description of what the dignitaries were wearing than to any other subject. Aristocratic
			portraits of the period give a good idea of what the effect of the costume and textile
			decorations would have been.
			<br />
			The vestments of the clergy, choristers and musicians were every bit as elaborate.

		</Card>
		</Background>
		<Background
		parallax
		opacity1="8"
		opacity2="8"
		scrim="goldblack"
		src="../../backgrounds/tex16-35.jpg"
		class="flex flex-col items-center p-4 md:p-16 2xl:p-32 2xl:px-64"
	>
		<div class="flex items-center gap-5">
			<div class="img8">
				<ImageCard src="static/content/singingangels.jpg" citation="https://www.flickr.com/photos/8545333@N07/2208696665" />
			</div>
			<div class="img9">
				<ImageCard src="static/content/St._Peter_Niccoline_Chapel.jpg" citation="https://en.wikipedia.org/wiki/Niccoline_Chapel#/media/File:St._Peter_Niccoline_Chapel.jpg" />
			</div>
			<div class="img10">
				<ImageCard src="../../content/saintaugustineofhippo.jpeg" citation="https://www.metmuseum.org/art/collection/search/471903" />
			</div>
		</div>
		<Card class="p-4 text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed md:p-16" >
			<p>
				Decorations with fragrant foliage and flowers freshened the air inside the crowded church,
				at a time when frequent bathing was rare. Temporary bleacher-like seating filled the space
				and accommodated the spectators; some of the bleachers collapsed at one point in the
				ceremony, causing panic among the crowd and killing a few unfortunate onlookers.
			</p>
		</Card>
		<!-- grid md:grid-cols-4 grid-cols-2 items-center justify-center gap-2 -->
		<ChapterButton numeral="IV" chapter="A Focus on Music" path="4" />
	</Background>
</Transition>
<Footer></Footer>

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
