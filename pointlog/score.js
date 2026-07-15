import { pscore } from "./tracker.js";

            const add = document.getElementById('add');
                add.addEventListener('click', () => {
                const card = document.createElement("p");
                card.className = "pcard";
                card.innerHTML = "name";
                document.body.appendChild(card);
                console.log("working!");
                const player = new pscore();
        });
