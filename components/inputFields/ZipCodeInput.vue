<template>
  <div>
    <ValidationProvider
      name="zipCode"
      rules="required|mob_zip|length:9"
      v-slot="{ errors }"
    >
      <b-form-group :label="$t('form.zipCode')" label-for="zipCode" class="mb-3">
        <b-form-input
          id="zipCode"
          v-mask="'####-####'"
          v-model="zipCode"
          @input="$emit('input', zipCode)"
          placeholder="1234-5678"
        />
        <span class="input-invalid-message">{{ errors[0] }}</span>
      </b-form-group>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  name: "ZipCodeInput",
  components: {
    ValidationProvider,
  },
  data() {
    return {
      zipCode: "",
    };
  },
};
</script>