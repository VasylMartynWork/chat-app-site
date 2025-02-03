<script setup>
const props = defineProps([
	"messages",
]);

const emit = defineEmits([
	"message-sent",
]);
</script>

<template>
	<ul class="pl-5">
		<li v-for="message in props.messages" class="text-black">{{ message }}</li>
	</ul>
</template>