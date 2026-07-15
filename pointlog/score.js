import { pscore } from "./tracker.js";

            const add = document.getElementById('add');
                add.addEventListener('click', () => {
                const card = document.createElement("p");
                card.className = "pcard";
                card.innerHTML = "";
                document.getElementById("cards").appendChild(card);
                const bm = document.createElement("button");
                bm.className = "cba";
                bm.innerHTML = "+";
                card.appendChild(bm);
                const bm2 = document.createElement("button");
                bm2.className = "cbs";
                bm2.innerHTML = "-";
                card.appendChild(bm2);
                const tb = document.createElement("input");
                tb.className = "txt";
                tb.innerHTML = "-";
                card.appendChild(tb);
                const player = new pscore();
                console.log("working!");
        });
