<script setup>
const listMenu = [
  { title: "Basic Example", url: "/validation/basic-example" },
  { title: "Custom Error Message", url: "/validation/custom-error-message" },
  { title: "Custom Validations", url: "/validation/custom-validation" },
  { title: "Dynamic Form", url: "/validation/dynamic" },
];
</script>

<template>
  <div class="container">
    <h2>Vuelidate</h2>
    <ul class="list-disc">
      <li v-for="(menu, index) in listMenu" :key="`menu-${index}`">
        <NuxtLink :to="menu.url">{{ menu.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>