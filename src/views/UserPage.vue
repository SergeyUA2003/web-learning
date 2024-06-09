

<template>
  <div class="container container-user">
    <h1 class="h4 text-muted text-center mb-3">Обліковий запис користувача {{this.getAuthorizationUser().name}}</h1>
    <div class="container-authorized" v-if="this.isLoggedIn()">
      <div class="row-user-parameters">
        <ul class="user-list">
          <li class="email">Email: {{this.getAuthorizationUser().email}}</li>
          <li class="name">Ім'я: {{this.getAuthorizationUser().name}}</li>
          <li class="name_roles">Ролі: {{this.getAuthorizationUser().roles}}</li>
        </ul>
      </div>
      <div class="container-courses-list">
        <h2 class="h4 text-muted text-center mb-3">Мої курси</h2>
<!--        <p class="courses-list">{{this.getAuthorizationUser().enrolledCourses}}</p>-->
        <img src="/img/Screenshot_22121.jpg" style="margin: 0 auto; display: flex; justify-content: center" alt="">
      </div>
<!--      <div class="container-courses-enrolled">-->
<!--        <h2>Зареєстровані курси</h2>-->
<!--      </div>-->
      <div class="row-button-edit-save">
      </div>
    </div>

    <div class="container-non-authorized" v-else>
      <h1>Користувач не авторизований!</h1>
    </div>
  </div>
</template>

<script>
import {isLoggedIn, getAuthorizationUser} from "@/authorization.js";


export default {
  name: "UserPage",

  methods: {
    isLoggedIn,
    getAuthorizationUser
  }
}
</script>