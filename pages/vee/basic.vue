<template>
  <div class="container">
    <div class="navigation">
      <NuxtLink to="/vee"> &#8592; </NuxtLink>
      <h2>Basic Validations</h2>
    </div>

    <collapse-item>
      <template #title> HOC </template>
      <template #default>
        <vee-hoc-simple />
        <vee-hoc-custom-input />
        <vee-hoc-form-level />
        <vee-hoc-edit />
      </template>
    </collapse-item>

    <collapse-item>
      <template #title> Composition </template>
      <template #default>
        <vee-composition-simple />
        <vee-composition-form-level />
        <vee-composition-edit />
      </template>
    </collapse-item>
  </div>
</template>