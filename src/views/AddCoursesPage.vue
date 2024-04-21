<template>
  <main class="flex-grow-1 new-course">
    <div class="mt-sm-5 mb-5">
      <div class="container justify-content-center text-center">
        <h1 class="text-alight-center">Додати новий курс</h1>
      </div>
      <div class="container container-content">
        <div id="courses-body-content">
          <div id="title_div">
            <div id="title_wrap">
              <input type="text" name="course_title" size="30" value="" id="title" spellcheck="true"
                     autocomplete="off" placeholder="Введіть назву курсу">
            </div>
          </div>
          <div id="app">
            <div class="post-form justify-content-center text-center">
              <div class="container-img">
                <h3>Виберіть фото</h3>
                <img id="blah" src="/public/img/CSS.jpg" alt=""/><br/>
                <input type="file" name="AddImage" id="AddImage" accept="image/*"/>
              </div>
              <div class="container-publish">
                <button type="button">Опублікувати</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
</script>