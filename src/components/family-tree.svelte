<script>
	import TreeCard from './tree-card.svelte';

</script>

<div class="md:w-2/3 bg-no-repeat bg-center bg-contain" style:background-image="url(..//family-tree/tree.svg">
    <div class="grid grid-cols-4 gap-4 items-end">
        <TreeCard src="..//family-tree/maximilian.jpg" name="Emperor Maximilian I" years="1459-1519" />
        <TreeCard src="..//family-tree/mary.jpg" name="Duchess Mary of Burgundy" years="1457-1482" />
        <TreeCard src="..//family-tree/isabella.jpg" name="Queen Isabella I of Castile" years="1451-1504" />
        <TreeCard src="..//family-tree/ferdinand.jpg" name="King Ferdinand II of Aragon" years="1452-1516" />
    </div>
    <div class="grid grid-cols-2 gap-4 place-items-center">
        <div class="h-[2px] bg-white bg-opacity-60 w-full"/>
        <div class="h-[2px] bg-white bg-opacity-60 w-full"/>
    </div>
    <div class="grid grid-cols-2 gap-4 place-items-center">
        <TreeCard src="..//family-tree/philip.jpg" name="Philip the Handsome" years="1478-1506"  topLine/>
        <TreeCard src="..//family-tree/joanna.jpg" name="Joanna of Castile" years="1479-1555" topLine />
    </div>
    <div class="h-[2px] bg-white bg-opacity-60 w-5/6 mx-auto"/>
    <div class="flex justify-center pb-4 md:mb-24">
        <TreeCard src="..//family-tree/charlesv.jpg" name="Charles V" years="1500-1558" noLine topLine/>
    </div>
</div>

<style>

</style>