'use strict'
// const listItems = document.querySelectorAll('li');
// console.log(listItems)
const main = document.querySelector('main');
const submit = document.querySelector('.btn-submit');
const content = document.querySelector('.content');
// const feedback = document.querySelector('.feedback')
const scores = document.querySelector('.scores');
console.dir(scores)
const buttons =  Array.from(document.querySelectorAll('.btn'))
let score = 0;
// console.log(listItems)




// console.log(submit)

window.addEventListener('click', function (e) {
    if(!buttons.includes(e.target)) return;
    buttons.forEach(label=> label.classList.remove('selected'))
    const targetEl = e.target;
    targetEl.classList.toggle('selected')
    score= +targetEl.textContent;
    console.log(e.target,+targetEl.textContent,buttons.includes(e.target))
})

submit.addEventListener('click',function (e) {
    e.preventDefault()
    if(!score) return;
    const feedback =`
    <section class="feedback">
      <img src="./images/illustration-thank-you.svg" class="feedback-img" alt="">
      
      <header>You selected ${score} out of 5</header> 

      <section class="title">
        <p>Thank you!</p>
      </section>
  
      <section class="info margins-top-bottom">
        <p>We appreciate you taking the time to give a rating.
           If you ever need more support, 
          don’t hesitate to get in touch! 
        </p>
    </section>`
    content.style.display ='none';
    main.insertAdjacentHTML('afterbegin',feedback)
})