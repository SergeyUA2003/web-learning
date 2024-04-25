<template>
  <div>
    <div class="row mt-5 сol-input-info">
      <div class="col-12">
        <h2 class="h4 text-center">{{this.$props.section.title}}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-3 mt-4">
        <ul class="list-group">
          <ViewSectionParagraph v-for="(paragraph, index) of this.$props.section.chapterParagraphs" :key="index"
                                :index="index"
                                :paragraph="paragraph"
                                :select-paragraph="selectParagraph"
          />
        </ul>
      </div>
      <div class="col сol-input-info mt-4">
        {{selectedParagraphContent}}
      </div>
    </div>
  </div>
</template>
<script>
import ViewSectionParagraph from '@/components/course/ViewSectionParagraph.vue'

export default {
  name: 'ViewSection',
  components: {
    ViewSectionParagraph,
  },
  data() {
    return {
      selectedParagraphContent: this.getParagraphContent(0),
    }
  },
  props: {
    section: {
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
      const section = this.$props.section;
      return section.chapterParagraphs[index].text ?? '';
    }
  }
}
</script>