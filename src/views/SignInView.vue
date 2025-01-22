<script setup>
import SignIn from '@/components/SignIn.vue';
import { useRouter } from 'vue-router';
import WebSocketSingleton from '../utility/WebSocketSingleton';
const router = useRouter();

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
		alert('При авторизації виникла помилка');
		return;
	}

	const resBody = await res.json();

	localStorage.setItem('userId', resBody.userId);

	WebSocketSingleton("ws://localhost:3003").getInstance();
	
	alert('Успішна авторизація!');

	router.push('/');

	// const wss = WebSocketSingleton("ws://localhost:3003");

	// wss.getInstance().send(userData);

	// wss.getInstance().onmessage((ev) => {
	// 	const data = JSON.parse(ev);

	// 	if (data.type === "authorize") {
	// 		if (data.valid === false) {
	// 			wss.closeInstance();
	// 			alert('Помилка! Логін або пароль невірні');
	// 		}
	// 		else if (data.valid === true){
	// 			router.push("/chat");
	// 		}
	// 	}
	// })
}
</script>

<template>
	<div class="flex flex-col items-center justify-center h-screen">
		<SignIn @user-authorizing="signIn" />
	</div>
</template>