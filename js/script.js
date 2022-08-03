const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');

// Content appear on scroll 
window.addEventListener('scroll', reveal);


function reveal(){
  let reveals = document.querySelectorAll('.reveal');
  for(let i = 0; i < reveals.length; i++){
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}
// Keeping track of scroll using an event listener 
window.addEventListener('scroll', () => {
    // Grab the current section
    let current = ''
    // To see active scrolling in the console log: 
    // console.log(pageYOffset);
    // Loop through all the sections 
    sections.forEach(section => {
        // Calculate distance to the page top
        const sectionTop = section.offsetTop;

        // Get the section height 
        const sectionHeight = section.clientHeight;

        // Need to know how much we have scrolled until the page is highlighted in menu
        // Change item highlighted on menu once you scroll 1/3 of page
        if(pageYOffset >= (sectionTop - sectionHeight/2)) {
            current = section.getAttribute('id');
        }


    })
    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)) {
        li.classList.add('active')
        }
    })
})

// Nav bar disappear on scroll

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  // Scrolling up 
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
    // document.querySelector('nav').addClass('.appear')
  } else {
    document.querySelector("nav").style.top = "-18vh";
  }
  prevScrollpos = currentScrollPos;
}

const arrow = () => {
  setTimeout(()=> {
    console.log('arrow heheh')
    document.querySelector('.down-arrow').style.display.remove;
  },1000)
}
window.onload = arrow