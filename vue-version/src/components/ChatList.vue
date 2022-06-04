<script setup>
import ChatMsg from "./ChatMsg.vue";

let count = 50;
</script>

<template>
	<ul class="list-chat">
		<li v-for="(i, idx) in count" :key="idx">
			<ChatMsg v-if="idx % 2 == 0" :msg="`${i}`" :is-my-msg="true" />
			<ChatMsg v-else :msg="`${i}`" :is-my-msg="false" />
		</li>
	</ul>
</template>

<style lang="scss">
$bgClr: #242b2e;
$scrollBgClr: #758283;
$txtClr: #fff;

.list-chat {
	height: calc(100vh - 8rem);
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0.5rem;
	}

	&::-webkit-scrollbar-track {
		background: $bgClr;
	}

	&::-webkit-scrollbar-thumb {
		background: $scrollBgClr;
		border-radius: 8px;
	}
}
</style>
