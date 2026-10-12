export let wv = 0;
export function autoFullscreen() {
    window.addEventListener("dblclick", async function () {
        const elem = document.documentElement;

        try {
            if (!document.fullscreenElement) {
                if (elem.requestFullscreen) {
                    await elem.requestFullscreen();
                } else if (elem.webkitRequestFullscreen) {
                    elem.webkitRequestFullscreen();
                }

                wv = 1;
            }

            console.log(wv);
        } catch (error) {
            console.error("Fullscreen failed:", error);
            wv = 0;
        }
    });
}

// setTimeout(() => { p3
//     document.documentElement.requestFullscreen()
//         .catch(error => {
//             console.log("Fullscreen was blocked:", error);
//         });
// }, 3000);

// const num = 1; p2
//
// if (num === 1) {
//     document.documentElement.requestFullscreen();
// }

// window.addEventListener('a', async function autoFullscreen() { p1
//     const elem = document.documentElement;
//     try {
//         if (elem.requestFullscreen) {
//             await elem.requestFullscreen();
//         } else if (elem.webkitRequestFullscreen) {
//             elem.webkitRequestFullscreen();
//         }
//     } catch (error) {
//         console.log("Fullscreen requires user interaction:", error);
//     }
// }, { once: true });