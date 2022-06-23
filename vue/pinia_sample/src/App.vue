<script setup lang="ts">
import { useMainStore } from './store/main'
import { storeToRefs } from 'pinia'

const main = useMainStore()
const { counter, doubleCount } = storeToRefs(main)
</script>

<template>
  <div>COUNTER: {{ counter }}</div>
  <div>DOUBLE_COUTE: {{ doubleCount }}</div>
  <button @click="main.plusCount">+</button>
</template>

<style scoped></style>
