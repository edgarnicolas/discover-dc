document.addEventListener("DOMContentLoaded", function() {
    const tl = gsap.timeline();

    tl.to(".arcs", {
        duration: 1,
        scale: 1, 
        ease: "power2.inOut",
        onStart: function() {
            gsap.to(".circle-out", {
                duration: 1.5,
                attr: { r: 67 }, 
                ease: "power2.out",
            });
        }
    })
    .to(".disappearing-circle", {
        duration: 1,
        scale: 0, 
        ease: "power2.inOut",
        delay: -0.5
    })
    .to(".debit-card", {
        duration: 0.5,  
        bottom: '0px', 
        right: '0px', 
        rotation: 0,
        delay: -0.7,  
        ease: "power2.out",
        onComplete: function() {
            gsap.to(".debit-card", {
                duration: 0.1,
                scale: 1.01, 
                ease: "power1.inOut",
                onComplete: function() {
                    gsap.to(".debit-card", {
                        duration: 0.5,
                        scale: 1.0, 
                        ease: "bounce.out",
                    });
                }
            });
        }
    })
    .fromTo(".ad-content", {
        opacity: 0,
        x: 100
    }, {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out",
        onComplete: function() {
            gsap.to(".cashback", {
                duration: 0.5,
                scale: 1.05,
                yoyo: true,
                repeat: 1,
                ease: "power2.inOut"
            });
        }
    })
    .fromTo("#learn-more", {
        opacity: 0,
        x: 100
    }, {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.out",
        onStart: function() {
            gsap.to(".button-glare", {
                duration: 0.8, 
                x: '150%',
                ease: "power1.inOut"
            });
        }
    }, "-=2"); 
});
