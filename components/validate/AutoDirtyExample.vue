<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";

const form = reactive({
  firstName: "",
  lastName: "",
  contact: {
    email: "",
  },
});

const rules = {
  firstName: { required, minLength: minLength(2) },
  lastName: { required },
  contact: { email: { required, email } },
};

const v$ = useVuelidate(rules, form, { $autoDirty: true });

/**
 * Function to submit form
 */
async function handleSubmit() {
  const isValidForm = await v$.value.$validate();

  if (!isValidForm) {
    console.log("invalid");
    return;
  }

  alert("SUBMIT FORM");
}

/**
 * Function to reset vuelidate
 */
function handleReset() {
  v$.value.$reset();
}
</script>

<template>
  <div class="card">
    <h4>Auto Dirty Example</h4>
    <hr />
    <div class="form-group">
      <label for="fullName">Full Name</label>
      <input
        type="text"
        v-model="form.firstName"
        :class="{ 'error-field': v$.firstName.$invalid && v$.firstName.$dirty }"
      />

      <p
        v-for="error of v$.firstName.$errors"
        :key="error.$uid"
        class="error-text"
      >
        <small>{{ error.$message }}</small>
      </p>
    </div>

    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        v-model="form.lastName"
        :class="{ 'error-field': v$.lastName.$invalid && v$.lastName.$dirty }"
      />

      <p
        v-for="error of v$.lastName.$errors"
        :key="error.$uid"
        class="error-text"
      >
        <small>{{ error.$message }}</small>
      </p>
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="text"
        v-model="form.contact.email"
        :class="{ 'error-field': v$.contact.email.$invalid && v$.contact.email.$dirty }"
      />

      <p
        v-for="error of v$.contact.email.$errors"
        :key="error.$uid"
        class="error-text"
      >
        <small>{{ error.$message }}</small>
      </p>
    </div>

    <div class="flex justify-end gap-2">
      <a-button class="btn-default" @click="handleReset">Reset</a-button>
      <a-button class="btn-indigo" @click="handleSubmit">Save</a-button>
    </div>
  </div>
</template>