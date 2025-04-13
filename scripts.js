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
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut",
})
.to(".loader", {
    y: "-100%",
    duration: 1,
})
.add(() => {
    // Smooth fade to white before redirect
    gsap.to("body", {
        backgroundColor: "#ffffff",
        duration: 1,
        onComplete: () => {
            window.location.href = "main.html";
        }
    });
});
