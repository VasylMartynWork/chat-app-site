<script setup>
import Messages from '@/components/Chat/Messages.vue';
import RoomList from '@/components/Chat/RoomList.vue';
import WebSocketSingleton from '../utility/WebSocketSingleton';
import { ref } from 'vue';

const wss = WebSocketSingleton("ws://localhost:3003").getInstance();

const roomList = ref([]);

const messages = ref([]);

const room = ref({
	name: "",
	members: null
})

wss.onmessage = (ev) => {
	const data = JSON.parse(ev.data);

	if (data.type === "sendRooms") {
		roomList.value = data.rooms;
	}

	if (data.type === "roomJoined") {
		messages.value.push("New user was joined to the room");
	}
};

function selectRoom(selectedRoom) {
	room.value.name = selectedRoom;

	wss.send(JSON.stringify({
		type: "joinRoom",
		room: selectedRoom
	}));
}

</script>

<template>
	<div class="flex h-screen w-full">
		<RoomList :rooms="roomList" @room-selected="selectRoom" />
		<div v-if="room.name" class="flex flex-col justify-between pt-4 w-full">
			<div class="w-full border-b-4 h-10">
				<h2 class="text-2xl font-bold pl-5">{{ room.name }}</h2>
				<p>{{ room.members }}</p>
			</div>
			<Messages :messages="messages" />
			<div class="flex justify-center">
				<input type="text" class="w-1/2 border-2 border-gray-300 rounded-lg p-2" />
				<button class="bg-blue-500 text-white p-2 rounded-lg">Send</button>
			</div>
		</div>
	</div>
</template>