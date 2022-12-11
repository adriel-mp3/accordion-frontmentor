const faqDt = document.querySelectorAll('.js-faq dt')

function handleClick(event) {
  event.currentTarget.classList.toggle('ativo');
  event.currentTarget.nextElementSibling.classList.toggle('ativo');
}

faqDt.forEach((dt) => {
  dt.addEventListener('click', handleClick)
})