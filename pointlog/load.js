window.addEventListener("load", () => {
    const data = JSON.parse(sessionStorage.getItem("scoreboard"));

    if (!data) return;

    document.getElementById("cards").innerHTML = "";

    data.forEach(player => {
        createCard(player.name, player.score);
    });
});
