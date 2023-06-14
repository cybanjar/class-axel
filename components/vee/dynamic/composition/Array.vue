<script setup>
import { useForm, useFieldArray, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import FormInput from './InputForm'

const initialData = {
  users: [
    {
      name: "",
      email: "",
    },
  ],
};

const schema = yup.object().shape({
  users: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required().label("Name"),
        email: yup.string().email().required().label("Email"),
      })
    )
    .strict(),
});

const { handleSubmit } = useForm({
  initialValues: initialData,
  validationSchema: schema,
});

const { remove, push, fields } = useFieldArray("users");
const onSubmit = handleSubmit((values) => {
  console.log(JSON.stringify(values, null, 2));
});
</script>

<template>
  <div class="card">
    <h4>Array Example</h4>
    <hr />

    <form @submit.prevent="onSubmit">
      <fieldset
        v-for="(field, idx) in fields"
        :key="field.key"
        style="margin-bottom: 4px"
      >
        <legend>User #{{ idx + 1 }}</legend>
        <div class="form-group">
          <label :for="`users[${idx}].name`">Name</label>
          <FormInput :name="`users[${idx}].name`" />
        </div>

        <div class="form-group">
          <label :for="`users[${idx}].email`">Email</label>
          <FormInput :name="`users[${idx}].email`" />
        </div>
        <a-button class="btn-danger" title="Delete User" type="button" @click="remove(idx)">
          X
        </a-button>
      </fieldset>

      <a-button class="btn-secondary" type="button" @click="push({ email: '', name: '' })">
        Add User +
      </a-button>

      <a-button class="btn-indigo" type="submit">Submit</a-button>
    </form>
  </div>
</template>