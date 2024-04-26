<template>
  <main class="flex-grow-1 add-courses-page">
    <div class="mt-sm-4">
      <div class="container">
        <EditCourseBanner :course-image-url="courseImageUrl" @change-course-image-url="(url) => this.courseImageUrl = url"/>
        <EditCourseChapter v-for="(chapter, index) of this.course.chapters" :key="chapter.id"
                           :chapter="chapter" :index="index"
                           :can-be-deleted="this.course.chapters.length > 1" @remove-chapter="(i) => this.removeChapter(i)"

        />
        <div class="row d-flex justify-content-center mb-3">
          <button class="col-auto btn btn-outline-primary" @click.prevent="addChapter">Додати розділ</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import axios from 'axios';

import EditCourseBanner from "@/components/course/EditCourseBanner.vue";
import EditCourseChapter from "@/views/EditCourseChapter.vue";

export default {
  name: 'AddCoursesPage',
  data() {
    return {
      course: {
        name: '',
        description: '',
        courseImageUrl: '',
        duration: '',
        chapters: [
          this.createChapter(),
        ]
      },
      courseImageUrl: '/img/add_image.jpg',
    }
  },
  components: {
    EditCourseChapter,
    EditCourseBanner
  },

  methods: {
    addChapter() {
      this.course.chapters.push(this.createChapter());
    },
    removeChapter(index) {
      this.course.chapters.splice(index, 1);
    },
    createChapter() {
      return {
        title: '',
        paragraphs: [
          {
            title: '',
            text: '',
            selected: true,
          }
        ]
      };
    },
    addCourse() {

    }
  }
}
</script>

<style scoped>

.list-group li {
  cursor: pointer;
}

</style>