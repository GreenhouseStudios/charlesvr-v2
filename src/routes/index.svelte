<script>
	import Transition from './../components/transition.svelte';
    import Card from './../components/card.svelte';
	import ChapterButton from './../components/chapter-button.svelte';
	import SectionHero from './../components/section-hero.svelte';

</script>

<Transition>
    
    <div class="min-h-screen flex items-center flex-col bg-cover bg-center pt-0 p-4 md:p-16 2xl:p-32 2xl:px-64" style="background-image: linear-gradient(rgba(255, 255, 255, 0.7) 60%, rgba(255, 255, 255, 0.6)), url('../../static/backgrounds/index.png')">
        <img src="../../static/logos/charlesvr-duotone.png" alt="Charles VR" class="w-4/6 mt-48 mb-4">
        <div class="text-4xl text-[#900006] text-center leading-normal mb-16">
        A Virtual Reality Recreation of the
        <br>
        Imperial Coronation of Holy Roman Emperor Charles V
    </div>
    <Card light>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, totam velit? Est labore aliquid deserunt alias assumenda sapiente eligendi quae. Voluptatum, cupiditate modi possimus iusto nisi eos voluptas distinctio itaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, totam velit? Est labore aliquid deserunt alias assumenda sapiente eligendi quae. Voluptatum, cupiditate modi possimus iusto nisi eos voluptas distinctio itaque.
    </Card>
    <ChapterButton numeral="II" chapter="Historical Background" path="2" light/>
</div>

</Transition>

<style>

</style>