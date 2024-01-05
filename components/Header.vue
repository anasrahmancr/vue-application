<template>
    <header class="header">
      <div class="container">
        <h1>{{ this.$t('header.vendorManagement') }}</h1>
        <nav>
          <ul>
            <li><nuxt-link to="/">{{ this.$t('header.home') }}</nuxt-link></li>
            <li><nuxt-link to="/profile">{{ this.$t('header.profile') }}</nuxt-link></li>
            <li><nuxt-link to="/admin">{{ this.$t('header.admin') }}</nuxt-link></li>
            <li class="language-dropdown">
            <select v-model="selectedLanguage" @change="changeLanguage">
              <option value="en">English</option>
              <option value="es">Espanol</option>
              <option value="pt">Portugese</option>
            </select>
          </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
      selectedLanguage: this.$i18n.locale,
    };

    },

  methods: {
    changeLanguage() {
      this.$i18n.setLocale(this.selectedLanguage);
    },
  },
  };
  </script> 

  <style scoped>
  .header {
    background-color: #3e7cba;
    color: #ffffff;
    padding: 15px 0;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
    display: flex;
  }
  
  nav li {
    margin-right: 20px;
  }
  
  nav a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
  }

  .language-dropdown select {
  background-color: #3e7cba;
  color: #ffffff;
  border: none;
  padding: 2px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
}
  </style>
  