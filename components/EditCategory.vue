<template>
    <div>
      <template>
        <h4>Edit Category</h4>
      </template>
  
      <b-form @submit.prevent="submitCategory">
        <b-form-group label="Category Name" label-for="categoryName">
          <b-form-input
          v-model="updatedCategory"
            id="categoryName"
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
    category: {
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
        updatedCategory: this.category.name
      };
    },
    methods: {
   
      async submitCategory() {
        await this.$store.dispatch("updateCategory", {updateCategory: this.updatedCategory, updateIndex: this.index});
        this.$emit("close-modal");
        this.isEditModal = false;
      },

      closeModal(){
      this.$emit("close-modal");
      },
    },
  };
  </script>
    