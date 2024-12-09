<script setup>
import Messages from '@/components/Chat/Messages.vue';
import UserList from '@/components/Chat/RoomList.vue';
import WebSocketSingleton from '../utility/WebSocketSingleton';
import { ref } from 'vue';

const wss = WebSocketSingleton("ws://localhost:3003").getInstance();

const roomList = ref([]);

const roomName = ref("");

const roomMembers = ref(null);

wss.onmessage = (ev) => {
	const data = JSON.parse(ev.data);

	if (data.type === "sendRooms") {
		roomList.value = data.rooms;
	}
};

</script>

<template>
	<div class="flex h-screen w-full">
		<UserList :rooms="roomList" />
		<div class="flex flex-col pt-4 w-full">
			<div class="w-full border-b-4 h-10">
				<h2 class="text-2xl font-bold pl-5">{{ roomName }}</h2>
				<p>{{ roomMembers }}</p>
			</div>
			<Messages />
		</div>
	</div>
</template>