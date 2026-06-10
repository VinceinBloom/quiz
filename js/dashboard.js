document.addEventListener("DOMContentLoaded", () => {
    // 1. Authenticate check: Redirect to login if user isn't logged in
    const currentUser = JSON.parse(localStorage.getItem("currentUser")); // Adjust key based on your auth.js
    if (!currentUser) {
        window.location.href = "index.html"; // Or register.html/login.html
        return;
    }

    // 2. Display User Details
    document.getElementById("usernameDisplay").textContent = currentUser.username || "Player";

    // 3. Fetch and display scores from localStorage
    const scores = JSON.parse(localStorage.getItem("quizScores")) || []; 
    // Expecting structure like: [{username: "user", score: 80}, ...]
    
    const userScores = scores.filter(s => s.username === currentUser.username);

    if (userScores.length > 0) {
        // Get the most recent score
        document.getElementById("latestScore").textContent = userScores[userScores.length - 1].score;
        
        // Find the highest score
        const maxScore = Math.max(...userScores.map(s => s.score));
        document.getElementById("highScore").textContent = maxScore;
    }

    // 4. Logout Functionality
    document.getElementById("logoutBtn").addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("currentUser");
        window.location.href = "index.html"; 
    });
});