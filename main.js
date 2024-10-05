import './style.css'
import Lenis from 'lenis'
import SplitType from 'split-type'
import gsap from 'gsap'



// window.addEventListener('DOMContentLoaded', ()=>{
//     const lineHead = document.querySelector('.headline')

//     // Split text into words and characters
//     const headline = new SplitType(lineHead)
//     const tagline = new SplitType('.tagline')
    
//     const tl = gsap.timeline(
//         {
//             defaults:{
//                 ease:'ease',
//                 duration:1
//             }
//         }
//     )

//     // Animate characters into view with a stagger effect
//     tl.to(".overlay", {
//         opacity: 0,
//         zIndex: 0
//     }).from([headline.lines , tagline.lines , '.homebtngroup' ], {
//         opacity: 0,
//         y: 20,
//         stagger: { amount: 0.1 },
//     }).from('.head', {
//         opacity: 0,
//         y: -100,
//     }, "+0.6").from('.imgbox', {
//         opacity: 0,
//         scale:1.2,
//         y: -100,
//         duration:1.4
//     }, "+0.4")
// })





function getLenis(){
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}

getLenis()


