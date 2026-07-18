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
                let sc = 0;
                card.appendChild(po);
                const tb = document.createElement("input");
                tb.className = "txt";
                card.appendChild(tb);
                const bm = document.createElement("button");
                bm.className = "cba";
                bm.innerHTML = "+";


                bm.addEventListener('click', () => {
                    sc += 1;
                    po.innerHTML = sc;
                    console.log(sc);
                    console.log("point added!");
                });

                card.appendChild(bm);

                bm2.addEventListener('click', () => {
                    sc -= 1;
                    po.innerHTML = sc;
                    console.log(sc);
                    console.log("point loss!");
                });

                card.appendChild(bm2);

                const bm2 = document.createElement("button");
                bm2.className = "cbs";
                bm2.innerHTML = "-";
                card.appendChild(bm2);
                const player = new pscore();
                console.log("working!");
        });

                bm.addEventListener('click', () => {
                    sc += 1;
                    po.innerHTML = sc;
                    console.log(sc);
                    console.log("point added!");
                });

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
                    document.getElementById("cards").lastElementChild.remove();
                    console.log("working!");
        });
