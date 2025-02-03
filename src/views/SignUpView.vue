<script setup>
import { useRouter } from 'vue-router';

import { useToast } from 'primevue/usetoast';

import SignUp from '../components/SignUp.vue';

const router = useRouter();
const toast = useToast();

async function signUp(userData){
	if(userData.password !== userData.passwordConfirm) {
		toast.add({ severity: 'error', summary: 'Error', detail: 'Passwords do not match', life: 4000 });
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
		toast.add({ severity: 'error', summary: 'Error', detail: 'An error has occured', life: 4000 });
		return;
	}

	toast.add({ severity: "success", summary: 'Success', detail: 'Registration is succesful', life: 4000 });

	setTimeout(() => {
		router.push('/sign-in');
	}, 4000);
}
</script>

<template>
	<div class="flex flex-col items-center justify-center h-screen bg-white">
		<SignUp @user-registration="signUp"/>
	</div>
</template>