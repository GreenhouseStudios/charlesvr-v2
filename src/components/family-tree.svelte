<script>
	import TreeCard from './tree-card.svelte';
</script>

<div
	class="bg-contain bg-center bg-no-repeat md:w-2/3"
	style:background-image="url(..//family-tree/tree.svg"
>
	<div class="grid grid-cols-4 items-end gap-4">
		<div class="max-w-[150px]">
		<TreeCard src="..//family-tree/maximilian.jpg" name="Emperor Maximilian I" years="1459-1519" />
	</div>
	<div class="max-w-[150px]">
		<TreeCard src="..//family-tree/mary.jpg" name="Duchess Mary of Burgundy" years="1457-1482" />
	</div>
	<div class="max-w-[150px]">
		<TreeCard
			src="..//family-tree/isabella.jpg"
			name="Queen Isabella I of Castile"
			years="1451-1504"
		/>
	</div>
	<div class="max-w-[150px]">
		<TreeCard
			src="..//family-tree/ferdinand.jpg"
			name="King Ferdinand II of Aragon"
			years="1452-1516"
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
		/>
	</div>
	<div class="max-w-[200px]">
		<TreeCard src="..//family-tree/joanna.jpg" name="Joanna of Castile" years="1479-1555" topLine />
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
		/>
	</div>
	</div>
</div>

<style>
</style>
