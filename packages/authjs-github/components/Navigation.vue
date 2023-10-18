<script setup lang="ts">
const { signIn, signOut, user } = useAuth()
</script>

<template>
  <nav>
    <ul>
      <li><button @click="signIn(`github`)">Sign In</button></li>
      <li><button @click="signOut()">Sign Out</button></li>
      <li>
        <span>{{ user?.email || "no user" }}</span>
      </li>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/private">Private</NuxtLink></li>
      <li><NuxtLink to="/guest">Guest</NuxtLink></li>
    </ul>
  </nav>
</template>
