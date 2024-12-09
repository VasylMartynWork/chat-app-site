<script setup>
import Messages from '@/components/Chat/Messages.vue';
import UserList from '@/components/Chat/RoomList.vue';
import WebSocketSingleton from '../utility/WebSocketSingleton';
import { ref } from 'vue';

const wss = WebSocketSingleton("ws://localhost:3003").getInstance();

const roomList = ref([]);

wss.onmessage = (ev) => {
	const data = JSON.parse(ev.data);

	if (data.type === "sendRooms") {
		roomList.value = data.rooms;
	}
};

</script>

<template>
	<div class="flex">
		<UserList :rooms="roomList" />
		<Messages/>
	</div>
</template>