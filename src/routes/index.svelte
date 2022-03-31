<script>
	import Transition from './../components/transition.svelte';
	import Card from './../components/card.svelte';
	import ChapterButton from './../components/chapter-button.svelte';
	import SectionHero from './../components/section-hero.svelte';
</script>

<Transition>
	<div
		class="flex min-h-screen flex-col items-center bg-cover bg-center p-4 pt-0 md:p-16 2xl:p-32 2xl:px-64"
		style="background-image: linear-gradient(rgba(255, 255, 255, 0.7) 60%, rgba(255, 255, 255, 0.6)), url('..//backgrounds/index.png')"
	>
		<img src="..//logos/charlesvr-duotone.png" alt="Charles VR" class="mt-48 mb-4 w-4/6" />
		<div class="mb-16 text-center text-4xl leading-normal text-[#900006]">
			A Virtual Reality Recreation of the
			<br />
			Imperial Coronation of Holy Roman Emperor Charles V
		</div>
		<Card light class="2xl:max-w-[50%]">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, totam velit? Est labore
			aliquid deserunt alias assumenda sapiente eligendi quae. Voluptatum, cupiditate modi possimus
			iusto nisi eos voluptas distinctio itaque. Lorem ipsum dolor sit amet consectetur adipisicing
			elit. Consequuntur, totam velit? Est labore aliquid deserunt alias assumenda sapiente eligendi
			quae. Voluptatum, cupiditate modi possimus iusto nisi eos voluptas distinctio itaque.
		</Card>
		<ChapterButton numeral="II" chapter="Historical Background" path="2" light />
	</div>
</Transition>

<style>
</style>
