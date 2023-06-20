<script setup>
import { useFirestore, useCollection, getDatabase } from 'vuefire'
import { collection } from 'firebase/firestore'

const db = getDatabase()
const todos = useCollection(collection(db, 'books'))

</script>

<template>
  <pre>{{ todos }}</pre>
</template>