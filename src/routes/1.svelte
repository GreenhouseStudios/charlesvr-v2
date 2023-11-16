<script>
	import Transition from '../components/transition.svelte';
	import BioCard from '../components/bio-card.svelte';
	import ChapterButton from '../components/chapter-button.svelte';
	import Background from '../components/background.svelte';
	import Card from '../components/card.svelte';
	import SectionHero from '../components/section-hero.svelte';
	import Tooltip from '../components/tooltip.svelte';
	import Footer from '../components/footer.svelte';
	import ImageCardColor from '../components/image-card-color.svelte';
	
	// const appHeight = () => {
	// 	const doc = document.documentElement;
	// 	doc.style.setProperty('--app-height', `${window.innerHeight}px`);
	// };
	// window.addEventListener('resize', appHeight);
	// appHeight();
</script>

<body>
	<SectionHero
		title="The Coronation in Context"
		bg="../../backgrounds/earlyflagdark.jpg"
		scrim="blackgold"
		opacity1="4"
		opacity2="7"
		class="backdrop-brightness-50"
	/>
	<Background
		parallax
		scrim="maroon"
		opacity1="7"
		opacity2="2"
		src="../../backgrounds/Bologna_Italy_San_Petronio_from_Asinelli.jpg"
		class="flex-col justify-center md:space-y-24 md:p-16 2xl:p-32 2xl:px-64"
	>
		<Card class="">
			On February 24, 1530, Pope Clement VII crowned Charles Habsburg Holy Roman Emperor in the
			Basilica San Petronio in Bologna. It was the last time a pope would crown an emperor, ending a
			700-year-old tradition that began with Charlemagne's coronation on Christmas Day in 800.
			<br />
			<br />
			Amid increasing power of the Ottoman Empire to the east, the subjugation of the New World to the
			west, and the rise of Protestantism within Europe itself, the political situation was delicate.
			Charles could not be crowned in Rome, because Protestant German mercenaries he employed in a conflict
			with France had sacked the Eternal City three years earlier.
			<br />
			<br />
			This context informed the planning and execution of the ceremony, which had to conform to tradition
			but also reflect the political realities of the day. For the newly-crowned Charles V and Pope Clement,
			the coronation signified a continuation of an idealized, united, Christian European state that
			had its origins in the Roman Empire itself.
		</Card>
	</Background>
	<Background
		src="../../backgrounds/holy-roman-empire.jpg"
		scrim="light"
		opacity1="9"
		opacity2="8"
		class="flex flex-col bg-center	"
	>
		<div class="flex flex-col-reverse items-center lg:grid lg:grid-cols-[1fr_1fr]  ">
			<Card class="" light>
				The Holy Roman Empire was an idealized re-establishment of the realm of <strong
					>Charlemagne</strong
				>, the Frankish ruler whose territories corresponded roughly to those of modern France and
				Germany. In the year 800, Protestantism the office of the pope; succession or line of popes;
				the system of government of the Roman Catholic Church of which the pope is the supreme head
				Charlemagne came to the aid of Pope Leo III, who had run afoul of the nobility in Rome. He
				convened a council in Rome that affirmed Leo's <Tooltip
					def="Papacy: The office of the pope; succession or line of popes; the system of government of the Roman Catholic Church of which the pope is the supreme head"
					>papacy</Tooltip
				> on December 1. In return Leo crowned Charlemagne “Emperor of the Romans” in Old St. Peter's
				Basilica in a Mass on Christmas Day, reserving for Charlemagne (now Charles I) the role of defender
				of Rome and of the Church.
			</Card>
			<BioCard
				name="Charlemagne"
				src="../../character-cards/Charlemagne.jpg"
				citation="https://upload.wikimedia.org/wikipedia/commons/b/b5/Aachen_Domschatz_Bueste1.jpg"
				years="742-814"
				class="flex h-full w-full items-center justify-center "
				light
			>
				<p>Became King of the Lombards in July 774, and King of the Franks in October 768</p>
				<p>
					Crowned first Holy Roman Emperor on December 25, 800 by Pope Leo III in Old St. Peter's
					Basilica in Rome.
				</p>
				<p>Called the "Father of Europe" for uniting most of Western Europe</p>
			</BioCard>
		</div>
	</Background>
	<Background
		src="../../backgrounds/holy-roman-empire.jpg"
		scrim="maroon"
		opacity1="9"
		opacity2="9"
		class="flex flex-col bg-center	"
	>
		<div class="flex flex-col-reverse items-center lg:grid lg:grid-cols-[1fr_1fr]">
			<Card class="">
				After Charlemagne's death, disputes over power among his grandsons led to the precipitous
				decline of the dynasty. For nearly a century the title went unclaimed, but was revived in
				962 when <strong>Otto I</strong>, the elected King of the Saxons, was once again crowned
				Emperor of the Romans by the Pope in Rome. Otto's coronation forged a centuries-long special
				relationship between the Papacy, the memory of Ancient Rome, and the consolidated Germanic
				realm–a “Holy Roman Empire.”
			</Card>
			<BioCard
				name="Otto I"
				src="../../character-cards/Otto-card.jpg"
				years="912-973"
				color="white"
				class="flex h-full w-full items-center justify-center  "
				citation="https://upload.wikimedia.org/wikipedia/commons/9/99/Bas-c%C3%B4t%C3%A9_nord,_baie_VI_Otto_Rex_(dernier_tiers_XIIe).jpg"
			>
				<p>Called the "Father of Europe" for uniting most of Western Europe</p>
				<p>Crowned Holy Roman Emperor in 962 due to his aid of Pope John XXII two years prior</p>
				<p>Began the tradition of imperial coronations for Germanic rulers</p>
			</BioCard>
		</div>
	</Background>
	<Background
		src="../../backgrounds/damask_albedo-01.svg"
		scrim="light"
		opacity1="9"
		opacity2="7"
		class="flex flex-col"
	>
		<div class="flex flex-col-reverse items-center lg:grid lg:grid-cols-[1fr_1fr]">
			<div>
				<Card class="" light>
					<h2 class="m-12 text-center text-4xl text-black md:text-6xl ">
						<strong>Dual Coronations</strong>
					</h2>
					<div class="mb-5">
						Symbolically and politically, this relationship was marked in two coronations. The first
						was a royal coronation as King of the Germans by the <Tooltip
							def="Ducal: The office of the pope; succession or line of popes; the system of government of the Roman Catholic Church of which the pope is the supreme head"
							>ducal</Tooltip
						> electors in Charlemagne’s old capital, Aachen. The second was an imperial, or papal, coronation
						as Emperor of the Romans in Rome under the pope’s hand. From 962 until 1530, in principle
						each ruler of the Holy Roman Empire was to receive both a royal and an imperial coronation.
					</div>
					<div class="flex flex-col items-center">
						<div>
							During these five and a half centuries, these dual coronations served to ease two
							important political tensions: the role of the German electors in choosing their leader
							versus traditions of <Tooltip
								def="Primogeniture: An exclusive right of inheritance belonging to the eldest son"
								>primogeniture</Tooltip
							> and the role of papal, or sacred, power versus imperial, or secular, power. While every
							Christian coronation ceremony aims to affirm the new monarch’s power as God-given, the
							particular tension between these political elements in the German realm made such an affirmation
							of paramount importance. These twin ceremonies were thus charged with meaning, elevating
							the emperor as the primary defender of the Christian faith, just as Charlemagne had been.
						</div>
						<ChapterButton
							numeral="II"
							chapter="Who Was Charles V?"
							path="2"
							class="my-10 justify-center"
						/>
					</div>
				</Card>
			</div>
			<ImageCardColor
				class="flex h-full items-center justify-center"
				src="../../content/dualcoronations.png"
				light
				citation=""
			/>
		</div>
		<!-- <div class="col-span-2 mx-auto">
			<ChapterButton numeral="II" chapter="Who Was Charles V?" path="2" />
		</div> -->
	</Background>
	<Footer />
</body>

<style>
	:root {
		--app-height: 100%;
	}
	/* body {
		padding: 0;
		margin: 0;
		overflow: hidden;
		width: 100vw;
		height: 100vh;
		height: var(--app-height);
	} */
</style>
