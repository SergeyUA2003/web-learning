<script>
import axios from 'axios';

import {isAdmin} from "@/authorization.js";
export default {
  name: "ViewCourseBanner",
  props: {
    course: {
      type: Object,
      required: true
    }
  },

  methods: {
    isAdmin,
    enrollCourse: function () {
      let authorization = this.$store.getters.getAuthorization;
      let user = this.$store.getters.getAuthorizationUser;
      // var button = document.getElementById("start-training");
      var divs = document.querySelectorAll("div[data-v-76b14389]");
      var testbutton = document.querySelectorAll(".test-button")
      var modal = document.getElementById("myModal");
      console.log(modal);
      var closeButton = document.getElementsByClassName("close")[0];
      console.log(closeButton);
      var buttonCheck = document.getElementsByClassName("button-check")[0];
      console.log(buttonCheck);

      divs.forEach(function(div) {
        div.style.opacity = "1";
      });

      testbutton.forEach(function(div) {
        div.style.opacity = "1";
      });

      if (!user) {
        console.error("User is not defined");
        return;
      }

      if (!user.enrolledCourses) {
        console.error("enrolledCourses is not defined for the user");
        user.enrolledCourses = []; // Initialize it as an empty array if it's not defined
      }

      let filtered = user.enrolledCourses.filter(item => item.courseId === this.course.id);

      if (filtered.length === 0) {
        user.enrolledCourses.push({
          "courseId": this.course.id,
          "progress": 0
        });

        axios.patch("http://localhost:3000/users/" + user.id, {
          headers: {
            "Authorization": authorization
          },
          enrolledCourses: user.enrolledCourses
        }).then(response => {
          console.log("Update User", response.data);
        }).catch(error => {
          console.error("Error updating user", error);
        });
      }
    }
  }
}

</script>

<template>
  <div class="px-3 px-sm-5 py-4 py-sm-5 mb-4 bg-white rounded-3 shadow-sm border" itemscope="">
    <div class="row">
      <div class="col">
        <div class="badge border text-dark small">Безкоштовний курс</div>
        <h1 class="fw-bold" itemprop="name">{{course.name}}</h1>
        <p class="col-md-10 fs-5">{{course.description}}
        </p>
        <div class="text-muted lead mb-5">
          <span class="text-nowrap me-4">{{course.duration}}</span>
        </div>
        <a class="btn btn-lg btn-primary px-4 mb-3 mt-2 me-4 start-training"
           href="#" @click="this.enrollCourse()"> Розпочати навчання
        </a>
        <router-link class="btn btn-lg btn-primary px-4 mb-3 mt-2 me-4" v-if="this.isAdmin()"
           :to ="`/course/${course.id}/edit`">
          Редагувати Курс
        </router-link>
        <router-link class="btn btn-lg btn-primary px-4 mb-3 mt-2 me-4 test-button"
                     :to ="`/test`">
          Тестування
        </router-link>
      </div>
      <div class="d-md-block col-auto text-center">
        <input type="file" name="AddCourseImage" id="AddImage" accept="image/*" hidden/>
        <label for="AddImage" id="courseImageLabel">
          <img id="courseImage" width="224" height="225" :src="course.courseImageUrl" class="img-thumbnail"
               alt="word picture">
        </label>
      </div>
    </div>
  </div>
</template>