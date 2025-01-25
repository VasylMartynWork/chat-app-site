<script setup>
import { ref } from 'vue';

const username = ref('');
const userPassword = ref('');


const emit = defineEmits(['user-authorizing']);

function login() {
	emit('user-authorizing', { username: username.value, password: userPassword.value });
}

</script>

<template>
	<div class="flex flex-col items-center justify-between w-1/4 p-5 h-2/5 bg-slate-300 rounded-xl">
		<h1 class="text-2xl text-black">Авторизація</h1>
		<div class="flex flex-col items-center space-y-6 w-full">
			<input type="text" placeholder="Введіть логін" class="px-2 py-1 w-4/5 rounded bg-white text-black"
				v-model="username" />
			<input type="password" placeholder="Введіть пароль" class="px-2 py-1 w-4/5 rounded bg-white text-black"
				v-model="userPassword" />
		</div>
		<button class="bg-blue-500 py-2 px-4 text-white rounded-lg" @click="login">Авторизуватись</button>
		<div class="flex flex-col items-center">
			<span class="text-sm text-black">Не маєте акаунту?</span>
			<RouterLink class="text-sm text-blue-500 hover:underline" :to="`/sign-up`">Зареєструйтесь</RouterLink>
		</div>
	</div>
</template>