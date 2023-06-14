<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
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
    <h4>Simple Yup Example</h4>
    <hr />

    <form @submit.prevent="submit">
      <label for="email">Email</label>
      <vee-advance-composition-input-form name="email" />

      <label for="password">Password</label>
      <vee-advance-composition-input-form name="password" />

      <a-button class="btn-default" type="button" @click="handleReset">Reset</a-button>
      <a-button class="btn-indigo" type="submit">Submit</a-button>
    </form>
  </div>
</template>