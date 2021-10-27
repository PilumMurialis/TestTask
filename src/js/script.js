const button = document.querySelectorAll('.test__item');
const description = document.querySelector('.form__block__slogan');
const descrFooter = document.querySelector('.test__counter > span');
const testTItle = document.querySelector('.test__title');
let counter = 1;

const createNewButton = (text) => {
  const buttonText = text;
  const newButton = document.createElement('button');
  newButton.classList.add('test__item');
  newButton.textContent = buttonText;
  document.querySelector('.test__button__holder').append(newButton);
};

button.forEach((btn) => {
  btn.addEventListener('click', () => {
    document.body.classList.add('hide');
    description.textContent = 'Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.';
    counter += 1;
    if (counter === 2) {
      descrFooter.textContent = counter;
      testTItle.textContent = 'Когда Вы чувствуете себя наиболее комфортно?';
      createNewButton('Утро');
    } else if (counter === 3) {
      descrFooter.textContent = counter;
      testTItle.textContent = 'Укажите свою дату рождения:';
      button.remove();
    } else if (counter === 4) {
      descrFooter.textContent = counter;
      testTItle.textContent = 'Снятся ли Вам умершие люди?';
    }
  });
});
