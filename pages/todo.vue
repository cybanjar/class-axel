<template>
  <div>
    <div class="">
      <form @submit.prevent="submit">
        <a-input label="Input Task" placeholder="input your task.." v-model="form.task" autofocus />
        <a-checkbox v-if="isEdit" type="checkbox" v-model="form.completed" />
        <a-button class="btn-indigo" :disabled="!form.task" @click="isEdit ? save() : submit() ">{{ isEdit ? 'Save' : 'Add' }}</a-button>
        <a-button v-if="isEdit" class="btn-default" @click="reset"> Cancel </a-button>
      </form>
  
      <div class="py-3">
        <label for="countries" class="label">Filter </label>
        <select v-model="selected" id="countries" class="select">
          <option value="all" selected>All</option>
          <option value="done">Done</option>
          <option value="progress">Progress</option>
        </select>
      </div>
    </div>

    <template v-if="empty">
      <div class="text-gray-300">
        <IconTask />
        Is empty task. Please add task!
      </div>
    </template>

    <template v-else>
      <ul v-for="(item, index) in openTodos" :key="index">
        <li class="capitalize py-2">{{ item.task }} - <span :class="item.completed ? 'text-green-500' : 'text-yellow-500' "> {{ item.completed ? 'Done' : 'On Progress' }}  </span>
          <template v-if="selected === 'all'">
            <span class="icon-edit" @click="edit(item, index)"> <IconEdit class="icon" /> </span> 
            <span class="icon-delete" @click="hapus(index)"> <IconClose class="icon" /> </span>
          </template>
        </li>
      </ul>
    </template>
    
  </div>
</template>

<script setup>
import { useTodoStore } from '@/stores/todo'
import _ from 'lodash'
import IconClose from '@carbon/icons-vue/es/trash-can/16'
import IconEdit from '@carbon/icons-vue/es/edit/16'
import IconTask from '@carbon/icons-vue/es/task/32'

const todoStore = useTodoStore()

const form = reactive({
  task: '',
  completed: false
})

const selected = ref('all')
const isEdit = ref(false)
const idSave = ref(0)

function submit () {
  todoStore.add({
    task: form.task,
    completed: form.completed
  })

  reset()
}

function reset () {
  isEdit.value = false

  form.task = ''
  form.completed = false
}

function edit (value, idx) {
  form.task = value.task
  form.completed = value.completed

  isEdit.value = true
  idSave.value = idx
}

function save () {
  todoStore.edit(idSave.value, {
    task: form.task,
    completed: form.completed
  })

  reset()
}

function hapus (idx) {
  todoStore.deleted(idx)

  reset()
}

const openTodos = computed(
  () => {
    if (selected.value === 'all')  {
      return todoStore.todos
    } else if(selected.value === 'done') {
      return todoStore.todos.filter(todo => todo.completed)
    } else {
      return todoStore.todos.filter(todo => !todo.completed)
    }
  }
)

const empty = computed(() => _.isEmpty(todoStore.todos))

</script>