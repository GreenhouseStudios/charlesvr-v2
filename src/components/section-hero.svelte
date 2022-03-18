<script>
    export let title;
    export let bg;
    export let noScrim = false;
    export let opacity = "50";

    let background;
    noScrim ? background = `url("${bg}")` : background = `linear-gradient(rgba(0, 0, 0, 0.${opacity}), rgba(0, 0, 0, 0.${opacity})),url("${bg}")`;
</script>

<div class="h-[95vh] md:h-screen grid place-items-center bg-cover bg-top" style:background-image="{background}">
    <div class="text-white text-6xl md:text-7xl px-4 text-center">
        {title}
    </div>
</div>

<style>

</style>