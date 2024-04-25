<template>
  <span class="me-1">{{this.index + 1}}.</span>
  <input type="text" class="col" v-model="this.$props.paragraphs[this.$props.index].title" placeholder="Назва параграфа"/>
  <img v-if="this.$props.paragraphs.length > 1" src="/img/trash_icon.png" width="28" height="28" class="ms-2 img-thumbnail" alt="trash" @click="removeParagraph">
</template>
<script>
export default {
  name: 'EditCourseParagraph',
  props: {
    paragraphs: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeParagraph() {
      const index = this.$props.index;
      console.log('Remove paragraph with index: ', index);
      this.$props.paragraphs.splice(index, 1);

      const length = this.$props.paragraphs.length;
      this.$props.paragraphs[length -1].selected = true;
    }
  }
}
</script>
<style scoped>

.list-group li {
  cursor: pointer;
}

</style>