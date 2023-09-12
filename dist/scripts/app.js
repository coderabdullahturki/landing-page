let tl = gsap.timeline();

tl.from("#navbar .nav-item, #navbar .logo, #navbar .svg-icon", {
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.25
})

tl.from(".content-heading .heading-text", {
    y: 60,
    duration: 1,
    stagger: 0.25,
    opacity: 0
})

tl.fromTo(".content-heading .heading-text span", {width: "0"}, {width: "100%", duration: 1, stagger: 0.3})

tl.from(".photo-col .img-bg", {
    scale: 0,
    stagger: 0.25,
    opacity: 0
})

tl.from(".text p, .btn", {
    opacity: 0,
    delay: 0.5
})

tl.to(".text p, .btn", {
    opacity: 1,
    duration: 1,
    stagger: 0.2
})