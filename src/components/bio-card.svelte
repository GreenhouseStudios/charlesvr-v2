<script>
    export let src;
    export let alt = '';
    export let name;
    export let years;
    export let classes = '';
</script>

<div class={"bg-maroon bg-opacity-[.85] flex flex-col md:flex-row gap-2 h-min w-full p-4 rounded-md backdrop-blur-3xl shadow-lg " + classes}>
    <div class="basis-1/3 shrink">
        <img {src} {alt} class="object-scale-down rounded-md">
    </div>
    <div class="flex flex-col justify-center items-center grow basis-2/3 text-gold-400 text-center px-4 mt-4 mb-8 md:mt-8">
        <strong class="text-4xl lg:text-5xl">{name}</strong>
        <br>
        <em class="text-3xl lg:text-4xl mb-4 md:mb-8">{years}</em>
        <div class="text-2xl lg:text-3xl space-y-4 lg:space-y-8">
            <slot/>
        </div>
    </div>
</div>
<style>
    .bg-maroon > * {
        text-shadow: 2px 2px 8px rgba(0,0,0,.8);
    }
</style>