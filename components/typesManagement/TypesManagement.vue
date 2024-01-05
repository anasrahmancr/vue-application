<template>
  <div class="container mt-4">
    <div>
      <h1>Types Management</h1>
    </div>

    <div class="button-div d-flex justify-content-end mb-3">
      <b-button variant="success" @click="showModal">Add Type</b-button>
    </div>

    <div v-if="!types || types.length === 0">
      <h2 class="text-lg-center text-danger">No Types available....</h2>
    </div>
    <div class="table-container" v-else>
      <table class="table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Type Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(type, index) in this.types" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ type.name }}</td>
            <td>
              <div class="btn p-3" role="group">
                <b-button variant="info" @click="editModal(type, index)"
                  >Edit</b-button
                >
                <b-button variant="danger" @click="deleteModal(type, index)"
                  >Delete</b-button
                >
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <b-container>
      <b-modal ref="my-modal" v-model="isAddType" hide-footer hide-header>
        <AddType v-if="isAddType" @close-modal="hideAddTypeModal" />
      </b-modal>
    </b-container>

    <b-modal ref="delete-modal" v-model="isDeleteModal" hide-footer hide-header>
      <b-modal-body>
        <DeleteType
          v-if="isDeleteModal"
          :type="this.type"
          :index="this.index"
          @close-modal="hideDeleteModal"
        />
      </b-modal-body>
    </b-modal>

    <b-modal ref="edit-modal" v-model="isEditModal" hide-footer hide-header>
      <b-modal-body>
        <EditType
          v-if="isEditModal"
          :type="this.type"
          :index="this.index"
          @close-modal="hideEditModal"
        />
      </b-modal-body>
    </b-modal>
  </div>
</template>
  
  
  
    <script>
import { defineComponent } from "vue";
import AddType from "./AddType.vue";
import DeleteType from "./DeleteType.vue";
import EditType from "./EditType.vue";

export default defineComponent({
  components: {
    AddType,
    DeleteType,
    EditType,
  },

  data() {
    return {
      type: null,
      index: null,
      isAddType: false,
      isDeleteModal: false,
      isEditModal: false,
    };
  },

  computed: {
    types() {
      let typeslist = this.$store.getters.getTypes;
      console.log(typeslist,"typeslist");
      return typeslist;
    },
  },

  methods: {
    showModal() {
      this.$refs["my-modal"].show();
      this.isAddType = true;
    },

    editModal(type, index) {
      this.type = type;
      this.index = index;
      this.$refs["edit-modal"].show();
      this.isEditModal = true;
    },

    deleteModal(type, index) {
      this.type = type;
      this.index = index;
      this.$refs["delete-modal"].show();
      this.isDeleteModal = true;
    },

    hideAddTypeModal() {
      this.isAddType = false;
    },
    hideEditModal() {
      this.isEditModal = false;
    },
    hideDeleteModal() {
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
    