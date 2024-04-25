<template>
  <main class="flex-grow-1 add-courses-page">
    <div class="mt-sm-4">
      <div class="container">
        <EditCourseBanner :course-image-url="courseImageUrl" @change-course-image-url="(url) => this.courseImageUrl = url"/>
        <EditCourseChapter :add-paragraph="addParagraph" :chapter-paragraphs="chapterParagraphs"
                      :select-paragraph="selectParagraph" :selected-paragraph-content="selectedParagraphContent"/>
      </div>
    </div>
  </main>
</template>

<script>

import axios from 'axios';

import EditCourseBanner from "@/components/course/EditCourseBanner.vue";
import EditCourseChapter from "@/views/EditCourseChapter.vue";

export default {
  name: 'AddCoursesPage',
  computed: {
    selectedParagraphContent () {
      let selectedIndex = this.chapterParagraphs.findIndex((paragraph) => paragraph.selected);
      return this.chapterParagraphs[selectedIndex];
    }
  },
  data() {
    return {
      course: {

      },
      courseImageUrl: '/img/add_image.jpg',
      chapterParagraphs: [
        {
          title: '',
          text: '',
          selected: true,
        },
      ]
    }
  },
  mounted() {
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
  components: {
    EditCourseChapter,
    EditCourseBanner
  },

  methods: {
    deselectChapterParagraphs() {
      this.chapterParagraphs.forEach(paragraph => {
        paragraph.selected = false
      })
    },
    addParagraph: function () {
      this.deselectChapterParagraphs();

      this.chapterParagraphs.push({
        title: '',
        text: '',
        selected: true,
      });
    },
    selectParagraph: function (index) {
      this.deselectChapterParagraphs()
      this.chapterParagraphs[index].selected = true;
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