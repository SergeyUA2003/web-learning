<template>
  <div>
    <div class="row mt-5 сol-input-info">
      <div class="col-12 d-flex justify-content-center">
        <input id="chapterName" placeholder="Введіть назву розділа"/>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-3 mt-4">
        <ul class="list-group">
          <EditChapterParagraph v-for="(paragraph, index) of chapterParagraphs" :key="index"
                                :index="index"
                                :paragraph="paragraph"
                                :chapter-paragraphs="chapterParagraphs"
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
  props: {
    addParagraph: {},
    chapterParagraphs: {},
    selectParagraph: {},
    selectedParagraphContent: {}
  }
}
</script>
<style scoped>

.list-group li {
  cursor: pointer;
}

</style>