<template>
  <div class="container container-courses">
    <div class="mb-5">
      <div class="d-flex flex-column align-items-start mb-5 list-button-courses">
        <div class="d-flex flex-wrap">
          <a class="mb-2 mb-sm-0 me-2 me-sm-0 fw-light text-decoration-none fs-5 badge text-bg-light p-2 p-sm-3"
             href="/ru/language_categories/programming">Рекомендовані Курси</a>
          <router-link class="mb-2 mb-sm-0 me-2 me-sm-0 ms-sm-4 fw-light text-decoration-none fs-5 badge text-bg-light p-2 p-sm-3"
             to="/course/create">Додати новий курс</router-link>
        </div>
      </div>
      <h2 class="me-auto mb-3 mb-sm-0">
        <a class="text-decoration-none text-dark" href="#courses" id="courses">Курси</a>
      </h2>

      <div class="row gx-2 row-cols-lg-4 align-items-stretch justify-content-center">
        <CourseItem v-for="course of courses" :key="course.id" :course="course"/>
      </div>
    </div>
  </div>
</template>
<script>
import CourseItem from "@/components/CourseItem.vue";

export default {
  name: 'CourseList',
  props: ['courses'],
  components: {
    CourseItem
  }
}
</script>