

<template>
  <div class="container-user">
    <div class="container-authorized" v-if="this.isLoggedIn()">
      <div class="row-user-parameters">
        <ul class="user-list">
          <li class="email">Email: {{this.getAuthorizationUser().email}}</li>
          <li class="name">Name: {{this.getAuthorizationUser().name}}</li>
          <li class="name_roles">Roles: {{this.getAuthorizationUser().roles}}</li>
        </ul>
      </div>
      <div class="container-courses-list">
        <h2>My Courses</h2>
        <p>{{this.getAuthorizationUser().enrolledCourses}}</p>
      </div>
      <div class="container-courses-enrolled">
        <h2>Enrolled Courses</h2>
      </div>
      <div class="row-button-edit-save">
      </div>
    </div>

    <div class="container-non-authorized" v-else>
      <h1>User is not Authorized!</h1>
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