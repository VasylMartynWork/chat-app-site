<script setup>
import SignUp from '@/components/SignUp.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

async function signUp(userData){
	if(userData.password !== userData.passwordConfirm) {
		alert('Помилка! Паролі не співпадають');
		return;
	}

	const res = await fetch("http://localhost:3001/api/v1/auth/sign-up", {
		headers: {
			"Content-Type": "application/json"
		},
		method: "POST",
		body: JSON.stringify(userData),
	});

	if(res.status === 500){
		alert('При реєстрації виникла помилка');
		return;
	}

	alert('Успішна реєстрація!');

	router.push('/sign-in');
}
</script>

<template>
	<div class="flex flex-col items-center justify-center h-screen">
		<SignUp @user-registration="signUp"/>
	</div>
</template>