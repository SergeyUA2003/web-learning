<template>
  <main class="flex-grow-1 add-courses-page">
    <div class="mt-sm-4">
      <div class="container">
        <div class="px-3 px-sm-5 py-4 py-sm-5 mb-4 bg-white rounded-3 shadow-sm border" itemscope=""
             itemtype="http://schema.org/ImageObject">
          <div class="row">
            <div class="col сol-input-info">
              <input type="text" placeholder="Введіть назву курсу">
              <textarea type="text" placeholder="Введіть опис курсу"></textarea>
              <div class="text-muted lead mb-5">
                <span class="text-nowrap me-4">
                <span class="bi bi-clock me-2"><input type="text" placeholder="Кількість годин"></span>
                  </span>
              </div>
            </div>
            <div class="d-md-block col-auto text-center">
              <input type="file" name="AddCourseImage" id="AddImage" accept="image/*" @change="readURL" hidden/>
              <label for="AddImage" id="courseImageLabel">
                <img id="courseImage" width="225" height="225" :src="addCourseImageUrl" class="img-thumbnail" alt="word picture">
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col сol-button">
              <a href="#">Додати Курс</a>
            </div>
          </div>
        </div>
        <div>
          <div class="row mt-5 сol-input-info">
<!--            <div class="col-12"><h2 class="h4 text-center">Основи JavaScript</h2></div>-->
            <div class="col-12 d-flex justify-content-center">
              <input id="sectionName" placeholder="Введіть назву розділа"/>
            </div>
          </div>
          <div class="row">
            <div class="col-3 mt-4">
              <ul class="list-group">
                <li v-for="(paragraph, index) of chapterParagraphs" :key="index" class="list-group-item d-flex align-items-center p-3">
                  <a v-if="!paragraph.selected" class="stretched-link text-decoration-none" @click="selectParagraph(index)">{{index + 1}}. {{paragraph.title}}</a>
                  <EditCourseParagraph v-else :paragraphs="chapterParagraphs" :index="index"/>
                </li>
                <li class="list-group-item d-flex justify-content-center" @click="addParagraph">
                  <img src="/img/plus_icon.png" class="img-thumbnail" width="28" height="28">
                </li>
              </ul>
            </div>
            <div class="col сol-input-info mt-4">
              <textarea type="text" v-model="selectedParagraphContent.text" placeholder="Введіть опис параграфа..."></textarea>
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
import RelatedCourseList from '@/components/RelatedCourses.vue';
import EditCourseParagraph from "@/components/course/EditCourseParagraph.vue";

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
    EditCourseParagraph,
    RelatedCourseList
  },

  methods: {
    readURL(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.addCourseImageUrl = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
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
    }
  }
}
</script>

<style scoped>

#courseImage {
  cursor: pointer;
}

.list-group li {
  cursor: pointer;
}

</style>