const table = document.getElementById("leaderboardTable");
const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

table.innerHTML = `
    <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Score</th>
    </tr>
`;

leaderboard.forEach((player, index) => {
    table.innerHTML += `
        <tr>
            <td>#${index + 1}</td>
            <td>${player.username}</td>
            <td>${player.score} pts</td>
        </tr>
    `;
});