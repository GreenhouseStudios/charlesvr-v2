<script>
	import Transition from './../components/transition.svelte';
	import BioCard from './../components/bio-card.svelte';
	import ChapterButton from './../components/chapter-button.svelte';
	import Background from './../components/background.svelte';
	import Card from './../components/card.svelte';
	import SectionHero from './../components/section-hero.svelte';

</script>
<Transition>

<SectionHero title="Historical Background" bg="../../static/backgrounds/earlyflag.jpg"/>
<Background parallax src="../../static/backgrounds/Bologna_Italy_San_Petronio_from_Asinelli.jpg" classes="flex flex-col space-y-24 p-4 md:p-16 2xl:p-32 2xl:px-64">
    <Card classes="md:w-1/2">
        <div class="first-letter:text-[300%] w-full">
            On February 24, 1530, Pope Clement VII crowned Charles Habsburg Holy Roman Emperor in the Basilica San Petronio in Bologna. It was the last time a pope would crown an emperor, ending a 700-year-old tradition that began with Charlemagne's coronation on Christmas Day in 800.
        </div>
    </Card>
    <Card classes="md:w-1/2">
        Amid increasing power of the Ottoman Empire to the east, the subjugation of the New World to the west, and the rise of Protestantism within Europe itself, the political situation was delicate. Charles could not be crowned in Rome, because Protestant German mercenaries he employed in a conflict with France had sacked the Eternal City three years earlier.
    </Card>
    <Card classes="md:w-1/2">
        This context informed the planning and execution of the ceremony, which had to conform to tradition but also reflect the political realities of the day. For the newly-crowned Charles V and Pope Clement, the coronation signified a continuation of an idealized, united, Christian European state that had its origins in the Roman Empire itself.
    </Card>
</Background>
<Background src="../../static/backgrounds/holy-roman-empire.jpg" scrim="light" opacity="9" classes="flex flex-col space-y-24 p-4 md:p-16 2xl:p-32 2xl:px-64">
    <div class="grid 2xl:grid-cols-[1fr_2fr] gap-24">
        <Card classes="" light>
            The Holy Roman Empire was an idealized re-establishment of the realm of Charlemagne, the Frankish ruler whose territories corresponded roughly to those of modern France and Germany. In the year 800, Charlemagne came to the aid of Pope Leo III, who had run afoul of the nobility in Rome. He convened a council in Rome that affirmed Leo's papacy on December 1. In return Leo crowned Charlemagne “Emperor of the Romans” in Old St. Peter's Basilica in a Mass on Christmas Day, reserving for Charlemagne (now Charles I) the role of defender of Rome and of the Church.
        </Card>
        <BioCard name="Charlemagne" src="../../static/character-cards/Charlemagne.jpg" years="742-814" classes="">
            <p>Became King of the Lombards in July 774, and King of the Franks in October 768</p>
            <p>Crowned first Holy Roman Emperor on December 25, 800 by Pope Leo III in Old St. Peter's Basilica in Rome.</p>
            <p>Called the "Father of Europe" for uniting most of Western Europe</p>
        </BioCard>
    </div>
    <div class="grid 2xl:grid-cols-[2fr_1fr] gap-24">
        <Card light classes="">
        After Charlemagne's death, disputes over power among his grandsons led to the precipitous decline of the dynasty. For nearly a century the title went unclaimed, but was revived in 962 when Otto I, the elected King of the Saxons, was once again crowned Emperor of the Romans by the Pope in Rome. Otto's coronation forged a centuries-long special relationship between the Papacy, the memory of Ancient Rome, and the consolidated Germanic realm–a “Holy Roman Empire.”
    </Card>
    <BioCard name="Otto I" src="../../static/character-cards/Otto.jpg" years="912-973" classes="2xl:order-first" >
        <p>Called the "Father of Europe" for uniting most of Western Europe</p>
        <p>Crowned Holy Roman Emperor in 962 due to his aid of Pope John XXII two years prior</p>
        <p>Began the tradition of imperial coronations for Germanic rulers</p>
    </BioCard>
    </div>
</Background>
<Background src="../../static/backgrounds/damask_albedo-01.svg" cover={false} classes="flex flex-col md:grid md:grid-cols-2 md:gap-24 auto-rows-max p-4 md:p-16 2xl:p-32 2xl:px-64">
    <div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl text-white text-center underline underline-offset-8 decoration-gold-500 w-full mb-12">
            Dual Coronations
        </h2>
        <Card classes="mb-4 md:mb-12">
            Symbolically and politically, this relationship was marked in two coronations. The first was a royal coronation as King of the Germans by the ducal electors in Charlemagne’s old capital, Aachen. The second was an imperial, or papal, coronation as Emperor of the Romans in Rome under the pope’s hand. From 962 until 1530, in principle each ruler of the Holy Roman Empire was to receive both a royal and an imperial coronation.
        </Card> 
        <Card classes="-mb-12"> 
            During these five and a half centuries, these dual coronations served to ease two important political tensions: the role of the German electors in choosing their leader versus traditions of primogeniture and the role of papal, or sacred, power versus imperial, or secular, power. While every Christian coronation ceremony aims to affirm the new monarch’s power as God-given, the particular tension between these political elements in the German realm made such an affirmation of paramount importance. These twin ceremonies were thus charged with meaning, elevating the emperor as the primary defender of the Christian faith, just as Charlemagne had been.
        </Card>
    </div>
    <img src="../../static/content/dualcoronations.png" class="rounded-md shadow-lg" alt="" loading="lazy">
    <div class="col-span-2 mx-auto">
        <ChapterButton numeral="III" chapter="Historical Background" path="3" />
    </div>
</Background>
</Transition>

<style>
    
</style>