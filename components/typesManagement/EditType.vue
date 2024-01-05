<template>
    <div>
      <template>
        <h4>Edit Type</h4>
      </template>
  
      <b-form @submit.prevent="submitType">
        <b-form-group label="Type Name" label-for="typeName">
          <b-form-input
          v-model="updatedType"
            id="typeName"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-button type="submit" variant="primary">Update</b-button>
      <b-button type="submit" variant="secondary" @click="closeModal">Cancel</b-button>

      </b-form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
    type: {
      type: Object,
      required: true,
    },
    index: {
      type: Object,
      required: true,
    }
  },
    data() {
      return {
        isEditModal: false,
        updatedType: this.type.name
      };
    },
    methods: {
   
      async submitType() {
        await this.$store.dispatch("updateType", {updateType: this.updatedType, updateIndex: this.index});
        this.$emit("close-modal");
        this.isEditModal = false;
      },

      closeModal(){
      this.$emit("close-modal");
      },
    },
  };
  </script>
    