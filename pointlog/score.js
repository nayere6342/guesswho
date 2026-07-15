import { pscore } from "./tracker.js";

            const add = document.getElementById('add');
                add.addEventListener('click', () => {
                const card = document.createElement("p");
                card.className = "pcard";
                card.innerHTML = "name";
                document.body.appendChild(card);
                const player = new pscore();
                console.log("working!");
        });
