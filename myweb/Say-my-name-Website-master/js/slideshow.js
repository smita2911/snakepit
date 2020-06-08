const track = document.querySelector('.carousal__track');
const slides = Array.from(track.children);

const nextButton = document.querySelector('.carousal__button--right');
const prevButton = document.querySelector('.carousal__button--left');
const dotsNav = document.querySelector('.carousal__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange slides next to one another
const setSlidePosition = (slide,index)=>{
  slide.style.left = slideWidth*index +'px';
};
slides.forEach(setSlidePosition);

//some functions
const moveToSlide =(track,currentSlide,targetSlide)=>{
  track.style.transform = 'translateX(-'+targetSlide.style.left+')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

const updateDot = (currentDot,targetDot)=>{
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}
const hideShowArrows=(slides,prevButton,nextButton,targetIndex)=>{
  if (targetIndex === 0){
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  }else if (targetIndex === slides.length-1){
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else{
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }

}
//left click
prevButton.addEventListener('click',e=>{
  const currentSlide = track.querySelector('.current-slide');
  const previousSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const previousDot = currentDot.previousElementSibling;

  const previousIndex = slides.findIndex(slide =>slide === previousSlide);
  //move slides
  moveToSlide(track,currentSlide,previousSlide);
  updateDot(currentDot,previousDot);
  hideShowArrows(slides,prevButton,nextButton,previousIndex);

})
//right click
nextButton.addEventListener('click',e=>{
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;

  const nextIndex = slides.findIndex(slide =>slide === nextSlide);

  //move the slide
  moveToSlide(track,currentSlide,nextSlide);
  updateDot(currentDot,nextDot);
  hideShowArrows(slides,prevButton,nextButton,nextIndex);
});

//nav indicators
dotsNav.addEventListener('click',e=>{
  const targetDot = e.target.closest('button');
  if(!targetDot) return;
  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot)
  const targetSlide = slides[targetIndex];
  moveToSlide(track,currentSlide,targetSlide);
  updateDot(currentDot,targetDot);
  hideShowArrows(slides,prevButton,nextButton,targetIndex);

})
