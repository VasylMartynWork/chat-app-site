<script setup>
import Registration from '@/components/Registration.vue';

function register(userData){
	if(userData.password !== userData.passwordConfirm) {
		alert('Помилка! Паролі не співпадають');
		return;
	}

	console.log(userData);
}
</script>

<template>
	<div class="flex flex-col items-center justify-center h-screen">
		<Registration @user-registration="register"/>
	</div>
</template>