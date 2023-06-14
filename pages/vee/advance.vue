<template>
  <div class="container">
    <div class="navigation">
      <NuxtLink to="/vee"> &#8592; </NuxtLink>
      <h2>Advance Validations</h2>
    </div>

    <collapse-item>
      <template #title> HOC </template>
      <template #default>
        <vee-advance-hoc-rule />
        <vee-advance-hoc-yup />
        <vee-advance-hoc-nested />
      </template>
    </collapse-item>

    <collapse-item>
      <template #title> Composition </template>
      <template #default>
        <vee-advance-composition-rule />
        <vee-advance-composition-yup />
        <vee-advance-composition-nested />
      </template>
    </collapse-item>
  </div>
</template>