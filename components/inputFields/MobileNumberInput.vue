<template>
  <div>
    <ValidationProvider
      name="mobileNumber"
      rules="required|mob_zip|length:12"
      v-slot="{ errors }"
    >
      <b-form-group
        :label=" $t('form.mobileNumber') "
        label-for="mobileNumber"
        class="mb-3"
      >
        <b-form-input
          id="mobileNumber"
          v-mask="'###-###-####'"
          v-model="mobileNumber"
          @input="$emit('input', mobileNumber)" 
          placeholder="123-456-7890"
        />
        <span class="input-invalid-message">{{ errors[0] }}</span>
      </b-form-group>
    </ValidationProvider>
  </div>
</template>
  
  <script>
  import {ValidationProvider} from 'vee-validate';

export default {
  name: "MobileNumberInput",
  components:{
    ValidationProvider
  },
  data() {
    return {
      mobileNumber: "",
    };
  },
};
</script>
  
  <style scoped>
</style>