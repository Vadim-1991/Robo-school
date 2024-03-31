//Burger.js

const infoPanelMobile = document.getElementById('infoPanelMobile');
const buttonBurger = document.getElementById('buttonBurger');
const body = document.getElementById('body')

buttonBurger.addEventListener('click', function () {
  infoPanelMobile.classList.toggle('burger-active');
  body.classList.toggle('no-scroll');
})


//Tooltip.js
const tooltipList = Array.from(document.querySelectorAll('.tooltip'));
tooltipList.forEach(tooltip => {
  console.log(tooltip);
  tooltip.addEventListener('click', () => {
tooltip.classList.toggle('tooltip-active')
  })
})

;


