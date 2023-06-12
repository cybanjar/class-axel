<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import ProductForm from '@/components/validate/Dynamic/ProductForm'

const form = reactive({
  fullName: "",
  products: [{ name: "", qty: 0 }],
});

const rules = {
  fullName: { required },
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

/**
 * Function to add product
 */
function handleAddProduct() {
  form.products.push({
    name: "",
    qty: 0,
  });
}

/**
 * Function to remove specific product
 */
function handleDeleteProduct(index) {
  form.products.splice(index, 1);
}
</script>

<template>
  <div class="card">
    <div class="flex justify-between">
      <h4>Array Example with Collections validation</h4>
      <a-button class="btn-secondary" style="align-self: center" @click="handleAddProduct">Add</a-button>
    </div>
    <hr />

    <div class="form-group">
      <label for="fullName">Full Name</label>

      <input
        id="fullName"
        type="text"
        v-model="form.fullName"
        :class="{ 'error-field': v$.fullName.$invalid && v$.fullName.$dirty }"
      />

      <p
        v-for="error in v$.fullName.$errors"
        :key="error.$uid"
        class="error-text"
      >
        <small>{{ error.$message }}</small>
      </p>
    </div>

    <ProductForm
      v-for="(_, index) in form.products"
      :key="`product-${index}`"
      v-model="form.products[index]"
      :disabled-delete="form.products.length === 1"
      @delete="handleDeleteProduct"
    />
    <div class="d-flex justify-content-end gap-8">
      <a-button class="btn-default" @click="handleReset">Reset</a-button>
      <a-button class="btn-indigo" @click="handleSubmit">Save</a-button>
    </div>
  </div>
</template>