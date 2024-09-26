<script setup>
import Login from '@/components/Login.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

async function authorize(userData) {
	const res = await fetch("http://localhost:3001/api/v1/auth/login", {
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
		<Login @user-authorizing="authorize" />
	</div>
</template>