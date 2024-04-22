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
            <div class="d-none d-md-block col-4 align-self-center text-center">
              <img id="blah" src="#" alt=""/><br/>
              <input type="file" name="AddImage" id="AddImage" accept="image/*"/>
            </div>
          </div>
          <div class="row">
            <div class="col сol-button">
              <a href="#">Додати Курс</a>
            </div>
          </div>
        </div>
        <div>
          <div class="row mt-5">
            <div class="col-12"><h2 class="h4 text-center">Основи JavaScript</h2></div>
          </div>
          <div class="row">
            <div class="col-12 mt-4">
              <ul class="list-group">
                <li class="list-group-item d-flex p-3"><a class="stretched-link text-decoration-none"
                                                          href="/ru/languages/javascript/lessons/hello-world">1. Привіт,
                  Світ!</a></li>
                <li class="list-group-item d-flex p-3"><a class="stretched-link text-decoration-none"
                                                          href="/ru/languages/javascript/lessons/comments">2.Використання
                  коментарів у коді</a></li>
                <li class="list-group-item d-flex p-3"><a class="stretched-link text-decoration-none"
                                                          href="/ru/languages/javascript/lessons/basic">3.
                  Арифметичні операції</a></li>
                <li class="list-group-item d-flex p-3"><a class="stretched-link text-decoration-none"
                                                          href="/ru/languages/javascript/lessons/operator">4.
                  Оператори</a></li>

                <li class="list-group-item d-flex p-3"><a class="stretched-link text-decoration-none"
                                                          href="/ru/languages/javascript/lessons/definition">5. Що таке
                  змінна
                </a></li>
                <li class="list-group-item d-flex p-3"><a class="stretched-link text-decoration-none"
                                                          href="/ru/languages/javascript/lessons/errors">6. Помилки при
                  роботі з змінною</a></li>
                <li class="list-group-item d-flex p-3"><a class="stretched-link text-decoration-none"
                                                          href="/ru/languages/javascript/lessons/variable-concatenation">7.
                  Змінні та конкатенація</a></li>
                <li class="list-group-item d-flex p-3"><a class="stretched-link text-decoration-none"
                                                          href="/ru/languages/javascript/lessons/magic-numbers">8.
                  Магічні числа</a></li>
                <li class="list-group-item d-flex p-3"><a class="stretched-link text-decoration-none"
                                                          href="/ru/languages/javascript/lessons/constants">9.
                  Константи</a></li>
                <li class="list-group-item d-flex p-3"><a class="stretched-link text-decoration-none"
                                                          href="/ru/languages/javascript/lessons/interpolation">10.
                  Інтерполяція</a></li>
                <li class="list-group-item d-flex p-3"><a class="stretched-link text-decoration-none"
                                                          href="/ru/languages/javascript/lessons/primitive-data-types">11.
                  Типи даних</a></li>
                <li class="list-group-item d-flex p-3"><a class="stretched-link text-decoration-none"
                                                          href="/ru/languages/javascript/lessons/call">12. Функції та їх
                  використання</a></li>

                <li class="list-group-item d-flex p-3"><a class="stretched-link text-decoration-none"
                                                          href="/ru/languages/javascript/lessons/logical-operators">13.
                  Логічні оператори</a></li>
                <li class="list-group-item d-flex p-3"><a class="stretched-link text-decoration-none"
                                                          href="/ru/languages/javascript/lessons/properties-syntax">14.
                  Властивості</a></li>
                <li class="list-group-item d-flex p-3"><a class="stretched-link text-decoration-none"
                                                          href="/ru/languages/javascript/lessons/properties-methods">15.
                  Методи</a></li>
                <li class="list-group-item d-flex p-3"><a class="stretched-link text-decoration-none"
                                                          href="/ru/languages/javascript/lessons/define-functions-syntax">16.
                  Створення (визначення) функцій</a></li>
              </ul>

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

export default {
  name: 'AddCoursesPage',
  data() {
    return {
      courses: []
    }
  },
  mounted() {
    axios
        .get('http://localhost:3000/courses')
        .then(res => {
          // console.log('res: ', res);
          this.courses = res.data
        })
        .catch(error => {
          console.log('Error fetching courses from the server: ', error)
        })
  },
  components: {
    RelatedCourseList
  },

  methods: {
    readURL(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }
}

let blocks = document.querySelectorAll(".related-course .col");

let lastThreeBlocks = Array.from(blocks).slice(0, 3);
lastThreeBlocks.forEach(function (block) {
  block.style.display = "none"
})
</script>