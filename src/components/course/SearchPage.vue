<script>
import CourseList from "@/components/course/CourseList.vue";

export default {
  name: "SearchPage",
  components: {CourseList}
}
</script>

<template>
  <main class="flex-grow-1">
    <div class="mt-sm-5 mb-5">
      <div class="container banner">
        <div class="banner-wrap align-items-center border shadow bg-white rounded-3">
          <div class="row">
            <div class="col-12 p-5"><h1 class="h4 text-muted text-center">Навчаємо програмування з нуля!</h1>
              <div class="display-4 fw-bold lh-1 mb-3 justify-content-center text-center">Вивчайте програмування
                &nbsp;<span class="text-primary"><span
                    class="hero-header">БЕЗКОШТОВНО</span><span class="typed-cursor"
                                                                aria-hidden="true">|</span></span></div>
              <p class="lead text-center">Front End – це зовнішня сторона будь-якої програмної системи чи програми, те,
                що бачить і з чим взаємодіє користувач. Розробка front end – одна з найцікавіших та творчих галузей
                програмування.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-center"><a
                  class="btn btn-primary btn-lg px-4 me-md-2 fw-bold" href="#courses">Почати зараз!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-5 pb-5">
      <CourseList v-bind:courses="courses"/>
    </div>
  </main>
</template>

<style scoped>

</style>