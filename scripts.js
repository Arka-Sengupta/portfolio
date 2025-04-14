$(document).ready(function(){
    var $scramble = $(".scramble");
    $scramble.scramble(3000,20,"alphabet",true);
});

var tl = gsap.timeline();

tl.to(".loading", {
    opacity: 0,
    delay: 3.5,
})
.to(".loader", {
    backgroundColor: "#ffffff", // First transition to white
    duration: 0.5,
    ease: "power1.inOut",
})
.to(".loader", {
    opacity: 0,
    y: "-100%",
    duration: 0.5,
    onComplete: () => {
        window.location.href = "main.html";
    }
});
