<template>
  <header class="container mb-4 flex-shrink-0">
    <div class="pb-2 pt-2 border-bottom">
      <div class="navbar navbar-expand-md navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand me-md-4" href="/">
            <img width="60" alt="WP logo" src="/img/Logo.png"
                 loading="lazy"><span>Web Learning</span></a>
          <input class="col-6" type="text" name="Search" id="search" placeholder="Пошук курсів">
          <div class="collapse navbar-collapse justify-content-end" id="navbarToggler">
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link  " href="/ru/session/new">Вхід</a></li>
              <li class="nav-item"><a class="nav-link me-3 " href="/ru/users/new">Реєстрація</a></li>
              <li class="nav-item dropdown">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'NavHeader',
}
</script>