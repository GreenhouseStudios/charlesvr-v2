<script>
export let src;
export let alt = '';
export let citation;
import 'material-icons/iconfont/material-icons.css';
export let classes = '';
export { classes as class };

</script>

<div class={'flex flex-col justify-center items-center' + classes }>
    <img {src} {alt} class="rounded-md " />
    <span class="material-icons"><a href="{citation}">menu_book</a></span>
</div>

<style>
    .material-icons{
        color: #fec755;
        font-size: 36px;
        margin-bottom: 10px;
    }

    .material-icons:hover{
        color: white;
    }

    @media screen and (max-width: 768px){
        .material-icons{
        font-size: 24px;
    }  
    }
</style>