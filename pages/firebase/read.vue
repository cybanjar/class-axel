<template>
  <div>
    <a-input v-model="form.username" placeholder="Username.." />
    <a-input v-model="form.email" placeholder="Email.." />
    <a-button class="btn-indigo" @click="onSubmit">Submit</a-button>
    <a-button class="btn-danger" @click="onDelete">Delete</a-button>
    <a-button class="btn-default" @click="findId">Find</a-button>
    <ul v-for="(item, index) in list" :key="index">
      <li>{{ item.userId }} - {{ item.username }} <a-button class="btn-default" @click="onDelete(item.userId)">X</a-button> </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getDatabase, ref as firebaseRef, set, get, onValue, child, update, remove, orderByKey, query, limitToLast, onChildAdded, onChildRemoved, orderByChild } from '@firebase/database' 
import { v4 as uuidv4 } from 'uuid'
import { toArray } from 'lodash-es'

const db = getDatabase()
const list = ref([])
const form = reactive({
  username: 'jasun',
  email   : 'x@gmail.com'
})

onMounted(() => {
  getUserData()
})

function writeUserData (userId: string, name: string, email: string, imageUrl: string) {
  set(firebaseRef(db, 'admin/' + userId), {
    userId,
    username: name,
    email: email,
    profile_picture: imageUrl
  })
  .then(() => {
    // success
  })
  .catch((error) => {
    console.error('error: ', error)
  })
}

function getUserData () {
  const users = firebaseRef(db, 'admin')

  onValue(users, (snapshot) => {
    const data = snapshot.val()
    list.value = toArray(data)
  })
}

function onSubmit () {
  writeUserData(uuidv4(), form.username, form.email, 'yudisembako')
}

function onDelete (id: string) {
  // const commentsRef = firebaseRef(db, 'users/')

  // onChildAdded(commentsRef, (data) => {
  //   const recentPostsRef = query(commentsRef, limitToLast(2))
  //   console.log("id: ", data)
  // })
  

  // get(child(db, `users/05ccbbf3-8e76-4651-8c8f-297fda760e68`))
  // .then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val())
  //   } else {
  //     console.log("No data available")
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // })

  remove(firebaseRef(db, `admin/${id}`))
}

function findId () {
  // const mostViewedPosts = query(firebaseRef(db, 'admin/542974c5-ec79-449b-8628-b0000c9a2e2d'))

  const topUserPostsRef = query(firebaseRef(db, 'posts/' + '3b1ae7fd-628f-4ae6-a2bd-d6666d7e35be'), orderByChild('starCount'))
  console.log('topUserPostsRef: ', topUserPostsRef)
  
}

</script>