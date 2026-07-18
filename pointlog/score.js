import { pscore } from "./tracker.js";

const add = document.getElementById('add');
    add.addEventListener('click', () => {
        const card = document.createElement("p");
        card.className = "pcard";
        card.innerHTML = "";
        document.getElementById("cards").appendChild(card);
        const po = document.createElement("b");
        po.className = "sc";
        po.innerHTML = "0";
        card.appendChild(po);
        const tb = document.createElement("input");
        tb.className = "txt";
        card.appendChild(tb);
        const bm = document.createElement("button");
        bm.className = "cba";
        bm.innerHTML = "+";
        card.appendChild(bm);
        const bm2 = document.createElement("button");
        bm2.className = "cbs";
        bm2.innerHTML = "-";
        card.appendChild(bm2);
        const player = new pscore();
        console.log("working!");
    });


        document.getElementById("cards").addEventListener("click", (event) => {
            if (event.target.classList.contains("cba")) {
                const card = event.target.parentElement;
                const score = card.querySelector(".pot, .sc");

                sc += 1;
                score.innerHTML = sc;
                console.log(sc);
                console.log("point added!");
            }

            if (event.target.classList.contains("cbs")) {
                const card = event.target.parentElement;
                const score = card.querySelector(".pot, .sc");

                sc -= 1;
                score.innerHTML = sc;
                console.log(sc);
                console.log("point loss!");
            }
        });


    const remove = document.getElementById('remove');
    remove.addEventListener('click', () => {
        document.querySelector(".pcard").remove();
        console.log("working!");
    });
