<template>
  <div class="max-w-2xl mx-auto">
    <div class="">
      <form @submit.prevent="submit">
        <a-input label="Input Task" placeholder="input your task.." v-model="form.task" />
        <a-checkbox v-if="isEdit" type="checkbox" v-model="form.completed" />
        <a-button class="btn-indigo" :disabled="!form.task" @click="isEdit ? save() : submit() ">{{ isEdit ? 'Save' : 'Add' }}</a-button>
        <a-button v-if="isEdit" class="btn-default" @click="reset"> Cancel </a-button>
      </form>

      <a-input v-model="search" placeholder="Searching..." />
  
      <!-- <div class="py-3">
        <label for="countries" class="label">Filter </label>
        <select v-model="selected" id="countries" class="select">
          <option value="all" selected>All</option>
          <option value="done">Done</option>
          <option value="progress">Progress</option>
        </select>
      </div> -->
    </div>

    <template v-if="empty">
      <div class="text-gray-300 py-4">
        <IconTask />
        Is empty task. Please add task!
      </div>
    </template>

    <template v-else>
      <ul v-for="(item, index) in paginatedTodos" :key="index">
        <li class="capitalize py-2">{{ item.task }} - <span :class="item.completed ? 'text-green-500' : 'text-yellow-500' "> {{ item.completed ? 'Done' : 'On Progress' }}  </span>
          <template v-if="selected === 'all'">
            <span class="icon-edit" @click="edit(item, index)"> <IconEdit class="icon" /> </span> 
            <span class="icon-delete" @click="hapus(index)"> <IconClose class="icon" /> </span>
          </template>
        </li>
      </ul>
    </template>

    <!-- pagination -->
    <div class="py-3 flex items-center justify-between">
      <div>
        <a-button class="btn-indigo" @click="prev" :disabled="page === 1"><ChevronLeft /></a-button>
        <a-button class="btn-indigo" @click="next" :disabled="page === totalPages"><ChevronRight/></a-button>
      </div>
      <span class="text-gray-400">{{ page }} / {{ totalPages }} Page</span> 
      Total {{ totalTodos }}
    </div>
    
  </div>
</template>

<script setup>
import { useTodoStore } from '@/stores/todo'
import { isEmpty, size } from 'lodash-es'
import IconClose from '@carbon/icons-vue/es/trash-can/16'
import IconEdit from '@carbon/icons-vue/es/edit/16'
import IconTask from '@carbon/icons-vue/es/task/32'
import ChevronRight from '@carbon/icons-vue/es/chevron--right/16'
import ChevronLeft from '@carbon/icons-vue/es/chevron--left/16'

const todoStore = useTodoStore()

const form = reactive({
  task     : '',
  completed: false
})

const selected = ref('all')
const isEdit   = ref(false)
const idSave   = ref(0)
const search   = ref('')
const page     = ref(1)
const perPage  = 5

function submit () {
  todoStore.add({
    task     : form.task,
    completed: form.completed
  })

  reset()
}

function reset () {
  isEdit.value = false

  form.task      = ''
  form.completed = false
}

function edit (value, idx) {
  form.task      = value.task
  form.completed = value.completed

  isEdit.value = true
  idSave.value = idx
}

function save () {
  todoStore.edit(idSave.value, {
    task     : form.task,
    completed: form.completed
  })

  reset()
}

function hapus (idx) {
  todoStore.deleted(idx)

  reset()
}

// const openTodos = computed(
//   () => {
//     if (selected.value === 'all')  {
//       return todoStore.todos
//     } else if(selected.value === 'done') {
//       return todoStore.todos.filter(todo => todo.completed)
//     } else {
//       return todoStore.todos.filter(todo => !todo.completed)
//     }
//   }
// )

const filteredTodos = computed(() => {
  return todoStore.todos.filter((item) =>
    item.task.toLowerCase().includes(search.value.toLowerCase())
  );
})

const totalPages = computed(() => Math.ceil(filteredTodos.value.length / perPage))
const totalTodos = computed(() => size(todoStore.todos))

const paginatedTodos = computed(() => {
  const startIndex = (page.value - 1) * perPage
  const endIndex   = startIndex + perPage
  return filteredTodos.value.slice(startIndex, endIndex);
})

const next = () => {
  if (page.value < totalPages.value)
    page.value++
}
const prev = () => {
  if (page.value > 1)
    page.value--
}



const empty = computed(() => isEmpty(todoStore.todos))

</script>