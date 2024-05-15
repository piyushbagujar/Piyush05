var timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstpageani() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: "expo.inOut" 
    })
        .to(".anielem", {
            y: -1,
            ease: "expo.inOut", 
            duration: 1.5,
            delay:- 0.2,
            stagger:0.1
    })
    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1,
        delay: -0.5,
        ease: "expo.inOut" 
    })
}
function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
  
      circleMouseFollower(xscale, yscale);
  
      timeout = setTimeout(function () {
        document.querySelector(
          "#minicircle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
    });
  }
  
  function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }
  
  circleChaptaKaro();
  circleMouseFollower()

  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
  firstpageani();  
  window.addEventListener('load', function() {
    // After page is fully loaded, add 'initial' class to trigger the animation
    document.querySelector('.computer img').classList.add('initial');
});
const elems = document.querySelectorAll('.elem');

function handleMouseEnter(e) {
    const elem = e.currentTarget;
    elem.classList.add('fade-out');
    elem.querySelector('img').style.opacity = 1;
}

function handleMouseLeave(e) {
    const elem = e.currentTarget;
    elem.classList.remove('fade-out');
    elem.querySelector('img').style.opacity = 0;
}

elems.forEach(function(elem) {
    elem.addEventListener('mouseenter', handleMouseEnter);
    elem.addEventListener('mouseleave', handleMouseLeave);
});








