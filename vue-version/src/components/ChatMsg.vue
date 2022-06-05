<script setup>
const props = defineProps({
	avatar: String,
	msg: String,
	isMyMsg: Boolean,
});

// let msg = false;

</script>

<template>


	<section class="tw-flex tw-mt-5" :class="!isMyMsg && 'tw-flex-row-reverse'" id="chat-msg">
		<img class="tw-self-start" :src="`https://avatars.dicebear.com/api/bottts/demo.svg`" height="50"
			width="50" alt="">

		<div class="tw-mx-3 tw-max-w-full tw-text-gray-700 tw-bg-slate-50 tw-flex tw-rounded-3xl tw-px-5 tw-py-3"
			id="msg">
			{{ msg }}
		</div>
	</section>
</template>
