function locoScroll() {
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
locoScroll();


function cursorAnimation(){
    var page1Content = document.querySelector("#page1-content");
    var cursor = document.querySelector("#cursor");

    page1Content.addEventListener("mousemove",(e)=>{
        // console.log(e)
        // cursor.style.left = e.x+"px";
        // cursor.style.top = e.y+"px";

        gsap.to(cursor,{
            x:e.x,
            y:e.y
        })
    })

    page1Content.addEventListener("mouseenter",()=>{
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })

    page1Content.addEventListener("mouseleave",()=>{
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
    })
}
cursorAnimation();

function cursorAnimation2(){
    var page1Content = document.querySelector("#page4-lower");
    var cursor = document.querySelector("#cursor2");

    page1Content.addEventListener("mousemove",(e)=>{
        // console.log(e)
        // cursor.style.left = e.x+"px";
        // cursor.style.top = e.y+"px";

        gsap.to(cursor,{
            x:e.x,
            y:e.y
        })
    })

    page1Content.addEventListener("mouseenter",()=>{
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })

    page1Content.addEventListener("mouseleave",()=>{
        gsap.to(cursor,{
            scale:0,
            opacity:0,
            duration:1
        })
    })
}
cursorAnimation2();

function Page2Animation(){
    gsap.from(".animated",{
        y:120,
        opacity:0,
        stagger:0.4,
        duration:3,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 40%",
            end:"top 37%",
            // markers:true,
            scrub:3
        } 
    })
}
Page2Animation();

function ballAnimation(){
    // var tl = gsap.timeline();
    // var np = document.querySelector("#no")
    // tl.from("#no",{
    //     y:-100,
    //     opacity:0.3,
    //     scrollTrigger:{
    //         trigger:"#page4-lower",
    //         scroller:"#main",
    //     }
    // })
    // tl.to("#no",{
    //     y:120,
    //     opacity:0.3,
    //     scrollTrigger:{
    //         trigger:"#page4-lower",
    //         scroller:"#main",
    //     }
    // })

    gsap.to("#rotating",{
        rotate:250,
        duration:2,
        scrollTrigger:{
            trigger:"#page4-lower",
            scroller:"#main",
        }
    })
}
ballAnimation();
function Page4Animation(){
    gsap.from(".animated2",{
        y:120,
        opacity:0,
        stagger:0.4,
        duration:3,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            start:"top 40%",
            end:"top 37%",
            // markers:true,
            scrub:3
        } 
    })
}

Page4Animation();

function swipperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        breakpoints: {
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        },
        
    });
}

swipperAnimation();


function loaderAnimation(){
    var tl = gsap.timeline();
    tl.from("#loader h2",{
        x:40,
        opacity:0,
        duration:1,
        stagger:0.1,
    })
    tl.to("#loader h2",{
        x:-20,
        opacity:0,
        duration:1,
        stagger:0.1,
    })
    tl.to("#loader",{
        opacity:0
    })
    tl.to("#loader",{
        display:"none"
    })

    tl.from("#page1-content h1 span",{
        y:120,
        opacity:0,
        duration:1,
        stagger:0.1
    })
}

loaderAnimation();