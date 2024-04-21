<template>
  <main class="flex-grow-1">
    <div class="container mt-sm-5 mb-5">
      <div class="text-center"><span class="display-6 bi bi-box-arrow-in-right"></span>
        <h1 class="mb-4 text-center">Вхід</h1></div>
      <div class="row justify-content-center">
        <div class="col-sm-8 col-md-7 col-lg-5">
          <div class="card shadow-sm border-0">
            <div class="card-body m-4">
              <form class="simple_form new_sign_in_form" id="new_sign_in_form" :novalidate="true"
                    action="/ru/session" accept-charset="UTF-8" method="post">
                <input type="hidden" name="authenticity_token"
                       value="8-LjcbkuiQ4-6caPI7C_pZAyRThKGKPuwStsqw7xrkEdXL4Er_6gAqhxQYUdb3duzDuGCxzzy4ISTONYNdy3ng"
                       autocomplete="off">
                <div class="mb-3 email required sign_in_form_email">
                  <label class="form-label email required" for="sign_in_form_email">Email<abbr
                      title="required"></abbr></label>
                  <input class="form-control shadow-sm string email required" data-testid="email"
                         autocomplete="email" type="email" name="sign_in_form[email]"
                         id="sign_in_form_email">
                </div>
                <div class="mb-3 password required sign_in_form_password"><label
                    class="form-label password required" for="sign_in_form_password">Пароль<abbr
                    title="required"></abbr></label><input
                    class="form-control shadow-sm password required" data-testid="password"
                    autocomplete="current-password" type="password" name="sign_in_form[password]"
                    id="sign_in_form_password"></div>
                <div class="form-group">
                  <input type="submit" name="commit" value="Увійти" class="btn btn-primary w-100"
                         data-testid="submit" data-disable-with="Войти">
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
  name: 'LoginPage',
}
</script>