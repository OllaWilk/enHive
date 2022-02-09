/* carousel*/

const sliders = document.querySelector('.carouselbox');
const switchLeft = document.querySelector('.switchLeft');
const switchRight = document.querySelector('.switchRight');


let scrollPerClick ;
const ImagePadding = 40;
let scrollAmount = 0;

moveImg();

function moveImg() {  
  scrollPerClick = document.querySelector('.img-1').clientWidth + ImagePadding;
}

switchLeft.addEventListener('click', (e) => {
  e.preventDefault;

  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: 'smooth'
  });

  if ( scrollAmount < 0) {
    scrollAmount = 0;
  }
});

switchRight.addEventListener('click', (e) => {
  e.preventDefault;

  if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: 'smooth'
    });
  }
});





