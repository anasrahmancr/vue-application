export const state = () => ({
  formData: {
    name: "",
    type: "",
    category: "",
    email: "",
    mobileNumber: "",
    address: "",
    zipCode: "",
    isCertified: false,
    gstNo: "",
  },

  items: [],

  types: []

});


export const mutations = {

  // Form Mutations 
  UPDATE_FORM_DATA(state, payload) {
    state.formData = { ...state.formData, ...payload };
  },

  CLEAR_FORM_DATA(state) {
    state.formData = {
      name: "",
      type: "",
      category: "",
      email: "",
      mobileNumber: "",
      address: "",
      zipCode: "",
      isCertified: false,
      gstNo: "",
    };
  },

  // Category Mutations 
  ADD_CATEGORY(state, category) {
    console.log(state, "state", category, "category");
    state.items.push(category);
  },

  DELETE_CATEGORY(state, index) {
    state.items.splice(index, 1);
  },

  UPDATE_CATEGORY(state, { updateCategory, updateIndex }) {
    console.log(updateCategory, updateIndex, "check mutations");
    state.items[updateIndex].name = updateCategory;
  },

  // Types Mutations

  ADD_TYPE(state, type) {
    console.log(state, "state", type, "type");
    state.types.push(type);
  },

  DELETE_TYPE(state, index) {
    state.types.splice(index, 1);
  },

  UPDATE_TYPE(state, { updateType, updateIndex }) {
    console.log(updateType, updateIndex, "check mutations");
    state.types[updateIndex].name = updateType;
  }
};


export const actions = {
  // SubmitForm Action 
  async submitForm({ commit }, data) {
    commit('UPDATE_FORM_DATA', data);
  },

  // Category Actions 
  async addCategory({ commit }, category) {
    commit('ADD_CATEGORY', category);
  },

  async deleteCategory({ commit }, index) {
    commit('DELETE_CATEGORY', index);
  },

  async updateCategory({ commit }, { updateCategory, updateIndex }) {
    console.log(updateCategory, updateIndex, "check action");
    commit('UPDATE_CATEGORY', { updateCategory, updateIndex });
  },


  // Type Actions
  async addType({ commit }, type) {
    commit('ADD_TYPE', type);
  },

  async deleteType({ commit }, index) {
    commit('DELETE_TYPE', index);
  },

  async updateType({ commit }, { updateType, updateIndex }) {
    console.log(updateType, updateIndex, "check action");
    commit('UPDATE_TYPE', { updateType, updateIndex });
  }

}


export const getters = {

  // formData Getter 
  getFormData: (state) => state.formData,

  // Category Getter 
  getCategories: (state) => state.items,

  // Type Getter 
  getTypes: (state) => state.types,

};

