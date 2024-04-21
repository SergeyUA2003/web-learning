<template>
  <footer class="text-light flex-shrink-0">
    <div class="container-xl pt-5 pb-3">
      <div class="col d-flex">
        <div class="col mb-4 mb-lg-0 d-flex flex-column">
          <div class="col justify-content-center m-auto pb-4">
            <img src="/img/Logo.png" alt="Logo" width="150px">
          </div>
          <div class="col justify-content-center m-auto">
            <h2 class="title-footer">Всі Курси</h2>
          </div>
          <div class="row d-flex flex-row">
            <div class="col d-flex justify-content-center m-auto">
              <ul class="list-courses lh-lg d-flex">
                <li><a class="text-decoration-none text-light"
                       href="/ru/languages/javascript">JavaScript</a></li>
                <li><a class="text-decoration-none text-light" href="/ru/languages/html">HTML</a></li>
                <li><a class="text-decoration-none text-light" href="/ru/languages/css">CSS</a></li>
                <li><a class="text-decoration-none text-light" href="/ru/languages/php">PHP</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="d-flex justify-content-center"><p class="mt-2 mb-2 me-4 flex-shrink-0 text-center">Created by Serhii Dudarko, 2024</p></div>
    </div>
  </footer>

</template>
<script>
export default {
  name: "NavFooter",
}
</script>