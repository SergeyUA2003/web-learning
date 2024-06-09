<template>
  <main class="container-fluid overflow-hidden mb-1 x-h-md-100">
    <h1 style="text-align: center; margin-bottom: 30px; margin-top: 30px">Перевірка засвоєння матеріалу за темою
      JS</h1>
    <div class="row x-h-md-100 g-2">
      <div class="col-12 col-md-6 col-lg-5 x-h-md-100 mb-3 mb-md-0 position-relative">
        <div class="card x-h-md-100">
          <div class="tab-content overflow-hidden">
            <div class="tab-pane fade overflow-auto active show" id="lesson-tab" role="tabpanel">
              <div class="card border-0 rounded-0">
                <div class="card-body">
                  <h2 style="text-align: center">Тестування</h2>
                  <hr class="my-4">
                </div>
                <div class="test-section">
                  <form id="response-form" method="post" style="font-size: 22px">
                    <div class="question">
                      <br>
                      <h5>Виберіть один із варіантів відповіді:</h5>
                      <br>
                      <div class="print-question container-fluid">
                        <h5>1) Як правильно оголосити змінну в JavaScript?</h5>
                        <div class="ansver">
                          <label>
                            <input class="radio" type="radio" name="question[0];" value="1" checked="">
                            <span class="radio-custom"></span>
                            <span class="label1">variable x;</span>
                          </label>
                          <br>
                          <label>
                            <input class="radio" type="radio" name="question[0];" value="2" checked="">
                            <span class="radio-custom"></span>
                            <span class="label1">let x;</span>
                          </label>
                          <br>
                          <label>
                            <input class="radio" type="radio" name="question[0];" value="3" checked="">
                            <span class="radio-custom"></span>
                            <span class="label1">var x;</span>
                          </label>
                          <br>
                        </div>
                        <br>
                      </div>
                      <div class="print-question container-fluid">
                        <h5>2) Що виведе на консоль наступний вираз: console.log(2 + "2")?</h5>
                        <div class="ansver">
                          <label>
                            <input class="radio" type="radio" name="question[1];" value="1" checked="">
                            <span class="radio-custom"></span>
                            <span
                                class="label1">4</span>
                          </label>
                          <br>
                          <label>
                            <input class="radio" type="radio" name="question[1];" value="2" checked="">
                            <span class="radio-custom"></span>
                            <span class="label1">"22"</span>
                          </label>
                          <br>
                          <label>
                            <input class="radio" type="radio" name="question[1];" value="3" checked="">
                            <span class="radio-custom"></span>
                            <span class="label1">22</span>
                          </label>
                          <br>
                        </div>
                        <br>
                      </div>
                      <div class="print-question container-fluid">
                        <h5>3)  Яке значення має вираз 10 === "10"</h5>
                        <div class="ansver">
                          <label>
                            <input class="radio" type="radio" name="question[2];" value="1" checked="">
                            <span class="radio-custom"></span>
                            <span class="label1">true</span>
                          </label>
                          <br>
                          <label>
                            <input class="radio" type="radio" name="question[2];" value="2" checked="">
                            <span class="radio-custom"></span>
                            <span class="label1">false</span>
                          </label>
                          <br>
                          <label>
                            <input class="radio" type="radio" name="question[2];" value="3" checked="">
                            <span class="radio-custom"></span>
                            <span class="label1">Error</span>
                          </label>
                          <br>
                        </div>
                        <br>
                      </div>
