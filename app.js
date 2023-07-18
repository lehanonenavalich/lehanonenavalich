const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
	slide.addEventListener('click', () => {
	clearActiveClasses()
	slide.classList.add('active')
	})
} 

function clearActiveClasses() {
	slides.forEach((slide) => {
		slide.classList.remove('active')
	})
}

$( function() {
    $( "#datepicker" ).datepicker();
});


const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu')

burger.addEventListener('click',()=>{
   menu.classList.toggle('disp') 
});