<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <header>
    <div class="pt-6 pb-4 pc:py-0 pc:px-12">
      <h1 class="text-black text-2xl">{{ title }}</h1>
      <nav></nav>
    </div>
  </header>
</template>
