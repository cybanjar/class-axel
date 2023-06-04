<template>
  <div>User score: {{ user?.score }}</div>
  <a-button @click="rm" class="btn-indigo">rm</a-button>
</template>

<script setup>
const user = useCookie(
  'userInfo',
  {
    default: () => ({ score: 1 }),
    watch: true,
    httpOnly: true,
    secure: true
  },

)

if (user.value && user.value !== null) {
  user.value.score ++; // userInfo cookie not update with this change
}

</script>
