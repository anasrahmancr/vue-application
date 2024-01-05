<template>
    <CategoryManagement/>
</template>
  
  <script>
import CategoryManagement from '../../components/CategoryManagement.vue';
export default {
  components: {
    CategoryManagement
},
};
</script>
  
<style>
.text-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Ensure at least the full viewport height */
}
</style>