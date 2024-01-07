// gsap.to("#nav",{
//     backgroundColor:"#000",
//     duration:0.5,
//     height:"140px",
//     scrollTrigger:{
//         trigger:"#nav",
//         scroller:"body",
//         // markers:true,
//         start:"top -10%",
//         end:"top -11%",
//         scrub:1
//     }
// })


// gsap.to("#main",{
//     backgroundColor:"#000",
//     scrollTrigger:{
//         trigger:"#main",
//         scroller:"body",
//         // markers:true,
//         start:"top -25%",
//         end:"top -80%",
//         scrub:2,
//     }

// })

const scholar =document.querySelector('#scholar')

//Nav Menu Toggler
const navmenuToggler = document.querySelector("#menu-line");
navmenuToggler.addEventListener("click",() => {
    console.log("CLick");
    document.querySelector(".nav-menu").classList.toggle("show")
    })