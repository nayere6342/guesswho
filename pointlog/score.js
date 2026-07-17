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

            const remove = document.getElementById('remove');
                remove.addEventListener('click', () => {
                    document.querySelector(".cards").remove();
        });

            const m = document.getElementById('m');
                m.addEventListener('click', () => {
                    sc =+ 1;
                    console.log(sc);
        });



