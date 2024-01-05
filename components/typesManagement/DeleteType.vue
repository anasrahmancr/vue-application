<template>
    <div>
      <h4>Confirm Deletion</h4>
  
      <p>Are you sure you want to delete the Type "{{ type.name }}"?</p>
  
      <b-button variant="danger" @click="confirmDeletion">Yes, Delete</b-button>
      <b-button variant="secondary" @click="cancelDeletion">Cancel</b-button>
    </div>
  </template>
    
    <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    props: {
      isDeleteModal: {
        type: Boolean,
        required: true,
      },
      type: {
        type: Object,
        default: null,
      },
      index: {
        type: Object,
        default:null,
      }
    },
  
    methods: {
  
      confirmDeletion() {
        this.$store.dispatch("deleteType",this.index);
        this.isDeleteModal = false;
        this.$emit("close-modal");
      },
  
      cancelDeletion() {
        this.$emit("close-modal");
      },
    },
  });
  </script>
    