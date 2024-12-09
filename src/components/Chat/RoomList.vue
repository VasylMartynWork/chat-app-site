<script setup>
const props = defineProps([
	"rooms",
]);

</script>

<template>
	<div>
		<ul>
			<li v-for="room in props.rooms">
				<button>{{ room }}</button>
			</li>
		</ul>
	</div>
</template>