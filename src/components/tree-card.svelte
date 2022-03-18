<script>
    export let src;
    export let alt = '';
    export let name;
    export let years;
    export let noLine = false;
    export let topLine = false;
</script>

<div class="flex flex-col items-center">
    {#if topLine}
         <div class="w-[2px] h-5 bg-white bg-opacity-60"></div>
    {/if}
    <div class="max-w-[128px] shadow-lg">
        <img {src} {alt} class="rounded-t">
        <div class="bg-black rounded-b px-2">
            <div class="text-white text-center py-2">
                <div class="leading-tight tracking-wide">
                    {name}
                </div>
                <em>{years}</em>
            </div>
        </div>
    </div>
    {#if !noLine}
         <div class="w-[2px] h-5 bg-white bg-opacity-60"></div>
    {/if}
</div>

<style>

</style>