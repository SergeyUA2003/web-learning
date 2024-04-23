<script setup>
import Editor from '@tinymce/tinymce-vue'
import { defineProps } from 'vue'

defineProps({
  selectedParagraphContent: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <editor
      v-model="this.$props.selectedParagraphContent.text"
      api-key="kci5m54983l2jcmfzhjpgba3wrhjsugab0xu6b5lsue0zpkc"
      :init="{
          toolbar_mode: 'sliding',
          plugins: 'lists link image table code help wordcount codesample',
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough codesample | checklist numlist bullist indent outdent | charmap | removeformat',
      }"
  />
</template>

<style scoped>

</style>