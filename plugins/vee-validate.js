import { extend, defineRule } from "vee-validate";
import { required, alpha, max, email, numeric, length } from "vee-validate/dist/rules";

extend('alpha_spaces', {
    validate(value) {
      return /^[a-zA-Z\s]*$/.test(value)
    },
    message: 'Only alphabets and spaces are allowed.'
  });

extend("required", {
  ...required,
  message: "*This field is required"
});

extend("alpha",{
    ...alpha, 
    message:"Should contain only alphabets"
})

extend("max",{
    ...max,
    message: "Should not exceed 50 letters"
})

  extend('mob_zip', {
    validate(value) {
        const numericValue = value.replace(/[^0-9]/g, '');
      return /^\d+$/.test(numericValue);
    },
    message: 'The field must be numeric..'
  });

extend("numeric",{
    ...numeric,
    message: "Should be Numbers only"
})

extend("length",{
    ...length,
    message: "Invalid"
})

extend("email",{
    ...email,
    message: "Invalid Email"
})