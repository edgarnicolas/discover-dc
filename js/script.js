document.addEventListener("DOMContentLoaded", function() {
    gsap.timeline()
        .to(".arcs", {
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
                    y: '-300px',
                    ease: "power2.out",
                    delay: 0.50,
                    onComplete: function() {
                        gsap.to(".debit-card", {
                            duration: 0.3,
                            scale: 1.1, // Scale up the card a bit
                            ease: "power1.inOut",
                            onComplete: function() {
                                gsap.to(".debit-card", {
                                    duration: 0.5,
                                    scale: 1.0, // Return to normal size with a bounce effect
                                    ease: "bounce.out",
                                });
                            }
                        });
                    }
                });
            }
        }, "-=1"); // Start this animation slightly earlier to overlap with the scale animation
});
