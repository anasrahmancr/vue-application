<template>
  <div class="container mt-4">

    <div>
      <h1>Category Management</h1>
    </div>

    <div class="button-div d-flex justify-content-end mb-3">
      <b-button variant="success" @click="showModal">Add Category</b-button>
    </div>

    <div v-if="!categories || categories.length === 0">
    <h2 class="text-lg-center text-danger">No Category....</h2>
  </div>
    <div class="table-container" v-else>
      <table class="table">

        <thead>
          <tr>
            <th>S.No.</th>
            <th>Category Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody >
          <tr v-for="(category, index) in this.categories" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ category.name }}</td>
            <td>
              <div class="btn p-3" role="group">
                <b-button variant="info" @click="editModal(category, index)"
                  >Edit</b-button
                >
                <b-button variant="danger" @click="deleteModal(category,index)"
                  >Delete</b-button
                >
              </div>
            </td>
          </tr>
        </tbody>

      </table>
    </div>

    <b-container>
      <b-modal ref="my-modal" v-model="isAddCategory" hide-footer hide-header>
        <AddCategory v-if="isAddCategory" @close-modal ="hideAddCategoryModal" />
      </b-modal>
    </b-container>

    <b-modal ref="delete-modal" v-model="isDeleteModal" hide-footer hide-header>
      <b-modal-body>
      <DeleteCategory 
      v-if="isDeleteModal"
      :category="this.category"
      :index = "this.index"
      @close-modal ="hideDeleteModal"
      />
    </b-modal-body>
    </b-modal>

    <b-modal ref="edit-modal" v-model="isEditModal" hide-footer hide-header>
      <b-modal-body>
        <EditCategory
          v-if="isEditModal"
          :category="this.category"
          :index="this.index"
          @close-modal ="hideEditModal"
        />

      </b-modal-body>
    </b-modal>

  </div>
</template>



  <script>
import AddCategory from "./AddCategory.vue";
import { defineComponent } from "vue";
import DeleteCategory from "./DeleteCategory.vue";
import EditCategory from "./EditCategory.vue";

export default defineComponent({
  components: {
    AddCategory,
    DeleteCategory,
    EditCategory
},

  data() {
    return {
      category: null,
      index: null,
      isAddCategory: false,
      isDeleteModal: false,
      isEditModal:false,
    };
  },

  computed:{
    categories(){
      return this.$store.getters.getCategories;
    }
  },

  methods: {
    showModal() {
      this.$refs["my-modal"].show();
      this.isAddCategory = true;
    },
    
    editModal(category, index) {
      this.category = category;
      this.index = index;
      this.$refs["edit-modal"].show();
      this.isEditModal = true;
    },

      deleteModal(category, index){
        this.category = category;
        this.index = index;
        this.$refs["delete-modal"].show();
        this.isDeleteModal = true;
    },

    hideAddCategoryModal(){
      this.isAddCategory = false;
    },
    hideEditModal(){
      this.isEditModal = false;
    },
    hideDeleteModal(){
      this.isDeleteModal = false;
    },
    
  },
});
</script>
  
  <style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.button-div {
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  margin-bottom: 15px;
}

.table-container {
  overflow-x: auto;
}

/* Optional: Add some spacing and border to the table */
.table {
  margin-top: 20px;
  border: 1px solid #030000;
}

h1 {
  text-align: center;
}
</style>
  