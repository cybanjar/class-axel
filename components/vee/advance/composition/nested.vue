<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  user: yup.object({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(8).label("Password"),
  }),
});

const { handleReset, handleSubmit } = useForm({
  validationSchema: schema,
});

const submit = handleSubmit((values) => {
  console.log({ values });
  alert("Submit Form");
});
</script>

<template>
  <div class="card">
    <h4>Nested Object Example</h4>
    <hr />

    <form @submit.prevent="submit">
      <label for="user.email">Email</label>
      <vee-advance-composition-input-form name="user.email" />

      <label for="user.password">Password</label>
      <vee-advance-composition-input-form name="user.password" />

      <a-button class="btn-default" type="button" @click="handleReset">Reset</a-button>
      <a-button class="btn-indigo" type="submit">Submit</a-button>
    </form>
  </div>
</template>