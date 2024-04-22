<template>
  <div class="row gx-2 row-cols-lg-4 align-items-stretch justify-content-center related-course">
    <CourseItem v-for="(course, index) of courses.slice(0, 4)" :key="index" :course="course"/>
  </div>
</template>

<script>
import CourseItem from "@/components/CourseItem.vue";
export default {
  name: 'RelatedCourseList',
  props: ['courses'],
  components: {
    CourseItem
  }
}
</script>