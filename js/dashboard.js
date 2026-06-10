const username = localStorage.getItem("username") || "Player";
const score = localStorage.getItem("score") || "0";

let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
const userEntry = leaderboard.find(entry => entry.username.toLowerCase() === username.toLowerCase());
const highScore = userEntry ? userEntry.score : score;

document.getElementById("dashWelcomeText").innerText = `Welcome Back, ${username}!`;
document.getElementById("latestScoreDisplay").innerText = score;
document.getElementById("highScoreDisplay").innerText = highScore;

document.getElementById("dashLogoutBtn").onclick = function(e) {
    e.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("score");
    window.location.href = "index.html";
};