<template>
  <div class="col">
    <div class="card h-100 shadow-sm border-0">
      <img class="card-img-top" :alt="'Іконка' + course.name"
           :src="course.photoUrl"
           loading="lazy">
      <div class="card-body">
        <div class="card-title h2"><a
            class="stretched-link text-dark text-decoration-none text-nowrap"
            href="/web-learning/courses/javascript.html">{{course.name}}</a></div>
        <div class="text-muted"><span class="text-nowrap d-inline-block me-4">{{course.duration}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CourseItem',
  props: {
    course: {
      type: Object,
      required: true
    }
  }
}
</script>