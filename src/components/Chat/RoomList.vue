<script setup>
const props = defineProps([
	"rooms",
]);

</script>

<template>
	<div class="flex flex-col items-center gap-2 p-2 w-1/6 h-full border-r-4">
		<h2 class="text-2xl font-bold">Rooms</h2>
		<ul class="flex flex-col gap-2 w-full">
			<li v-for="room in props.rooms">
				<button class="transition duration-500 hover:bg-gray-300 py-2 w-full ">{{ room }}</button>
			</li>
		</ul>
	</div>
</template>