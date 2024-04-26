<template>
  <div class="px-3 px-sm-5 py-4 py-sm-5 mb-4 bg-white rounded-3 shadow-sm border" itemscope="">
    <div class="row">
      <div class="col сol-input-info">
        <input type="text" placeholder="Введіть назву курсу" v-on:change="(event) => this.$emit('setCourseName', event.target.value)">
        <textarea type="text" placeholder="Введіть опис курсу" v-on:change="(event) => this.$emit('setCourseDescription', event.target.value)"></textarea>
        <div class="text-muted lead mb-5">
          <span class="text-nowrap me-4">
            <span class="bi bi-clock me-2">
              <input type="text" placeholder="Кількість годин" v-on:change="(event) => this.$emit('setCourseDuration', event.target.value)"/>
            </span>
          </span>
        </div>
      </div>
      <div class="d-md-block col-auto text-center">
        <input type="file" name="AddCourseImage" id="AddImage" accept="image/*" @change="readURL" hidden/>
        <label for="AddImage" id="courseImageLabel">
          <img id="courseImage" class="img-thumbnail" width="225" height="225" alt="word picture" :src="courseImageUrl">
        </label>
      </div>
    </div>
    <div class="row">
      <div class="col сol-button">
        <button class="btn btn-primary" @click.prevent="this.$props.addCourse">Додати Курс</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EditCourseBanner',
  data() {

  },
  props: {
    courseImageUrl: {
      type: String,
      required: true
    },
    addCourse: {
      type: Function,
      required: true
    }
  },
  methods: {
    readURL(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.$emit('changeCourseImageUrl', reader.result);
        };
        reader.readAsDataURL(file);
      }
    },
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