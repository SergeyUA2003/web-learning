<script>
import EditCourseChapter from "@/views/EditCourseChapter.vue";
import EditCourseBanner from "@/components/course/EditCourseBanner.vue";
import axios from "axios";

export default {
  name: 'EditCoursePage',
  data() {
    return {
      course: {},
    }
  },
  mounted() {
    const id = this.$route.params.id;
    axios
        .get('http://localhost:3000/courses/' + id)
        .then(res => {
          console.log('res: ', res)
          this.course = res.data
          this.selectLastParagraph(this.course);
          console.log(this.course);
        })
        .catch(err => console.log(`Error fetching course width id: ${id} from the server: `, err))
  },
  components: {
    EditCourseChapter,
    EditCourseBanner
  },

  methods: {
    addChapter() {
      this.course.chapters.push(this.createChapter());
    },
    removeChapter(index) {
      this.course.chapters.splice(index, 1);
    },

    selectLastParagraph (course) {
      course.chapters.forEach(chapter => {
        chapter.paragraphs.forEach((paragraph, index) => {
          if (index === chapter.paragraphs.length - 1) {
            paragraph.selected = true;
          }
          else  {
           paragraph.selected = false;
          }
        });
      });
    },

    createChapter() {
      return {
        title: '',
        paragraphs: [
          {
            title: '',
            text: '',
            selected: true,
          }
        ]
      };
    },

    saveCourse() {
      //TODO add validation...
      const body = JSON.parse(JSON.stringify(this.course));
      body.chapters.forEach(chapter => {
        chapter.paragraphs.forEach(paragraph => {
          delete paragraph.selected;
        });
      });

      console.log("Updating course: ", body);
      axios
          .put(`http://localhost:3000/courses/${this.course.id}`, body)
          .then(res => {
            if (res.status === 200) {
              const data = res.data;
              console.log("Successfully updated course: ", data);
              this.$router.push('/course/' + data.id);
            }
          })
          .catch(err => console.log("Error updating course: ", err));
    }
  }
}


</script>

<template>
<div><h1 class="d-flex text-center m-1-auto justify-content-center title-edit-course">Редагування Курсу</h1></div>
  <main class="flex-grow-1 add-courses-page">
    <div class="mt-sm-4">
      <div class="container">
        <EditCourseBanner :course-image-url="course.courseImageUrl"
                          :save-course="this.saveCourse"
                          @change-course-image-url="(url) => course.courseImageUrl = url"
                          @set-course-name="(name) => course.name = name"
                          @set-course-description="(description) => course.description = description"
                          @set-course-duration="(duration) => course.duration = duration"
                          :save-course-text="'Редагувати Курс'"
                          :course-name="`${course.name}`"
                          :course-description="`${course.description}`"
                          :course-duration="`${course.duration}`"

        />
        <EditCourseChapter v-for="(chapter, index) of this.course.chapters" :key="chapter.id"
                           :chapter="chapter" :index="index"
                           :can-be-deleted="this.course.chapters.length > 1" @remove-chapter="(i) => this.removeChapter(i)"

        />
        <div class="row d-flex justify-content-center mb-3">
          <button class="col-auto btn btn-outline-primary" @click.prevent="addChapter">Додати розділ</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>