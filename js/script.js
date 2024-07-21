document.addEventListener("DOMContentLoaded", function() {
    const tl = gsap.timeline();

    tl.to(".arcs", {
        duration: 1,
        scale: 1,
        ease: "power2.inOut"
    })
    .to(".disappearing-circle", {
        duration: 1,
        opacity: 0,
        ease: "power2.inOut",
        onComplete: function() {
            gsap.to(".button-glare", {
                duration: 0.20,
                x: '150%',
                ease: "power1.inOut",
            });
            gsap.to(".debit-card", {
                duration: 0.5,  
                bottom: '0px', 
                right: '0px', 
                rotation: 0,  
                ease: "power2.out",
                delay: 0.01, 
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
            });

            gsap.fromTo(".ad-content", {
                opacity: 0,
                x: 100
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power2.out"
            });
        }
    }, "-=1");

    
});
