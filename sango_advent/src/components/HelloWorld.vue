<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  lastName: string
}
const props = defineProps<Props>()

const firstName = ref('Sango')
const fullName = computed(() => firstName.value + ' ' + props.lastName)
</script>

<template>
  <div>
    {{ fullName }}
  </div>
</template>

<style scoped></style>
