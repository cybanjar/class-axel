<template>
  <div class="container">
    <div class="navigation">
      <NuxtLink to="/vee"> &#8592; </NuxtLink>
      <h2>Dynamic Form</h2>
    </div>

    <collapse-item>
      <template #title> HOC </template>
      <template #default>
        <vee-dynamic-hoc-array />
        <vee-dynamic-hoc-field />
      </template>
    </collapse-item>

    <collapse-item>
      <template #title> Composition </template>
      <template #default>
        <vee-dynamic-composition-array />
        <vee-dynamic-composition-field />
      </template>
    </collapse-item>
  </div>
</template>