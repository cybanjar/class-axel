<script setup>
import { useVuelidate } from "@vuelidate/core";
import { helpers, minValue, required, numeric } from "@vuelidate/validators";

const form = reactive({
  fullName: "",
  products: [{ name: "", qty: 0 }],
});

const rules = {
  fullName: { required },
  products: {
    $each: helpers.forEach({
      name: { required },
      qty: { required, minValue: minValue(1), numeric },
    }),
  },
};

const v$ = useVuelidate(rules, form);

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
    <div class="d-flex justify-content-between">
      <h4>Array Example with Helpers Foreach</h4>
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

    <div
      v-for="(product, index) in form.products"
      class="flex gap-2"
      style="margin-bottom: 16px"
      :key="`product-${index}`"
    >
      <div class="form-group">
        <label for="productName">Product Name</label>

        <input
          id="productName"
          type="text"
          v-model="product.name"
          :class="{
            'error-field':
              v$.products.$each.$response.$errors[index].name.length,
          }"
        />

        <p
          v-for="error in v$.products.$each.$response.$errors[index].name"
          :key="error.$uid"
          class="error-text"
        >
          <small>{{ error.$message }}</small>
        </p>
      </div>

      <div class="form-group">
        <label for="qty">Quantity</label>

        <input
          id="qty"
          type="text"
          v-model="product.qty"
          :class="{
            'error-field':
              v$.products.$each.$response.$errors[index].name.length,
          }"
        />

        <p
          v-for="error in v$.products.$each.$response.$errors[index].qty"
          :key="error.$uid"
          class="error-text"
        >
          <small>{{ error.$message }}</small>
        </p>
      </div>
      <a-button
        class="btn-danger"
        style="align-self: center"
        @click="handleDeleteProduct(index)"
        :disabled="form.products.length === 1"
      >
        Delete
      </a-button>
    </div>

    <div class="flex justify-end gap-2">
      <a-button class="btn-default" @click="handleReset">Reset</a-button>
      <a-button class="btn-indigo" @click="handleSubmit">Save</a-button>
    </div>
  </div>
</template>