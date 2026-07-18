[
    {
        name: "",
        score: 0
    },
    {
        name: "",
        score: 0
    }
    {
        name: "",
        score: 0
    }
    {
        name: "",
        score: 0
    }
    {
        name: "",
        score: 0
    }
]

import { pscore } from "./tracker.js";

function saveCards() {
    const data = [];

    document.querySelectorAll(".pcard").forEach(card => {
        data.push({
            name: card.querySelector(".txt").value,
            score: Number(card.querySelector(".pot, .sc").innerHTML)
        });
    });

    sessionStorage.setItem("scoreboard", JSON.stringify(data));


