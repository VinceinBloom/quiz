const username = localStorage.getItem("username") || "Player";
const score = Number(localStorage.getItem("score")) || 0;
const totalQuestions = 25;
const percentage = Math.round((score / totalQuestions) * 100);

document.getElementById("score").innerHTML = `
<h2>${score}/${totalQuestions}</h2>
<h3>${percentage}%</h3>
`;

let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

const existingUserIndex = leaderboard.findIndex(
    entry => entry.username.toLowerCase() === username.toLowerCase()
);

if (existingUserIndex !== -1) {
    if (score > leaderboard[existingUserIndex].score) {
        leaderboard[existingUserIndex].score = score;
    }
} else {
    leaderboard.push({
        username: username,
        score: score
    });
}

leaderboard.sort((a, b) => b.score - a.score);
leaderboard = leaderboard.slice(0, 10);

localStorage.setItem("leaderboard", JSON.stringify(leaderboard));