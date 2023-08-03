<template>
  <div class="p-4 max-w-3xl mx-auto">
    <h1 class="text-4xl font-semibold py-4">Users List</h1>

    <!-- Filter -->
    <input type="text" v-model="searchTerm" @input="filterUsers" placeholder="Search...">

    <!-- Form -->
    <input type="text" v-model="form.name" placeholder="Ucup">
    <input type="email" v-model="form.email" placeholder="ucup@gmail.com">
    <a-button @click="add" class="btn-indigo">+</a-button>

    <!-- List of Users -->
    <ul>
      <li v-for="user in paginatedUsers" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>

    <!-- Pagination -->
    <div>
      <a-button class="btn-default" @click="prevPage" :disabled="currentPage === 1">Prev</a-button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <a-button class="btn-default" @click="nextPage" :disabled="currentPage === totalPages">Next</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { findLast } from 'lodash-es'

const users = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  // Add more dummy data here
]);

const form = reactive({
  name : '',
  email: '', 
})

const searchTerm = ref('');

const currentPage = ref(1);
const itemsPerPage = 5;

const filteredUsers = computed(() => {
  return users.value.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const totalPages = computed(() => Math.ceil(filteredUsers.value.length / itemsPerPage));

const paginatedUsers = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredUsers.value.slice(startIndex, endIndex);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const filterUsers = () => {
  currentPage.value = 1; // Reset pagination to first page when filtering
};

const add = () => {
  const lastId = users.value.reduce((maxId, user) => {
    return user.id > maxId ? user.id : maxId;
  }, 0)
  
  
  users.value.push({
    id: lastId + 1,
    name: form.name,
    email: form.email,
  })

  reset()
}

const reset = () => {
  form.email = '',
  form.name  = ''
}
</script>
