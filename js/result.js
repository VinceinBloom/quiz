// ======================
// GET QUIZ DATA
// ======================

const username =
localStorage.getItem("username") || "Player";

const score =
Number(localStorage.getItem("score")) || 0;

const totalQuestions = 25;

const percentage =
Math.round((score / totalQuestions) * 100);

// ======================
// DISPLAY RESULT
// ======================

document.getElementById("score").innerHTML = `
<h2>${score}/${totalQuestions}</h2>
<h3>${percentage}%</h3>
`;

// ======================
// SAVE TO LEADERBOARD
// ======================

let leaderboard =
JSON.parse(localStorage.getItem("leaderboard")) || [];

// Add current player score
leaderboard.push({
    username: username,
    score: score
});

// Sort by highest score
leaderboard.sort((a, b) => b.score - a.score);

// Keep top 10 scores only
leaderboard = leaderboard.slice(0, 10);

// Save leaderboard
localStorage.setItem(
    "leaderboard",
    JSON.stringify(leaderboard)
);