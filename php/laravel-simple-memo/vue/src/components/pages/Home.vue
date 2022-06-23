<script setup lang="ts">
import { ref } from "vue";
import axiosClient from "../../axios";

const title = ref("メモ一覧");
const posts = ref([]);
axiosClient
  .get("/api/home")
  .then((res) => {
    posts.value = res;
  })
  .catch((err) => {
    console.log(err);
  });
</script>

<template>
  <h1 class="text-3xl font-bold underline">{{ title }}</h1>
  <div>{{ posts }}</div>
</template>
