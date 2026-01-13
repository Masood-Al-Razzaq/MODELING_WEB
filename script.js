function wheel_animation(params) {

    window.addEventListener("wheel", (dets) => {
        if (dets.deltaY > 0) {
            console.log("seedha scrolling")

            gsap.to(".marque", {
                transform: 'translateX(-200%)',        //to move text horizontaly

                duration: 4,

                repeat: -1,
                ease: "none"


            })
            gsap.to(".marque img ", {
                rotate: 180               //to move text horizontaly  
            })

        }


        if (dets.deltaY < 0) {
            console.log("ulta scrolling")
            gsap.to(".marque", {
                transform: 'translateX(00%)',        //to move text horizontaly

                duration: 4,

                repeat: -1,
                ease: "none"


            })

            gsap.to(".marque img ", {
                rotate: 0             //to move text horizontaly  
            })

        }
    })
}

wheel_animation();


/* -- Bubble Animation -- */

const wrapper = document.getElementById("bubble-wrapper");
const footer = document.getElementById("footer"); // Get footer reference

const animateBubble = x => {
    const bubble = document.createElement("div");

    bubble.className = "bubble";
    bubble.style.left = `${x}px`;

    wrapper.appendChild(bubble);

    setTimeout(() => wrapper.removeChild(bubble), 2000);
}

// Only animate when hovering over the footer
footer.onmousemove = e => {
    // Calculate X relative to the viewport/page is fine for absolute positioning 
    // since footer spans full width.
    animateBubble(e.clientX);
};
