<template>
  <div>
    <UCard>
      <template #header>
      Header
      </template>

      Content

      <template #footer>
        <div class="flex items-center">
          <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" class="mr-4" />
          <UButton icon="i-heroicons-pencil-square" size="sm" color="primary" variant="solid" label="Button" :trailing="false" />
        </div>
      </template>
    </UCard>


  </div>  
</template>

<script setup>
// const router = useRouter()
// router.push({ path: '/todo'})
</script>
