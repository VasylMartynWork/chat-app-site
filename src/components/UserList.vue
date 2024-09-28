<script setup>
const props = defineProps([
	"users",
]);

</script>

<template>
	<div class="flex flex-col">
		<button v-for="user in props.users">{{ user.name }}</button>
	</div>
</template>