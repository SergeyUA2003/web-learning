<template>
  <li class="list-group-item d-flex align-items-center p-3">
    <a v-if="!this.$props.paragraph.selected" class="stretched-link text-decoration-none" @click="selectParagraph(index)">{{index + 1}}.
      {{this.$props.paragraph.title}}
    </a>
    <InputCourseParagraph v-else :paragraphs="chapterParagraphs" :index="index"/>
  </li>
</template>
<script>
import InputCourseParagraph from "@/components/course/InputCourseParagraph.vue";
export default {
  name: 'EditSectionParagraph',
  props: {
    paragraph: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    chapterParagraphs: {
      type: Array,
      required: true
    },
    selectParagraph: {
      type: Function,
      required: true
    },
  },
  components: {
    InputCourseParagraph,
  }
}
</script>
<style scoped>

.list-group li {
  cursor: pointer;
}

</style>