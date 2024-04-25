<script>
import axios from 'axios';
import ViewCourseBanner from '@/components/course/ViewCourseBanner.vue'
import RelatedCourseList from "@/components/course/RelatedCourses.vue";
import ViewSection from "@/views/ViewSection.vue";

export default {
  name: "ViewCoursePage.vue",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ViewSection,
    RelatedCourseList,
    ViewCourseBanner,
  },
  data() {
    return {
      courses: [],
      course: {}
    }
  },
  mounted() {
    const id = this.$route.params.id;
    axios
        .get('http://localhost:3000/courses/' + id)
        .then(res => {
          console.log('res: ', res)
          this.course = res.data
        })
        .catch(err => console.log(`Error fetching course width id: ${id} from the server: `, err))

    axios
        .get('http://localhost:3000/courses')
        .then(res => {
          // console.log('res: ', res);
          this.courses = Array.from(res.data).slice(0, 4)
        })
        .catch(error => {
          console.log('Error fetching courses from the server: ', error)
        })
  },
  methods: {
  }
}
</script>

<template>
  <main class="flex-grow-1 add-courses-page">
    <div class="mt-sm-4">
      <div class="container">
        <ViewCourseBanner v-bind:course="course"/>
        <ViewSection v-for="section of course.sections" :key="section.id" :section="section"/>
        <div class="mb-5 mt-5 pb-5">
          <div class="container-title">
            <h2>З Цими курсами переглядають</h2>
          </div>
          <RelatedCourseList v-bind:courses="courses"/>
        </div>
      </div>
    </div>
  </main>
</template>