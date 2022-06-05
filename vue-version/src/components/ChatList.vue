<script setup>
import ChatMsg from "./ChatMsg.vue";

defineProps(['msgList'])

</script>

<template>
	<ul class="list-chat">
		<li v-for="(msg, idx) in msgList" :key="idx">
			<ChatMsg :msg="msg" :is-my-msg="true" />
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
