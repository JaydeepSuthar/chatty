<script setup>
import { ref } from 'vue';

const emit = defineEmits(['sendMsg']);

let chat_msg = ref("");

const emitMsg = () => {
	emit('sendMsg', chat_msg.value);
	chat_msg.value = "";
};
</script>

<template>
	<section class="tw-flex">
		<input v-model="chat_msg" class="tw-w-full tw-border-2 tw-text-black tw-text-2xl tw-font-mono tw-px-2"
			type="text" name="msgbox" id="msgbox" placeholder="Say Something..." >
		<button @click="emitMsg"
			class="tw-bg-cyan-500 tw-font-mono tw-font-semibold tw-text-lg tw-p-4 tw-text-white">Send</button>
	</section>
</template>
