<script>
	export let source = ""
	import 'material-icons/iconfont/material-icons.css';
</script>

<div>
	<div class="flex items-center gap-5">
	<span class="material-symbols-outlined bg-white p-3 rounded-md">
		volume_up
		</span>
	<audio controls>
		<source src={source} type="audio/ogg">
		<source src="{source}" type="audio/mpeg">
	  Your browser does not support the audio element.
	  </audio>
</div>
</div>

<style>

audio {
border: 5px #F6C869 solid;
border-radius: 5px;
background-color: white;
box-shadow: 2px 2px 10px rgba(0, 0, 0, .25);
}

</style>
