const tabcontent = document.querySelector('.tabs');
const tabs = Array.from(tabcontent.children);
const tab_menu = document.querySelector('.tab_menu');
const homeButton = tab_menu.querySelector('.home-button');
const aboutmeButton = tab_menu.querySelector('.about_me-button');
const publicationsButton = tab_menu.querySelector('.publications-button');
const contactmeButton = tab_menu.querySelector('.contact_me-button');

const removeShow=(arr)=>{
  arr.forEach((item, i) => {
    item.classList.remove('showTab');
  });
}

homeButton.addEventListener('click',e=>{
  removeShow(tabs);
  tabs[0].classList.add('showTab');
});
aboutmeButton.addEventListener('click',e=>{
  removeShow(tabs);
  tabs[1].classList.add('showTab');
});
publicationsButton.addEventListener('click',e=>{
  removeShow(tabs);
  tabs[2].classList.add('showTab');
});
contactmeButton.addEventListener('click',e=>{
  removeShow(tabs);
  tabs[3].classList.add('showTab');
});
