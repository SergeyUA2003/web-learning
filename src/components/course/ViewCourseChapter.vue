<template>
  <div>
    <div class="row mt-5 сol-input-info">
      <div class="col-12">
        <h2 class="h4 text-center" id="use-to-courses">{{ this.$props.chapter.title }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-3 mt-4">
        <ul class="list-group">
          <ViewChapterParagraph v-for="(paragraph, index) of this.$props.chapter.paragraphs" :key="index"
                                :index="index"
                                :paragraph="paragraph"
                                :select-paragraph="selectParagraph"
          />
        </ul>
      </div>
      <div class="col сol-input-info mt-4" v-html="selectedParagraphContent">
      </div>
    </div>
  </div>
</template>
<script>
import ViewChapterParagraph from '@/components/course/ViewChapterParagraph.vue'

export default {
  name: 'ViewCourseChapter',
  components: {
    ViewChapterParagraph: ViewChapterParagraph,
  },
  data() {
    return {
      selectedParagraphContent: this.getParagraphContent(0),
    }
  },
  props: {
    chapter: {
      type: Object,
      required: true
    },
  },
  methods: {
    selectParagraph: function (index) {
      this.changeParagraphContent(index);
    },
    changeParagraphContent: function (index) {
      this.selectedParagraphContent = this.getParagraphContent(index);
    },
    getParagraphContent (index) {
      const chapter = this.$props.chapter;
      return chapter.paragraphs[index].text ?? '';
    }
  }
}
</script>
<style scoped>
span {
  line-height: 2.5 !important;
}
</style>