<template>
  <header class="container mb-4 flex-shrink-0">
    <div class="pb-2 pt-2 border-bottom">
      <div class="navbar navbar-expand-md navbar-light">
        <div class="container-fluid">
          <router-link class="navbar-brand me-md-4" to="/">
            <img width="60" alt="WP logo" src="/img/Logo.png" loading="lazy">
            <span>Web Learning</span>
          </router-link>
          <input class="col-6" type="text" name="Search" id="search" placeholder="Пошук курсів">
          <router-link to="your_page_url_here" class="header-search">Пошук</router-link>
          <div class="collapse navbar-collapse justify-content-end" id="navbarToggler">
            <ul v-if="this.isLoggedIn()" class="navbar-nav">
              <li class="user-name">
                <span>Вітаємо, </span><router-link to="/user">{{this.getAuthorizationUser().name}}</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="logout" href="#">Вихід</a>
              </li>
            </ul>
            <ul v-else class="navbar-nav">
              <li class="nav-item"><router-link class="nav-link" to="/login">Вхід</router-link></li>
              <li class="nav-item"><router-link class="nav-link me-3 " to="/registration">Реєстрація</router-link></li>
              <li class="nav-item dropdown">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import {isLoggedIn, getAuthorizationUser} from "@/authorization.js";

export default {
  name: 'NavHeader',

  methods: {
    logout: function() {
      this.$store.commit('removeHeader', { name: 'Authorization' });
      this.$router.push('/login');
    },
    isLoggedIn,
    getAuthorizationUser
  }
}

</script>