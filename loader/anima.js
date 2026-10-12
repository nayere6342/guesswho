import { autoFullscreen, wv, } from "./filler.js";
import { ev, setEv } from "./state.js";

autoFullscreen();

window.addEventListener("click", function checkEnable() {
    if (wv === 1) {
        let rotate = 0;
        const element = document.querySelector(".io");
        const randomTime = Math.floor(Math.random() * 11) + 10;
        document.querySelector(".note").remove();

        setTimeout(() => {
            console.log("bye bye");
            window.location.href = "../index.html";
        }, randomTime * 1000);

        if (ev === 0) {
            setEv(1);
            console.log("end B connected");
        }
        if (!element) {
        } else {
            function animateRotation() {
                rotate += 1;
                element.style.rotate = rotate + "deg";

                if (rotate < 19000) {
                    requestAnimationFrame(animateRotation);
                } else {
                    console.log("working!");
                    window.removeEventListener("click", checkEnable);
                }
            }
            requestAnimationFrame(animateRotation);
        }
    }
});



// import { autoFullscreen, wv } from "./filler.js";
//     autoFullscreen();
//
//     window.addEventListener("click", function checkEnable() {
//         if (wv === 1) {
//             let loop = 1;
//             let rotate = 0;
//             while(loop <= 5000) {
//                 rotate += 1;
//                 document.querySelector(".io").style.rotate = rotate + "deg";
//                 loop++;
//             }
//             console.log("working!");
//             window.removeEventListener("click", checkEnable);
//         }
//     });