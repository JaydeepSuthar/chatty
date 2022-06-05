<script setup>
import { ref } from 'vue';
import ChatList from './components/ChatList.vue';
import MsgBox from './components/MsgBox.vue';

const msgList = ref(['demo msg']);

const msgSent = (chatMsg) => {
	msgList.value.push(chatMsg);
};
</script>


<template>
	<main class="tw-container tw-max-w-lg tw-mx-auto tw-bg-slate-900 tw-border-black tw-border-2 tw-min-h-screen tw-text-white tw-flex tw-flex-col">
		<section class="tw-bg-slate-800 tw-p-2 tw-max-h-16" id="header">
			<header>
				<h1 class="tw-font-mono tw-font-bold tw-text-4xl tw-text-center">Chatty</h1>
			</header>
		</section>

		<section class="list tw-flex-1 tw-mt-1" id="chat-list">
			<ChatList :msg-list="msgList" />
		</section>

		<section class="tw-max-h-16" id="msg-box">
			<MsgBox @send-msg="msgSent" />
		</section>
	</main>
</template>

<style>
body {
	background-color: whitesmoke;
}
</style>
