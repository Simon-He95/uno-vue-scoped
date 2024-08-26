<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});
</script>

<template>
  <h1 class="text2">{{ msg }} 【style has scoped】</h1>
</template>

<style lang="scss" scoped>
.text2 {
  @apply custom-rule;
}
</style>
