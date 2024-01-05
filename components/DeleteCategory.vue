<template>
  <div>
    <h4>Confirm Deletion</h4>

    <p>Are you sure you want to delete the category "{{ category.name }}"?</p>

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
    category: {
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
      this.$store.dispatch("deleteCategory",this.index)
      console.log(this.index);
      this.isDeleteModal = false;
      this.$emit("close-modal");
    },

    cancelDeletion() {
      this.$emit("close-modal");
    },
  },
});
</script>
  