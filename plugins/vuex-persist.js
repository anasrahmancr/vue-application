import VuexPersistence from 'vuex-persist';
export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: 'vendorManagement',
      storage: window.localStorage,
    }).plugin(store);
  });
};