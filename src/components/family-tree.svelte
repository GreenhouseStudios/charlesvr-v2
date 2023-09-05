<script>
	import TreeCard from './tree-card.svelte';
</script>

<div
	class="bg-contain bg-center bg-no-repeat md:w-2/3"
	style:background-image="url(..//family-tree/tree.svg"
>
	<div class="grid grid-cols-4 items-end gap-4">
		<div class="max-w-[150px]">
		<TreeCard src="..//family-tree/maximilian.jpg" name="Emperor Maximilian I" years="1459-1519" citation="https://img-s2.onedio.com/id-5e4fe6e086fd0fee22d39599/rev-0/w-635/f-jpg-webp/s-bb9674dced32ee827d9f966d159dd9032dc11cd4.jpg" />
	</div>
	<div class="max-w-[150px]">
		<TreeCard src="..//family-tree/mary.jpg" name="Duchess Mary of Burgundy" years="1457-1482" citation="" />
	</div>
	<div class="max-w-[150px]">
		<TreeCard
			src="..//family-tree/isabella.jpg"
			name="Queen Isabella I of Castile"
			years="1451-1504"
			citation="https://s3.amazonaws.com/headstuffuploads/2017/03/12125647/isabella-banner.jpg"
		/>
	</div>
	<div class="max-w-[150px]">
		<TreeCard
			src="..//family-tree/ferdinand.jpg"
			name="King Ferdinand II of Aragon"
			years="1452-1516"
			citation=""
		/>
	</div>
	</div>
	<div class="grid grid-cols-2 place-items-center gap-4">
		<div class="h-[3px] w-full bg-[#fec755] " />
		<div class="h-[3px] w-full bg-[#fec755] " />
	</div>
	<div class="grid grid-cols-2 place-items-center gap-4 border-[#fec755]">
		<div class="max-w-[200px]">
		<TreeCard
			src="..//family-tree/philip.jpg"
			name="Philip the Handsome"
			years="1478-1506"
			topLine
			citation=""
		/>
	</div>
	<div class="max-w-[200px]">
		<TreeCard src="..//family-tree/joanna.jpg" name="Joanna of Castile" years="1479-1555" topLine citation="https://static.femina.hu/kapcsolat/honapokig_ferje_holttestevel_aludt_az_ozvegy/orult_johanna.jpg" />
	</div>
	</div>
	<div class="mx-auto h-[3px] w-5/6 bg-[#fec755] " />
	<div class="flex justify-center pb-4 md:mb-24">
		<div class="max-w-[250px]">
		<TreeCard
			src="..//family-tree/charlesv.jpg"
			name="Charles V"
			years="1500-1558"
			noLine
			topLine
			citation="https://www.habsburger.net/en/persons/habsburg-emperor/charles-v#o-6347"
		/>
	</div>
	</div>
</div>

<style>
</style>
