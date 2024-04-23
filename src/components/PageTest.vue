<template>
  <div class="tests-page">
    <form v-on:submit.prevent="formSubmit">
      <h2>1) Розшифруйте абревіатуру HTML.</h2>
      <label><input type="checkbox" name="question-1" v-model="question"/> HyperText Markup Language </label>
      <label><input type="checkbox" name="question-2" v-model="question"/> HeadText Modulation Language </label>
      <label><input type="checkbox" name="question-3" v-model="question"/> HeadingText Mode Language </label>
      <br>
      <h2>2) Де правильно використовувати тег title?</h2>
      <label><input type="checkbox" name="question-1" v-model="question"/> в head </label>
      <label><input type="checkbox" name="question-2" v-model="question"/> в body </label>
      <label><input type="checkbox" name="question-3" v-model="question"/> в footer </label>
      <br>
      <h2>3) За допомогою якого тега можна створити посилання у документі? </h2>
      <label><input type="checkbox" name="question-1" v-model="question"/> &lt;p&gt; </label>
      <label><input type="checkbox" name="question-2" v-model="question"/> &lt;link&gt; </label>
      <label><input type="checkbox" name="question-3" v-model="question"/> &lt;a&gt; </label>
      <br>
      <h2>4) Який атрибут використовується для визначення URL-адреси у посиланні?</h2>
      <label><input type="checkbox" name="question-1" v-model="question"/> alt </label>
      <label><input type="checkbox" name="question-2" v-model="question"/> href </label>
      <label><input type="checkbox" name="question-3" v-model="question"/> name </label>
      <br>
      <h2>5) Який тег використовується для відображення зображення?</h2>
      <label><input type="checkbox" name="question-1" v-model="question"/> &lt;images&gt; </label>
      <label><input type="checkbox" name="question-2" v-model="question"/> &lt;img&gt; </label>
      <label><input type="checkbox" name="question-3" v-model="question"/> &lt;image&gt; </label>
      <br>
      <h2>6) Елемент div є рядковим чи блоковим елементом? </h2>
      <label><input type="checkbox" name="question-1" v-model="question"/> блоковим </label>
      <label><input type="checkbox" name="question-2" v-model="question"/> рядковим </label>
      <label><input type="checkbox" name="question-3" v-model="question"/> є як рядковим, так і блоковим елементом
      </label>
      <br>
      <h2>7) Для чого потрібен тег &lt;noscript&gt; ?</h2>
      <label><input type="checkbox" name="question-1" v-model="question"/> відображати інформацію користувачеві, якщо у
        нього в браузері не включений/не підтримується JavaScript </label>
      <label><input type="checkbox" name="question-2" v-model="question"/> відображати помилки/попередження JavaScript
        на
        сторінці </label>
      <label><input type="checkbox" name="question-3" v-model="question"/> відключити скрипти в браузері </label>

      <button type="submit">Відправити Відповіді</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: []
    }
  },
  methods: {
    calculateCorrectCount() {
      const correctAnswers = [
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0]
      ];

      let correctCount = 0;
      for (let i = 0; i < this.question.length; i++) {
        if (JSON.stringify(this.question[i]) === JSON.stringify(correctAnswers[i])) {
          correctCount++;
        }
      }

      return correctCount;
    },

    formSubmit() {
      const correctCount = this.calculateCorrectCount();
      console.log('Кількість правильних відповідей:', correctCount);
    },
  }
}
</script>