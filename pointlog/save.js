export function saveCards() {

    const data = [];

    document.querySelectorAll(".pcard").forEach(card => {

        data.push({
            name: card.querySelector(".txt").value,
            score: Number(card.querySelector(".pot, .sc").innerHTML)
        });

    });

    sessionStorage.setItem("scoreboard", JSON.stringify(data));

}
