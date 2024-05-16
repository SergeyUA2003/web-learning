<template>
  <main class="flex-grow-1 add-courses-page">
    <div class="mt-sm-4">
      <div class="container">
        <EditCourseBanner :course-image-url="course.courseImageUrl"
                          :save-course="this.addCourse"
                          @change-course-image-url="(url) => course.courseImageUrl = url"
                          @set-course-name="(name) => course.name = name"
                          @set-course-description="(description) => course.description = description"
                          @set-course-duration="(duration) => course.duration = duration"
                          :save-course-text="'Додати Курс'"/>
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
        courseImageUrl: '/img/add_image.jpg',
        duration: '',
        chapters: [
          this.createChapter(),
        ]
      },
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
      //TODO add validation...
      const body = JSON.parse(JSON.stringify(this.course));
      body.chapters.forEach(chapter => {
        chapter.paragraphs.forEach(paragraph => {
          delete paragraph.selected;
        });
      });

      console.log("Adding course: ", body);
      axios
          .post('http://localhost:3000/courses', body)
          .then(res => {
            if (res.status === 201) {
              const data = res.data;
              console.log("Successfully added course: ", data);
              this.$router.push('/courses/' + data.id);
            }
          })
          .catch(err => console.log("Error adding course: ", err));
    }
  }
}
</script>

<style scoped>

.list-group li {
  cursor: pointer;
}

</style>