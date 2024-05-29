var active=3;
var minicircle =document.querySelectorAll(".sec");
var sec =document.querySelectorAll(".sec");
gsap.to(minicircle[active-1],{
    opacity:.5,
})
gsap.to(sec[active-1],{
    opacity:1,
})
minicircle.forEach(function(val,index){
    val.addEventListener("click",function(){
        gsap.to("#circle",{
            rotate:(3-(index+1))*10,
            ease:Expo.easeInOut,
            duration: 1
        })
        
        greyout();
        gsap.to(this, {
            opacity:0.5
        })
        gsap.to(sec[index], {
            opacity:1
        })

    })
})
function greyout(){
    
    gsap.to(sec,{
        opacity:.4
    })
}
gsap.to("#circle",{
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 7.2
})
var loader= document.querySelector("#loader")
setTimeout(function(){
  loader.style.top="-100%"
},2200)
document.addEventListener('DOMContentLoaded', () => {
    // Check if the page was loaded due to a refresh
    if (performance.navigation.type === 1) {
        window.location.href = 'index.html';
    }

    const loader = document.getElementById('loader');

    setTimeout(() => {
        loader.style.top = '-100%';
    }, 5200);
});


