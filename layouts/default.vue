<template>
  <div class="p-3">
    <NuxtLoadingIndicator />
    <NuxtErrorBoundary>
      <template #error="{ error }">
        <p>An error occurred: {{ error }}</p>
      </template>

      <slot />
    </NuxtErrorBoundary>
  </div>
</template>