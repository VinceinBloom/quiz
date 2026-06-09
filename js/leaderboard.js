const table =
document.getElementById("leaderboardBody");

const leaderboard =
JSON.parse(localStorage.getItem("leaderboard")) || [];

table.innerHTML = "";

leaderboard.forEach((player, index) => {

    table.innerHTML += `
    <tr>
        <td>${index + 1}</td>
        <td>${player.username}</td>
        <td>${player.score}</td>
    </tr>
    `;

});