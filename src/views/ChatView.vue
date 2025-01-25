<script setup>
import Messages from '@/components/Chat/Messages.vue';
import RoomList from '@/components/Chat/RoomList.vue';
import CreateRoomModal from '@/components/Chat/CreateRoomModal.vue';
import WebSocketSingleton from '../utility/WebSocketSingleton';
import { ref } from 'vue';

const wss = WebSocketSingleton("ws://localhost:3003").getInstance();

const roomList = ref([]);

const messages = ref([]);

const room = ref("");

const message = ref("");

const isOpenCreatePublicRoomModal = ref(false);

wss.onmessage = (ev) => {
	const data = JSON.parse(ev.data);

	if (data.type === "sendRooms") {
		roomList.value = data.rooms;
	}

	if (data.type === "userJoined") {
		messages.value.push(`${data.user} was joined to the room`);
	}

	if (data.type === "messageSent") {
		messages.value.push(`${data.user}: ${data.message}`);
	}

	if (data.type === "roomCreated") {
		roomList.value.unshift(data.roomName);
	}
};

function selectRoom(selectedRoom) {
	room.value = selectedRoom;

	wss.send(JSON.stringify({
		type: "joinRoom",
		room: selectedRoom,
	}));
}

function sendMessage() {
	if (message.value.trim().length === 0) {
		return;
	}

	wss.send(JSON.stringify({
		type: "sendMessage",
		room: room.value,
		message: message.value,
	}))
	message.value = "";
}

function openCloseCreatePublicRoomModal() {
	isOpenCreatePublicRoomModal.value = !isOpenCreatePublicRoomModal.value;
}

function createPublicRoom(roomName) {
	if (roomName.trim().length === 0) {
		return;
	}

	wss.send(JSON.stringify({
		type: "createRoom",
		roomName,
	}))

	openCloseCreatePublicRoomModal();
}

</script>

<template>
	<div class="flex h-screen w-full bg-white">
		<div class="flex flex-col p-4 items-center justify-between w-1/6 h-full border-r-4">
			<RoomList :rooms="roomList" @room-selected="selectRoom" />
			<button @click="openCloseCreatePublicRoomModal" class="w-full bg-slate-600 p-2 text-white rounded-md">Create
				public
				room</button>
		</div>

		<div v-if="room" class="flex flex-col h-full pt-4 w-full">
			<div class="w-full border-b-4 h-10">
				<h2 class="text-2xl font-bold pl-5 text-black">{{ room }}</h2>
			</div>
			<div class="flex-grow overflow-y-auto">
				<Messages :messages="messages" />
			</div>
			<div class="flex justify-center p-4 border-t-4">
				<input v-model="message" type="text"
					class="w-1/2 border-y-2 border-l-2 border-gray-300 outline-0 bg-white rounded-s-lg p-2 text-black" />
				<button @click="sendMessage" class="bg-blue-500 text-white p-2 rounded-e-lg">Send</button>
			</div>
		</div>

		<CreateRoomModal :isOpenCreatePublicRoomModal="isOpenCreatePublicRoomModal"
			@create-public-room="createPublicRoom" @close-create-public-room-modal="openCloseCreatePublicRoomModal" />
	</div>
</template>