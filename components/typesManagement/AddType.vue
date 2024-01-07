<template>
    <div>
      <template>
        <h4>Add Type</h4>
      </template>
  
      <!-- Form inside the Modal -->
      <b-form @submit.prevent="submitType">
        <b-form-group label="Type Name" label-for="typeName">
          <b-form-input
            v-model="updatedType"
            id="typeName"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="submit" variant="secondary" @click="closeModal">Cancel</b-button>
      </b-form>
    </div>
  </template>
    
    <script>
  export default {
    data() {
      return {
        isModalVisible: false,
        updatedType: "",
      };
    },
    methods: {
   
      submitType() {

          const isDuplicate = this.$store.getters.getTypes.some(type => type.name === this.updatedType);

      if (isDuplicate) {
        console.error("Type with the same name already exists");
        alert("Enter Unique Type");
        this.updatedType = ''
        return;
      }

        this.$store.dispatch('addType',{name: this.updatedType})
        .then(()=>{
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
    