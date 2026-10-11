export function savedata() {
    const data = [];
    document.querySelectorAll(".SAVE").forEach(card => {
        data.push({
        name: card.querySelector(".txtUI").value,
        score: Number(card.querySelector(".pot, .sc").innerHTML)
        });

    });
    sessionStorage.setItem("DATA", JSON.stringify(data));
}
