<script setup>
import { ref } from 'vue';

const username = ref('');
const userPassword = ref('');
const userPasswordConfirm = ref('');

const emit = defineEmits(['user-registration']);

function register() {
	emit('user-registration', { username: username.value, password: userPassword.value, passwordConfirm: userPasswordConfirm.value });
}

</script>

<template>
	<div class="flex flex-col items-center justify-between w-1/4 p-5 h-1/2 bg-slate-300 rounded-xl">
		<h1 class="text-2xl">Реєстрація</h1>
		<div class="flex flex-col items-center space-y-6 w-full">
			<input type="text" placeholder="Введіть логін" class="px-2 py-1 w-4/5 rounded" v-model="username" />
			<input type="password" placeholder="Введіть пароль" class="px-2 py-1 w-4/5 rounded"
				v-model="userPassword" />
			<input type="password" placeholder="Підтвердіть пароль" class="px-2 py-1 w-4/5 rounded"
				v-model="userPasswordConfirm" />
		</div>
		<button class="bg-blue-500 py-2 px-4 text-white rounded-lg" @click="register">Зареєструватись</button>
		<div class="flex flex-col items-center">
			<span class="text-sm">Маєте акаунт?</span>
			<RouterLink class="text-sm text-blue-500 hover:underline" :to="`/sign-in`">Авторизуйтесь</RouterLink>
		</div>
	</div>
</template>