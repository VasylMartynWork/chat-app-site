<script setup>
import { ref } from 'vue';

import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const roomName = ref("");

const props = defineProps([
	"isOpenCreatePublicRoomModal"
]);

const emit = defineEmits([
	"create-public-room",
	"close-create-public-room-modal"
]);

function createPublicRoom() {
	emit("create-public-room", roomName.value);
	roomName.value = "";
}

function closeCreatePublicRoomModal() {
	emit("close-create-public-room-modal");
}
</script>

<template>
	<Dialog v-model:visible="props.isOpenCreatePublicRoomModal" modal :closable="false" header="Create public room">
		<div class="flex items-center gap-4 mb-4">
			<label for="roomname" class="font-semibold w-24">Room name</label>
			<InputText v-model="roomName" id="roomname" class="flex-auto" autocomplete="off" />
		</div>
		<div class="flex justify-end gap-2">
			<Button type="button" label="Cancel" severity="secondary" @click="closeCreatePublicRoomModal"></Button>
			<Button type="button" label="Save" @click="createPublicRoom"></Button>
		</div>
	</Dialog>
</template>