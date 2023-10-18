<template>
  <main class="container" v-if="user">
    <h1>{{ user.name }}</h1>
    <img :src="user.avatar_url" width="200" />
    <hr />
    <pre> {{ user }}</pre>
  </main>
</template>

<script setup lang="ts">
const user = useCookie("github-user") as Ref<any>
if (!user.value) navigateTo("/")
</script>
