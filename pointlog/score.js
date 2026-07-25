import { pscore } from "./tracker.js";
import { saveCards } from "./save.js";
import { loadCards } from "./load.js";

// Friendly Warning:
// Hello to whoever is reading this and want to edit. DON'T DO IT
// This code is held up by CHEWED GUM AND DEAD HOPES AND DREAMS.
// IF YOU DO WANT TO EDIT THIS CODE JUST PRY TO EVER GOD ON THE FACE OF THE EARTH
// I CHANGE ONE LINE OF CODE AND THE WHOLE THING JUST DIED.
// IT TOOK ME AN HOUR TO FIGURE OUT WHAT WAS GOING ON. TRUST ME DON'T DO IT

    function createCard(name = "", score = 0) {
        const card = document.createElement("p");
        card.className = "pcard";
        card.innerHTML = "";
        document.getElementById("cards").appendChild(card);
        const po = document.createElement("b");
        po.className = "sc";
        po.innerHTML = score;
        card.appendChild(po);
        const tb = document.createElement("input");
        tb.className = "txt";
        tb.value = name;
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
        saveCards();
        console.log("working!");
    }

    const add = document.getElementById("add");
    add.addEventListener("click", () => {
        createCard();
    });

    document.getElementById("cards").addEventListener("click", (event) => {
        const card = event.target.closest(".pcard");
        if (!card) return;
        const score = card.querySelector(".pot, .sc");
        let sc = Number(score.innerHTML);
    if (event.target.classList.contains("cba")) {
            sc += 1;
            score.innerHTML = sc;
            saveCards();
            console.log(sc);
            console.log("point added!");
        }
    if (event.target.classList.contains("cbs")) {
            sc -= 1;
            score.innerHTML = sc;
            saveCards();
            console.log(sc);
            console.log("point loss!");
        }
    });

    const remove = document.getElementById('remove');
    remove.addEventListener('click', () => {
        const cards = document.getElementById("cards");
    if (cards.lastElementChild) {
            cards.lastElementChild.remove();
            saveCards();
            console.log("working!");
        }

    });

    loadCards(createCard);
