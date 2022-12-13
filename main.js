var text = document.querySelector('h1'),
    char = text.querySelectorAll('span'),
    replaceChar = text.querySelectorAll('span:not([data-char="."])');

var tl = gsap.timeline();


tl.set(char, {
    yPercent: -110
})
tl.set(text, {
    autoAlpha:1
});
tl.to(char, {
    duration:1,
    yPercent:0,
    stagger:0.05,
    ease: "expo.inOut"
}).to(replaceChar, {
    duration:1,
    yPercent:110,
    ease: "expo.inOut",
    repeat:-1,
    yoyo:true,
    stagger:0.1
})