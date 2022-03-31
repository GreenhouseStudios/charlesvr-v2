<script>
	import Transition from './../components/transition.svelte';
	import FamilyTree from './../components/family-tree.svelte';
	import BioCard from './../components/bio-card.svelte';
	import ChapterButton from './../components/chapter-button.svelte';
	import Background from './../components/background.svelte';
	import Card from './../components/card.svelte';
	import SectionHero from './../components/section-hero.svelte';
</script>

<Transition>
	<SectionHero title="Who was Charles V?" bg="..//backgrounds/charles.jpg" />
	<Background
		parallax
		src="..//backgrounds/fabric.jpg"
		class="flex flex-col items-center p-4 md:p-16 2xl:p-32 2xl:px-64"
	>
		<Card class="mb-24 w-full">
			<div class="w-full first-letter:text-[300%]">
				Charles Habsburg was born in Ghent, a region now located in Belgium. His four grandparents,
				Emperor Maximilian I of the Holy Roman Empire, Duchess Mary of Burgundy, King Ferdinand II
				of Aragon, and Queen Isabella I of Castile, carefully planned a dynastic marriage that would
				result in one extremely profitable heir. Charles was the eldest son of Philip the Handsome
				and Joanna of Castile, and he therefore inherited ample land throughout Europe. From Duchess
				Mary of Burgundy, his maternal grandmother, he acquired the remaining land of the Duchy of
				Burgundy in southern Europe, Flanders in the north (presently known as Belgium and the
				Netherlands), and some holdings in central Europe.
			</div>
		</Card>
		<FamilyTree />
		<Card class="mb-24">
			King Ferdinand II of Aragon, his maternal grandfather, left him most of the Iberian Peninsula,
			therefore making him King Carlos I of Spain. Charles also inherited eastern Spain and Aragon’s
			colonies in the Mediterranean. From Queen Isabella I of Castile, his paternal grandmother,
			Charles acquired central Spain and Castile’s American colonies. Emperor Maximilian I of the
			Holy Roman Empire, his paternal grandfather, left him the Austrian crownlands.
		</Card>
	</Background>
	<Background
		src="..//backgrounds/battle-of-pavia.jpg"
		scrim="light"
		class="flex flex-col p-4 md:p-16 2xl:p-32 2xl:px-64"
	>
		<div class="grid gap-24 2xl:grid-cols-[3fr_4fr]">
			<Card class="mb-4 md:mb-24" light>
				Through this formidable personal inheritance and a combination of bribes and threats,
				Charles was able to position himself as the electors’ choice for successor to his late
				grandfather, Holy Roman Emperor Maximilian I. He was selected over other possible candidates
				such as King Henry VIII of England, King Francis I of France, and Frederick the Wise, the
				duke of Saxony. Following his royal coronation in Aachen in 1520, he did what many of these
				other European rulers feared he would: he joined his grandfather’s Holy Roman Empire with
				his mother’s kingdoms of Spain and the Netherlands.
			</Card>
			<BioCard
				name="King Francis I"
				src="..//character-cards/Francis I.jpg"
				years="1494-1547"
				class="mb-4 md:mb-24"
			>
				<p>Crowned King of France in January 1515</p>
				<p>
					Made France the first country in Europe to establish formal relations with the Ottoman
					Empire
				</p>
				<p>Upheld a rivalry with Charles V until relucantly signing the Truce of Nice in 1538</p>
			</BioCard>
		</div>
		<Card light class="mb-4 md:mb-24">
			Francis and Charles became bitter rivals. Pope Clement VII sided with France. Francis fared
			especially badly in the 1525 Battle of Pavia, where he was roundly defeated and taken
			prisoner. Charles, however, lacked the funds to pay his victorious, mostly Lutheran, army. In
			the face of poverty, Lutheran hostility to the Papacy, and Clement’s alliance with France, the
			army marched on Rome.
		</Card>
	</Background>
	<Background
		src="..//backgrounds/sackofrome.jpg"
		parallax
		class="flex flex-col items-center p-4 md:p-16 2xl:p-32 2xl:px-64"
	>
		<Card class="mb-24">
			The sack was brutal, and in the context of the history of the Holy Roman Empire, a shocking
			event. Instead of defending Rome and its Church, the would-be Holy Roman Emperor besieged it
			and effectively imprisoned the pope. In the aftermath, Charles heard from counselors who
			denounced the sack and from others who supported it, but he seems to have had difficulty
			reconciling the accounts of its brutality with political justifications.
		</Card>
		<Card>
			In the end, he wanted all memory of the event erased and to put the episode behind him.
			Clement also felt prudent to make his peace with Charles. This, along with the political
			unrest associated with the beginning of the Protestant Reformation, was the context in which
			choices about the setting and music for the imperial coronation were made.
		</Card>
		<ChapterButton numeral="IV" chapter="A Bolognese Coronation" path="4" />
	</Background>
</Transition>

<style>
</style>
