<template>
  <li class="list-group-item d-flex align-items-center p-3">
    <a class="stretched-link text-decoration-none" @click="selectParagraph(index)">
      {{index + 1}}. {{this.$props.paragraph.title}}
    </a>
  </li>
</template>
<script>
export default {
  name: 'ViewChapterParagraph',
  props: {
    paragraph: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    selectParagraph: {
      type: Function,
      required: true
    },
  },
}
</script>
<style scoped>

.list-group li {
  cursor: pointer;
}

</style>