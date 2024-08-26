<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});
</script>

<template>
  <h1 class="text1">{{ msg }} 【style does not have scoped】</h1>
</template>

<style lang="scss">
.text1 {
  @apply custom-rule;
}
</style>
