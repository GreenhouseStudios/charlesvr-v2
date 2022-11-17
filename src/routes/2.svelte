<script>
	import Transition from './../components/transition.svelte';
	import BioCard from './../components/bio-card.svelte';
	import ChapterButton from './../components/chapter-button.svelte';
	import Background from './../components/background.svelte';
	import Card from './../components/card.svelte';
	import SectionHero from './../components/section-hero.svelte';
	import ImageCard from './../components/image-card.svelte';
</script>

<Transition>
	<SectionHero title="The Coronation in Context" bg="..//backgrounds/earlyflag.jpg" scrim="gold" opacity="7" class="backdrop-brightness-50" />
	<Background
		parallax
		scrim="maroon"
		opacity="7"
		src="..//backgrounds/Bologna_Italy_San_Petronio_from_Asinelli.jpg"
		class="flex flex-col justify-center space-y-24 p-4 md:p-16 2xl:p-32 2xl:px-64">
		<Card class="my-12 flex justify-center">
			<div class="w-full ">
				On February 24, 1530, Pope Clement VII crowned Charles Habsburg Holy Roman Emperor in the
				Basilica San Petronio in Bologna. It was the last time a pope would crown an emperor, ending
				a 700-year-old tradition that began with Charlemagne's coronation on Christmas Day in 800.
				<br>
				<br>
				Amid increasing power of the Ottoman Empire to the east, the subjugation of the New World to
				the west, and the rise of Protestantism within Europe itself, the political situation was
				delicate. Charles could not be crowned in Rome, because Protestant German mercenaries he
				employed in a conflict with France had sacked the Eternal City three years earlier.
				<br>
				<br>
				This context informed the planning and execution of the ceremony, which had to conform to
				tradition but also reflect the political realities of the day. For the newly-crowned Charles
				V and Pope Clement, the coronation signified a continuation of an idealized, united,
				Christian European state that had its origins in the Roman Empire itself.
			</div>
		</Card>
	</Background>
	<Background
		src="..//backgrounds/holy-roman-empire.jpg"
		scrim="gold"
		opacity="8"
		class="flex flex-col space-y-24 p-4 md:p-16 2xl:p-32 2xl:px-64"
	>
		<div class="grid gap-12 xl:grid-cols-[1fr_1fr] items-center">
			<Card class=" " light>
				The Holy Roman Empire was an idealized re-establishment of the realm of Charlemagne, the
				Frankish ruler whose territories corresponded roughly to those of modern France and Germany.
				In the year 800, Protestantism the office of the pope; succession or line of popes; the system of government of the Roman Catholic Church of which the pope is the supreme head Charlemagne came to the aid of Pope Leo III, who had run afoul of the
				nobility in Rome. He convened a council in Rome that affirmed Leo's papacy on December 1. In
				return Leo crowned Charlemagne “Emperor of the Romans” in Old St. Peter's Basilica in a Mass
				on Christmas Day, reserving for Charlemagne (now Charles I) the role of defender of Rome and
				of the Church.
			</Card>
			<BioCard
				name="Charlemagne"
				src="..//character-cards/Charlemagne.jpg"
				citation="https://upload.wikimedia.org/wikipedia/commons/b/b5/Aachen_Domschatz_Bueste1.jpg"
				years="742-814"
				class="flex items-center"
			>
				<p>Became King of the Lombards in July 774, and King of the Franks in October 768</p>
				<p>
					Crowned first Holy Roman Emperor on December 25, 800 by Pope Leo III in Old St. Peter's
					Basilica in Rome.
				</p>
				<p>Called the "Father of Europe" for uniting most of Western Europe</p>
			</BioCard>
		</div>
		<div class="grid gap-24 xl:grid-cols-[1fr_1fr] items-center">
			<BioCard
				name="Otto I"
				src="..//character-cards/Otto.jpg"
				years="912-973"
				class="2xl:order-first flex items-center"
			>
				<p>Called the "Father of Europe" for uniting most of Western Europe</p>
				<p>Crowned Holy Roman Emperor in 962 due to his aid of Pope John XXII two years prior</p>
				<p>Began the tradition of imperial coronations for Germanic rulers</p>
			</BioCard>
			<Card light class="">
				After Charlemagne's death, disputes over power among his grandsons led to the precipitous
				decline of the dynasty. For nearly a century the title went unclaimed, but was revived in
				962 when Otto I, the elected King of the Saxons, was once again crowned Emperor of the
				Romans by the Pope in Rome. Otto's coronation forged a centuries-long special relationship
				between the Papacy, the memory of Ancient Rome, and the consolidated Germanic realm–a “Holy
				Roman Empire.”
			</Card>
		</div>
	</Background>
	<Background
		src="..//backgrounds/damask_albedo-01.svg"
		scrim="maroon"
		opacity="7"
		class="flex flex-col p-4 md:p-16 lg:grid lg:grid-cols-2 md:gap-24 "
	>
		<div>
			<h2
				class="mb-12 w-full text-center text-4xl text-white md:text-5xl lg:text-6xl"
			>
				Dual Coronations
			</h2>
			<Card class="mb-12" >
				Symbolically and politically, this relationship was marked in two coronations. The first was
				a royal coronation as King of the Germans by the ducal electors in Charlemagne’s old
				capital, Aachen. The second was an imperial, or papal, coronation as Emperor of the Romans
				in Rome under the pope’s hand. From 962 until 1530, in principle each ruler of the Holy
				Roman Empire was to receive both a royal and an imperial coronation.
			</Card>
			<Card class="mb-12">
				During these five and a half centuries, these dual coronations served to ease two important
				political tensions: the role of the German electors in choosing their leader versus
				traditions of primogeniture and the role of papal, or sacred, power versus imperial, or
				secular, power. While every Christian coronation ceremony aims to affirm the new monarch’s
				power as God-given, the particular tension between these political elements in the German
				realm made such an affirmation of paramount importance. These twin ceremonies were thus
				charged with meaning, elevating the emperor as the primary defender of the Christian faith,
				just as Charlemagne had been.
			</Card>
		</div>
		<div class="flex items-center">
			<ImageCard
			src="..//content/dualcoronations.png"
			citation=""
			/>
	</div>
		<div class="col-span-2 mx-auto">
			<ChapterButton numeral="III" chapter="Who Was Charles V?" path="3"/>
		</div>
	</Background>
</Transition>

<style>

</style>
