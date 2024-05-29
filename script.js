function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  

  
  

  
  

  
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  

}










// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

// Function to handle first page animations
function firstpageani() {
  const tl = gsap.timeline();
  tl.from("#nav", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      ease: "expo.inOut"
  })
  .to(".anielem", {
      y: -1,
      ease: "expo.inOut",
      duration: 7.2,
      delay: 0.2,
      stagger: 0.1
  })
  .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.1,
      delay: -1,
      ease: "expo.inOut"
  });
}

// Function to handle circle follow animations
function circleChaptaKaro() {
  let xscale = 1, yscale = 1, xprev = 0, yprev = 0;
  let timeout;

  const handleMouseMove = (dets) => {
      clearTimeout(timeout);

      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

      xprev = dets.clientX;
      yprev = dets.clientY;

      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;

      timeout = setTimeout(() => {
          document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
  };

  window.addEventListener("mousemove", handleMouseMove);
}

// Function to handle rotation effects on elements
function rotatekaro() {
  document.querySelectorAll(".elem").forEach((elem) => {
      let rotate = 0;

      elem.addEventListener("mouseleave", () => {
          gsap.to(elem.querySelector("img"), {
              opacity: 0,
              ease: "power3.out",
              duration: 0.5,
          });
      });

      elem.addEventListener("mousemove", (dets) => {
          const diff = dets.clientY - elem.getBoundingClientRect().top;
          const diffrot = dets.clientX - rotate;
          rotate = dets.clientX;

          gsap.to(elem.querySelector("img"), {
              opacity: 1,
              ease: "power3.out",
              top: diff,
              left: dets.clientX,
              rotate: gsap.utils.clamp(-15, 15, diffrot * 0.5),
          });
      });
  });
}

// Function to handle image-related interactions
function imgregarding() {
  window.addEventListener('load', () => {
      document.querySelector('.computer img').classList.add('initial');
  });

  const elems = document.querySelectorAll('.elem');

  elems.forEach((elem) => {
      elem.addEventListener('mouseenter', () => {
          elem.classList.add('fade-out');
          elem.querySelector('img').style.opacity = 1;
      });

      elem.addEventListener('mouseleave', () => {
          elem.classList.remove('fade-out');
          elem.querySelector('img').style.opacity = 0;
      });
  });
}
function menu(){
  var menu=document.querySelector("nav1 h4")
  var full=document.querySelector("#loadmenu")
  menu,addEventListener("click",function(){
    full.style.top='0';
  })

}

// Loader animation
const loader = document.querySelector("#loader");
setTimeout(() => {
  loader.style.top = "-100%";
}, 5200);

// Initialize functions
firstpageani();
circleChaptaKaro();
rotatekaro();
imgregarding();
menu();
locomotive()




