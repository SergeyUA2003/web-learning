<template>
  <main class="flex-grow-1 add-courses-page">
    <div class="mt-sm-4">
      <div class="container">
        <EditCourseBanner :add-course-image-url="addCourseImageUrl" @change-course-image-url="(url) => this.addCourseImageUrl = url"/>
        <div>
          <div class="row mt-5 сol-input-info">
<!--            <div class="col-12"><h2 class="h4 text-center">Основи JavaScript</h2></div>-->
            <div class="col-12 d-flex justify-content-center">
              <input id="chapterName" placeholder="Введіть назву розділа"/>
            </div>
          </div>
          <div class="row">
            <div class="col-3 mt-4">
              <ul class="list-group">
                <EditChapterParagraph v-for="(paragraph, index) of chapterParagraphs" :key="index"
                                    :index="index"
                                    :paragraph="paragraph"
                                    :chapter-paragraphs="chapterParagraphs"
                                    :select-paragraph="selectParagraph"
                />
                <li class="list-group-item d-flex justify-content-center" @click="addParagraph">
                  <img src="/img/plus_icon.png" class="img-thumbnail" width="28" height="28">
                </li>
              </ul>
            </div>
            <div class="col сol-input-info mt-4">
              <TextEditor v-bind:selectedParagraphContent="selectedParagraphContent"/>
            </div>
          </div>
          <div class="mb-5 mt-5 pb-5">
            <div class="container-title">
              <h2>З Цими курсами переглядають</h2>
            </div>
            <RelatedCourseList v-bind:courses="courses"/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import axios from 'axios';
import TextEditor from '@/components/parts/TextEditor.vue'

import RelatedCourseList from '@/components/course/RelatedCourses.vue';
import EditCourseBanner from "@/components/course/EditCourseBanner.vue";
import EditChapterParagraph from "@/components/course/EditChapterParagraph.vue";

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
      courses: [],
      addCourseImageUrl: '/img/add_image.jpg',
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
    EditChapterParagraph,
    EditCourseBanner,
    RelatedCourseList,
    TextEditor
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