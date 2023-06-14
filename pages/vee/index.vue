<script setup>
const listMenu = [
  { title: "Basic", url: "/vee/basic" },
  { title: "Advance Validations", url: "/vee/advance" },
  { title: "Dynamic Form", url: "/vee/dynamic" },
];
</script>

<template>
  <div class="container">
    <h2>Vee Validate</h2>
    <ul class="list-disc">
      <li v-for="(menu, index) in listMenu" :key="`menu-${index}`">
        <NuxtLink :to="menu.url">{{ menu.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>