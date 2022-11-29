<script>
export let src;
export let alt = '';
export let citation;
export let classes = '';
export { classes as class };

</script>

<div class={'flex flex-col justify-center items-center' + classes }><div>
    <img {src} {alt} class="rounded-md " />
    <p class=" cursor-pointer text-white break-words underline text-center underline-offset-2 hover:text-[#fec755] m-2"><a href="{citation}">Source</a></p></div>
</div>
