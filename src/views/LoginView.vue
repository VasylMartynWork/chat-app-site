<script setup>
import Login from '@/components/Login.vue';

function authorize(userData){
	console.log(userData);
}
</script>

<template>
	<div class="flex flex-col items-center justify-center h-screen">
		<Login @user-authorizing="authorize"/>
	</div>
</template>