// HAMBURGER MENU 

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
// main toggle 
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    nav.classList.toggle('open')
})






// PAGE TRANSITION

// window.onload = () => {
//     const transition_el = document.querySelector(".transition")
//     const anchors = document.querySelectorAll('a') 
//     setTimeout(() => {
//         transition_el.classList.remove('is-active')

//     }, 500)

    // for(let i = 0; i < anchors.length; i++) {
    //     const anchor = anchors[i];

    //     anchor.addEventListener('click', e => {
    //         e.preventDefault();
    //         let target = e.target.href;

    //         transition_el.classList.add('is-active');
            
    //         setTimeout(() => {
    //             window.location.href = target;
    //         }, 500);
    //     });

    // }
// }


// const hamburger = document.querySelector('.hamburger')
// const nav = document.querySelector('.nav')

// hamburger.addEventListener('click', () => {
//     nav.classList.toggle('show')
// }); 