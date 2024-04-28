<script>

import {isAdmin} from "@/authorization.js";
export default {
  name: "ViewCourseBanner",
  props: {
    course: {
      type: Object,
      required: true
    }
  },

  methods : {
    isAdmin
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
        <a class="btn btn-lg btn-primary px-4 mb-3 mt-2 me-4"
           href="#">
          Розпочати навчання
        </a>
        <a class="btn btn-lg btn-primary px-4 mb-3 mt-2 me-4" v-if="this.isAdmin()"
           :href="`/course/${course.id}/edit`">
          Редагувати Курс
        </a>
      </div>
      <div class="d-md-block col-auto text-center">
        <input type="file" name="AddCourseImage" id="AddImage" accept="image/*" hidden/>
        <label for="AddImage" id="courseImageLabel">
          <img id="courseImage" width="225" height="225" :src="course.courseImageUrl" class="img-thumbnail"
               alt="word picture">
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>