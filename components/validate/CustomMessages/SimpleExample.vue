<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email, helpers } from "@vuelidate/validators";

const form = reactive({
  firstName: "",
  lastName: "",
  contact: {
    email: "",
  },
});

const rules = {
  firstName: {
    required: helpers.withMessage("This field must be filled", required),
    minLength: helpers.withMessage(
      ({ $pending: _$pending, $invalid, $params, $model }) =>
        `This field has a value of '${$model}' but must have a min length of ${
          $params.min
        } so it is ${$invalid ? "invalid" : "valid"}`,
      minLength(4)
    ),
  },
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
    <h4>Simple Example</h4>
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
        :class="{
          'error-field': v$.contact.email.$invalid && v$.contact.email.$dirty,
        }"
      />

      <p
        v-for="error of v$.contact.email.$errors"
        :key="error.$uid"
        class="error-text"
      >
        <small>{{ error.$message }}</small>
      </p>
    </div>

    <div class="d-flex justify-content-end gap-8">
      <a-button class="btn-default" @click="handleReset">Reset</a-button>
      <a-button class="btn-indigo" @click="handleSubmit">Save</a-button>
    </div>
  </div>
</template>