<!--                      <div class="print-question container-fluid">-->
<!--                        <h5>4) Який атрибут використовується для визначення URL-адреси у посиланні?</h5>-->
<!--                        <div class="ansver">-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[3];" value="1" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">alt</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[3];" value="2" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">href</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[3];" value="3" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">name</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                        </div>-->
<!--                        <br>-->
<!--                      </div>-->
<!--                      <div class="print-question container-fluid">-->
<!--                        <h5>5) Який тег використовується для відображення зображення?</h5>-->
<!--                        <div class="ansver">-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[4];" value="1" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">&lt;images&gt;</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[4];" value="2" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">&lt;img&gt;</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[4];" value="3" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">&lt;image&gt;</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                        </div>-->
<!--                        <br>-->
<!--                      </div>-->
<!--                      <div class="print-question container-fluid">-->
<!--                        <h5>6) Елемент div є рядковим чи блоковим елементом?</h5>-->
<!--                        <div class="ansver">-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[5];" value="1" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">блоковим</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[5];" value="2" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">рядковим</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[5];" value="3" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">є як рядковим, так і блоковим елементом</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                        </div>-->
<!--                        <br>-->
<!--                      </div>-->
<!--                      <div class="print-question container-fluid">-->
<!--                        <h5>7) Для чого потрібен тег &lt;noscript&gt;?</h5>-->
<!--                        <div class="ansver">-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[6];" value="1" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">відображати інформацію користувачеві, якщо у нього в браузері не включений/не підтримується JavaScript</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[6];" value="2" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">відображати помилки/попередження JavaScript на сторінці</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[6];" value="3" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">відключити скрипти в браузері</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                        </div>-->
<!--                        <br>-->
<!--                      </div>-->
<!--                      <div class="print-question container-fluid">-->
<!--                        <h5>8) Який тег під час створення сторінки не є обов'язковим?</h5>-->
<!--                        <div class="ansver">-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[7];" value="1" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">doctype</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[7];" value="2" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">strong</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[7];" value="3" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">body</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[7];" value="4" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">head</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                        </div>-->
<!--                        <br>-->
<!--                      </div>-->
<!--                      <div class="print-question container-fluid">-->
<!--                        <h5>9) Для чого потрібен тег &lt;doctype&gt;?</h5>-->
<!--                        <div class="ansver">-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[8];" value="1" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">для вказівки версії HTML, яка використовується в документі</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[8];" value="2" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">для прикріплення у формі документів з типом .doc</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[8];" value="3" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">тег спеціально введений для медичних сайтів для вказівки спеціальності лікаря</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                        </div>-->
<!--                        <br>-->
<!--                      </div>-->
<!--                      <div class="print-question container-fluid">-->
<!--                        <h5>10) Що дозволяє вказати тег &lt;title&gt;?</h5>-->
<!--                        <div class="ansver">-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[9];" value="1" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">назва сторінки, яка також буде відображена в пошукових системах</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[9];" value="2" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">заголовок першого рівня на сторінці</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[9];" value="3" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">назва маркованого списку</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[9];" value="4" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">назва таблиці</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                        </div>-->
<!--                        <br>-->
<!--                      </div>-->
<!--                      <div class="print-question container-fluid">-->
<!--                        <h5>11) Яке значення атрибута type вказується для поля-галочки у формі?</h5>-->
<!--                        <div class="ansver">-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[10];" value="1" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">radio</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[10];" value="2" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">checkbox</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[10];" value="3" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">id</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[10];" value="4" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">name</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                        </div>-->
<!--                        <br>-->
<!--                      </div>-->
<!--                      <div class="print-question container-fluid">-->
<!--                        <h5>12) Які теги роблять шрифт тексту жирним?</h5>-->
<!--                        <div class="ansver">-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[11];" value="1" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">&lt;ins&gt; і &lt;del&gt;</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[11];" value="2" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">&lt;li&gt; і &lt;ul&gt;</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[11];" value="3" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">&lt;b&gt; і &lt;strong&gt;</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                        </div>-->
<!--                        <br>-->
<!--                      </div>-->
<!--                      <div class="print-question container-fluid">-->
<!--                        <h5>13) Яке кодування слід використати на сайті?</h5>-->
<!--                        <div class="ansver">-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[12];" value="1" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">WINDOWS-1251</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[12];" value="2" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">UTF-8</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[12];" value="3" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">UTF-16</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[12];" value="4" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">UTF-32</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                        </div>-->
<!--                        <br>-->
<!--                      </div>-->
<!--                      <div class="print-question container-fluid">-->
<!--                        <h5>14) Яких тегів у HTML не існує?</h5>-->
<!--                        <div class="ansver">-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[13];" value="1" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">парних</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[13];" value="2" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">одиничних</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[13];" value="3" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">потрійних</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                        </div>-->
<!--                        <br>-->
<!--                      </div>-->
<!--                      <div class="print-question container-fluid">-->
<!--                        <h5>15) Як виглядає тег &lt;form&gt; на сторінці?</h5>-->
<!--                        <div class="ansver">-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[14];" value="1" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">тег &lt;form&gt; представляє собою поле для введення тексту </span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[14];" value="2" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1"> тег &lt;form&gt; не має власного графічного уявлення - це контейнер для інших елементів </span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[14];" value="3" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1"> тег &lt;form&gt; не має власного графічного уявлення - це контейнер для тексту</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                        </div>-->
<!--                        <br>-->
<!--                      </div>-->
<!--                      <div class="print-question container-fluid">-->
<!--                        <h5>16) Звідки, на думку Лукашенка, на Білорусь готувався напад?</h5>-->
<!--                        <div class="ansver">-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[15];" value="1" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">я карту привёз, щас покажу</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                          <label>-->
<!--                            <input class="radio" type="radio" name="question[15];" value="2" checked="">-->
<!--                            <span class="radio-custom"></span>-->
<!--                            <span class="label1">яке ж воно кончене...</span>-->
<!--                          </label>-->
<!--                          <br>-->
<!--                        </div>-->
<!--                        <br>-->
<!--                      </div>-->
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="tab-pane fade overflow-auto x-h-md-100" id="discuss-tab" role="tabpanel">
              <div class="card border-0">
                <div class="card-body pt-2 pb-0">

                  <div id="disqus_thread">
                    <iframe id="dsq-app1019" name="dsq-app1019" allowtransparency="true" frameborder="0" scrolling="no"
                            tabindex="0" title="Disqus" width="100%"
                            src="https://disqus.com/embed/comments/?base=default&amp;f=hexlet-basics&amp;t_i=lesson-248&amp;t_u=https%3A%2F%2Fcode-basics.com%2Fru%2Flanguages%2Fjava%2Flessons%2Fhello-world&amp;t_e=&amp;t_d=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%2C%20%D0%9C%D0%B8%D1%80!%20%7C%20Java%20%7C%20CodeBasics&amp;t_t=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%2C%20%D0%9C%D0%B8%D1%80!%20%7C%20Java%20%7C%20CodeBasics&amp;s_o=default&amp;l=ru#version=9a2e2eeaa47582a66c70de7213b5209c"
                            style="width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important; height: 0px !important;"
                            horizontalscrolling="no" verticalscrolling="no"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-7 pl-md-0 x-h-md-100">
        <div class="d-flex flex-column x-h-md-100" data-testid="basics-lesson-container" id="basics-lesson-container">
          <div class="card">
            <div class="card-body">
              <h2 style="text-align: center">Практичне Завдання</h2>
              <hr class="my-4">
              <h3 style="font-size: 24px; margin-bottom: 20px;">Завдання</h3>
              <h4 style="font-size: 20px">
                Виведіть на екран значення undefined, не вказуючи його явно (через присвоювання або передавши
                безпосередньо в console.log()).
              </h4>
            </div>
            <div class="d-flex h-100 tab-content overflow-auto">
              <div role="tabpanel" id="tabs-tabpane-editor" aria-labelledby="tabs-tab-editor"
                   class="fade tab-pane h-100 pe-3 w-100 overflow-hidden active show">
                <section style="display: flex; position: relative; text-align: initial; width: 100%; height: 100%;">
                  <textarea name="" id="" style="width: 100%; height: 445px"></textarea>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex p-3 border-top">
        <div class="m-auto">
          <div id="app">
            <button @click="openModal" type="button" class="me-3 d-inline-flex align-items-center btn btn-primary"><span
                class="bi bi-play-circle"></span><span
                class="d-none d-sm-block d-md-none d-lg-block ms-1 button-check">Перевірити</span></button>
            <div v-if="modalVisible" class="modal">
              <div class="modal-content">
                <span class="close" @click="closeModal">&times;</span>
                <div class="modal-text-content">
                  <div class="test">
                    <h1>Вітаємо, Ви добре пройшли тестування!</h1>
                    <h2>2 / 3</h2>
                  </div>
                  <div class="pratcise">
                    <h1>Практичне завдання</h1>
                    <h2>Завдання виконанно вірно</h2>
                    <h3>Ваш код містить помилки..</h3>
                    <h4>expect(received).toBe(expected) // Object.is equality <br>
                      Expected: "undefined" <br>
                      Received: "undefined"
                    </h4>
                  </div>
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
  name: "TestPage",
  data() {
    return {
      modalVisible: false
    };
  },
  methods: {
    openModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    }
  }
};
</script>

<style scoped>
/* Стили для модального окна */
h1, h2 {
  text-align: center;
}

h1 {
  font-size: 24px;
}

.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный фон */
  z-index: 1;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 1040px;
}

.close {
  color: #aaa;
  width: max-content;
  display: flex;
  align-self: end;
  font-size: 34px;
  margin-bottom: 10px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal-text-content {
  display: flex;
  justify-content: space-between;
}
</style>