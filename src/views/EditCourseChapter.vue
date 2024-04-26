<template>
  <div>
    <div class="row mt-5 сol-input-info">
      <div class="col-12 d-flex justify-content-between align-items-center">
        <input v-model="this.$props.chapter.title" id="chapterTitle" placeholder="Введіть назву розділа"/>
        <img v-if="this.$props.canBeDeleted" @click="this.$emit('removeChapter', this.$props.index)" src="/img/trash_icon.png" width="32" height="32" class="ms-2 img-thumbnail" alt="trash">
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-3 mt-4">
        <ul class="list-group">
          <EditChapterParagraph v-for="(paragraph, index) of this.$props.chapter.paragraphs" :key="index"
                                :index="index"
                                :paragraph="paragraph"
                                :chapter-paragraphs="this.$props.chapter.paragraphs"
                                :select-paragraph="selectParagraph"
          />
          <li class="list-group-item d-flex justify-content-center" @click="addParagraph">
            <img src="/img/plus_icon.png" class="img-thumbnail" width="28" height="28">
          </li>
        </ul>
      </div>
      <div class="col сol-input-info mt-4">
        <TextEditor v-bind:selectedParagraphContent="selectedParagraphContent"/>
      </div>
    </div>
  </div>
</template>
<script>
import EditChapterParagraph from "@/components/course/EditChapterParagraph.vue"
import TextEditor from '@/components/parts/TextEditor.vue'

export default {
  name: 'EditCourseChapter',
  components: {EditChapterParagraph, TextEditor},
  computed: {
    selectedParagraphContent () {
      const paragraphs = this.$props.chapter.paragraphs;
      let selectedIndex = paragraphs.findIndex((paragraph) => paragraph.selected);
      return paragraphs[selectedIndex];
    }
  },
  props: {
    chapter: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    canBeDeleted: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    deselectChapterParagraphs() {
      this.$props.chapter.paragraphs.forEach(paragraph => {
        paragraph.selected = false
      })
    },
    addParagraph: function () {
      this.deselectChapterParagraphs();

      this.$props.chapter.paragraphs.push({
        title: '',
        text: '',
        selected: true,
      });
    },
    selectParagraph: function (index) {
      this.deselectChapterParagraphs()
      this.$props.chapter.paragraphs[index].selected = true;
    },
  }
}
</script>
<style scoped>

.list-group li {
  cursor: pointer;
}

</style>