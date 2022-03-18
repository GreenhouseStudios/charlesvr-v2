<script>
	import Card from './card.svelte';
    export let numeral;
    export let chapter;
    export let path;
    export let light = false
</script>

<div class="mt-24 w-full sm:w-max">
    <Card {light}>
        <div class="flex justify-center w-full">
            Continue to next chapter:
        </div>
    </Card>
    
    <a id="button" class="group flex flex-col sm:flex-row items-center px-6 rounded-xl sm:gap-6 shadow-lg mt-4 transition-all duration-500 shadow-black/30" href={path}>
        <p class="text-gold-500 group-hover:text-gold-400 text-8xl pb-2 transition-colors duration-500">
            {numeral}
        </p>
        <p class="text-white text-3xl py-6">
            {chapter}
        </p>
    </a>
</div>


<style>

#button {
    background: linear-gradient(to left, #401221 50%, #54182c 50%);
    background-size: 200% 100%;
    background-position: right bottom;
}

#button:hover {
    background-position: left bottom;
}

</style>