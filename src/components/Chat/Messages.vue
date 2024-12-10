<script setup>
const props = defineProps([
	"messages",
]);

const emit = defineEmits([
	"message-sent",
]);
</script>

<template>
	<ul>
		<li v-for="message in props.messages">{{ message }}</li>
	</ul>
</template>