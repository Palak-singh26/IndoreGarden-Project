/*-------Toggle Button--------*/

const navmenu = document.getElementById("nav-menu");
const navlink = document.querySelector(".nav-link");
const hamburger = document.getElementById("hamburger");


hamburger.addEventListener("click", () => {
  navmenu.classList.toggle("left-[0]")
  hamburger.classList.toggle("ri-close-large-line")
})

// navlink.forEach(link => {
//     link.addEventListener("click", () => {
//         navmenu.classList.toggle("left-[0]")
//         hamburger.classList.toggle("ri-close-large-line")
//     })
// })


/*-------show scroll  Button--------*/
const scrollUp = () => {
  const scrollUpbtn = document.getElementById('scroll-Up');
  if (this.scrollY >= 250) {
    scrollUpbtn.classList.remove("-bottom-1/2");
    scrollUpbtn.classList.add("bottom-4");
  }
  else {
    scrollUpbtn.classList.add("-bottom-1/2");
    scrollUpbtn.classList.remove("bottom-4");
  }
}

window.addEventListener('scroll', scrollUp)

/*-------Change background header--------*/
const scrollHeader = () => {
  const header = document.getElementById('navbar');
  if (window.scrollY >= 50) {
    header.classList.add("border-b", "border-yellow-500");
  } else {
    header.classList.remove("border-b", "border-yellow-500");
  }
};

window.addEventListener('scroll', scrollHeader);



/*-------scrollreveal.min.js--------*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true
})
sr.reveal(`.home_data, .about_top, .popular_top,.review_top,.footer_icon,footer_content,.copy_data`)
sr.reveal(`.home_image`, { delay: 500, scale: 0.5 })
sr.reveal(`.service_card,.popular_card ,.review_card`, { interval: 100 })
sr.reveal(`.about_leaf`, { delay: 1000, original: "right" })
sr.reveal(`.about_itemcon1,.about_itemimg2`, { original: "right" })
sr.reveal(`.about_itemcon2,.about_itemimg1`, { original: "left" })
sr.reveal(`.footer__floral`, { delay: 1000, original: "left" })









/*-------scroll section active link--------*/

// const activelink = () => {
//   const sections = document.querySelectorAll("section"); 
//   const navlinks = document.querySelectorAll(".nav-link"); 

//   let current = "home"; 

//   sections.forEach(section => {
//     const sectionTop = section.offsetTop;

//     if (window.scrollY >= sectionTop - 60 ) {
//       current = section.getAttribute("id");
//     }
//   });

//   navlinks.forEach(item => {
//     item.classList.remove("active");

//     if (item.href.includes(current)) {
//       item.classList.add("active");
//     }
//   });
// };

// window.addEventListener("scroll", activelink);
