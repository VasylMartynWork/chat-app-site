<script setup>
import { useRouter } from 'vue-router';

import { useToast } from 'primevue/usetoast';

import SignIn from '../components/SignIn.vue';
import WebSocketSingleton from '../utility/WebSocketSingleton';

const router = useRouter();
const toast = useToast();

async function signIn(userData) {
	const res = await fetch("http://localhost:3001/api/v1/auth/sign-in", {
		headers: {
			"Content-Type": "application/json"
		},
		method: "POST",
		body: JSON.stringify(userData),
		credentials: 'include'
	});

	if (res.status === 500 || res.status === 401) {
		toast.add({ severity: 'error', summary: 'Error', detail: 'Invalid username or password', life: 4000 });
		return;
	}

	const resBody = await res.json();

	localStorage.setItem('userId', resBody.userId);

	toast.add({ severity: "success", summary: 'Success', detail: 'Authorization is succesful', life: 4000 });

	setTimeout(() => {
		router.push('/');
	}, 4000);
}
</script>

<template>
	<div class="flex flex-col items-center justify-center h-screen bg-white">
		<SignIn @user-authorizing="signIn" />
	</div>
</template>