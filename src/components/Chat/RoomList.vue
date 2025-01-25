<script setup>
const props = defineProps([
	"rooms",
]);

const emit = defineEmits([
	"room-selected",
]);

function selectRoom(room) {
	emit("room-selected", room);
}

</script>

<template>
	<div class="flex flex-col items-center gap-2 w-full h-full">
		<h2 class="text-2xl font-bold text-gray-800">Rooms</h2>
		<ul class="flex flex-col gap-2 w-full">
			<li v-for="room in props.rooms">
				<button class="transition duration-500 hover:bg-gray-300 py-2 w-full text-gray-600 "
					@click="selectRoom(room)">{{ room }}</button>
			</li>
		</ul>
	</div>
</template>