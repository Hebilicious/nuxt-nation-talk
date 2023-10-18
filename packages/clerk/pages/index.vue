<script setup lang="ts">
import { OrganizationSwitcher, UserButton } from "vue-clerk"
</script>
<template>
  <div>
    <h1>Clerk Auth</h1>
    <OrganizationSwitcher />
    <UserButton after-sign-out-url="/" />
  </div>
</template>
