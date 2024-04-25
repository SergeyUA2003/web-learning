<template>
  <div class="px-3 px-sm-5 py-4 py-sm-5 mb-4 bg-white rounded-3 shadow-sm border" itemscope="">
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
          <img id="courseImage" width="225" height="225" :src="addCourseImageUrl" class="img-thumbnail"
               alt="word picture">
        </label>
      </div>
    </div>
    <div class="row">
      <div class="col сol-button">
        <a href="#">Додати Курс</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EditCourseBanner',
  props: {
    addCourseImageUrl: {
      type: String,
      required: true
    },
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