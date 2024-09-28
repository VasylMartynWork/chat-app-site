<script setup>
import Messages from '@/components/Messages.vue';
import UserList from '@/components/UserList.vue';
import { ref } from 'vue';

const wss = WebSocketSingleton("ws://localhost:3003");

const userList = ref([]);

// wss.getInstance().send(userData);

wss.getInstance().onmessage((ev) => {
	const data = JSON.parse(ev);

	if (data.type === "sendUserList") {
		userList.value = data.users;
	}
})

</script>

<template>
	<div class="flex">
		<UserList />
		<Messages/>
	</div>
</template>