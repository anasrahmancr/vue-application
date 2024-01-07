<template>
  <div>
    <template>
      <h4>Add Category</h4>
    </template>

    <!-- Form inside the Modal -->
    <b-form @submit.prevent="submitCategory">
      <b-form-group label="Category Name" label-for="categoryName">
        <b-form-input
          v-model="updatedCategory"
          id="categoryName"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="submit" variant="secondary" @click="closeModal">Cancel</b-button>
    </b-form>
  </div>
</template>
  
  <script>
  import { mapState } from 'vuex';
export default {
  data() {
    return {
      isModalVisible: false,
      updatedCategory: "",
    };
  },
  methods: {
 
    submitCategory() {

      const isDuplicate = this.$store.getters.getCategories.some(category => category.name === this.updatedCategory);

      if (isDuplicate) {
        console.error("Category with the same name already exists");
        alert("Enter Unique Categories");
        this.updatedCategory = ''
        return;
      }

      this.$store.dispatch('addCategory',{name: this.updatedCategory})
      .then(()=>{
        console.log("Added successfully");
        this.isModalVisible = false;
        this.$emit("close-modal");
      }).catch((err)=>{
        console.error(err);
      })
    },

    closeModal(){
      this.$emit("close-modal");
    }
  },
};
</script>
  