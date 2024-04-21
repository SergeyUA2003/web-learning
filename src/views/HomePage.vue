<template>
  <main class="flex-grow-1">
    <div class="mt-sm-5 mb-5">
      <div class="container banner">
        <div class="banner-wrap align-items-center border shadow bg-white rounded-3">
          <div class="row">
            <div class="col-12 p-5"><h1 class="h6 text-muted text-center">Безкоштовні Курси Web
              Програмування для початківців</h1>
              <div class="display-4 fw-bold lh-1 mb-3 justify-content-center text-center">Вивчай &nbsp;<span class="text-primary"><span
                  class="hero-header">JS</span><span class="typed-cursor"
                                                     aria-hidden="true">|</span></span></div>
              <p class="lead text-center">Вивчення основ веб-програмування для новачків. Використання онлайн-курсів з
                можливістю виконання вправ безпосередньо у веб-браузері. Практичні завдання доступні після
                кожного розділу для закріплення отриманої інформації.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-center"><a
                  class="btn btn-primary btn-lg px-4 me-md-2 fw-bold" href="#courses">Почати зараз!</a>
              </div>
            </div>
            <!--                    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg text-center"><img-->
            <!--                            alt="" class="rounded-lg-3" height="356"-->
            <!--                            src="https://code-basics.com/assets/code-basics-coding-ru-656fd568b9a35ff40391739b52842ba90093158053168d3269fe2cd6600826c6.png"-->
            <!--                            width="720">-->
          </div>
        </div>
      </div>
    </div>
    <div class="mb-5 pb-5">
      <div class="container container-courses">
        <div class="mb-5">
          <div class="d-flex flex-column align-items-start mb-5 list-button-courses">
            <div class="d-flex flex-wrap">
              <a class="mb-2 mb-sm-0 me-2 me-sm-0 fw-light text-decoration-none fs-5 badge text-bg-light p-2 p-sm-3"
                 href="/ru/language_categories/programming">Рекомендовані Курси</a>
              <a class="mb-2 mb-sm-0 me-2 me-sm-0 ms-sm-4 fw-light text-decoration-none fs-5 badge text-bg-light p-2 p-sm-3"
                 href="/ru/language_categories/layouting">Web програмування</a>
              <a class="mb-2 mb-sm-0 me-2 me-sm-0 ms-sm-4 fw-light text-decoration-none fs-5 badge text-bg-light p-2 p-sm-3"
                 href="/ru/language_categories/layouting">Верстка</a>
            </div>
          </div>
          <h2 class="me-auto mb-3 mb-sm-0">
            <a class="text-decoration-none text-dark" href="#courses" id="courses">Курси</a>
          </h2>
          <div class="row gy-3 gx-2 g-sm-4 gy-lg-5 row-cols-2 row-cols-md-3 row-cols-lg-4 align-items-center justify-content-center">
            <div class="col">
              <div class="card h-100 shadow-sm border-0">
                <img class="card-img-top" alt="Іконка JavaScript"
                     src="/img/JS.jpg"
                     loading="lazy">
                <div class="card-body">
                  <div class="card-title h2"><a
                      class="stretched-link text-dark text-decoration-none text-nowrap"
                      href="/web-learning/courses/javascript.html">JavaScript</a></div>
                  <div class="text-muted"><span class="text-nowrap d-inline-block me-4"><span
                      class="bi bi-clock me-2"></span>18 годин</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 shadow-sm border-0">
                <img class="card-img-top" alt="Іконка HTML" src="/img/HTML.jpg" loading="lazy">
                <div class="card-body">
                  <div class="card-title h2"><a
                      class="stretched-link text-dark text-decoration-none text-nowrap"
                      href="/web-learning/courses/html.html">HTML</a></div>
                  <div class="text-muted"><span class="text-nowrap d-inline-block me-4"><span
                      class="bi bi-clock me-2"></span>10 годин</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 shadow-sm border-0"><img class="card-img-top" alt="Іконка CSS"
                                                              src="/img/CSS.jpg" loading="lazy">
                <div class="card-body">
                  <div class="card-title h2"><a
                      class="stretched-link text-dark text-decoration-none text-nowrap"
                      href="/web-learning/courses/css.html">CSS</a></div>
                  <div class="text-muted"><span class="text-nowrap d-inline-block me-4"><span
                      class="bi bi-clock me-2"></span>9 годин</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 shadow-sm border-0"><img class="card-img-top" alt="Іконка PHP"
                                                              src="/img/PHP.jpg" loading="lazy">
                <div class="card-body">
                  <div class="card-title h2"><a
                      class="stretched-link text-dark text-decoration-none text-nowrap"
                      href="/web-learning/courses/php.html">PHP</a></div>
                  <div class="text-muted"><span class="text-nowrap d-inline-block me-4"><span
                      class="bi bi-clock me-2"></span>18 годин</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 shadow-sm border-0">
                <img class="card-img-top" alt="Іконка TypeScript" src="/img/Typescript.jpg" loading="lazy">
                <div class="card-body">
                  <div class="card-title h2"><a
                      class="stretched-link text-dark text-decoration-none text-nowrap"
                      href="/web-learning/courses/typeScript.html">TypeScript</a></div>
                  <div class="text-muted"><span class="text-nowrap d-inline-block me-4"><span
                      class="bi bi-clock me-2"></span>13 годин</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'HomePage'
}
</script>