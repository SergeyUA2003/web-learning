<template>
  <main class="flex-grow-1">
    <div class="container mt-sm-5 mb-5">
      <div class="text-center"><span class="display-6 bi bi-person-plus"></span>
        <h1 class="mb-4">Реєстрація</h1></div>
      <div class="row justify-content-center">
        <div class="col-sm-8 col-md-7 col-lg-5">
          <div class="card shadow-sm border-0">
            <div class="card-body m-4">
              <form class="simple_form new_user_sign_up_form" id="new_user_sign_up_form"
                    novalidate="novalidate" action="/ru/users" accept-charset="UTF-8" method="post"><input
                  type="hidden" name="authenticity_token"
                  value="iImVUUR3Y7OalKh75y5q8Axq2oEEW56jXn54LkYlPSJmN8gkUqdKvwwML3HZ8aI7UGMZslKw9s-NGffdfQgk_Q"
                  autocomplete="off">
                <div class="mb-3 string optional user_sign_up_form_first_name"><label
                    class="form-label string optional"
                    for="user_sign_up_form_first_name">Введіть Ім'я</label><input
                    class="form-control shadow-sm string optional" type="text"
                    name="user_sign_up_form[first_name]" id="user_sign_up_form_first_name"></div>
                <div class="mb-3 email optional user_sign_up_form_email"><label
                    class="form-label email optional" for="user_sign_up_form_email">Email</label><input
                    class="form-control shadow-sm string email optional" autocomplete="email"
                    type="email" name="user_sign_up_form[email]" id="user_sign_up_form_email"></div>
                <div class="mb-3 password required user_sign_up_form_password"><label
                    class="form-label password required" for="user_sign_up_form_password">Пароль<abbr
                    title="required"></abbr></label><input
                    class="form-control shadow-sm password required" autocomplete="new-password"
                    type="password" name="user_sign_up_form[password]" id="user_sign_up_form_password">
                </div>
                <div class="text-end text-muted small my-4"><span class="me-2">У Вас вже є аккаунт?</span><router-link
                    class="text-decoration-none" to="/login">Увійти</router-link></div>
                <div class="form-group"><input type="submit" name="commit" value="Створити аккаунт"
                                               class="btn btn-primary w-100 mb-1"
                                               data-disable-with="Створити аккаунт">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'RegistrationPage',
}
</script>