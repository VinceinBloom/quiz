

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("regEmail").value;
        const password = document.getElementById("regPassword").value;

        // Save user data
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Registration Successful!");
        // Redirect to login page (assuming index.html is your login page)
        window.location.href = "index.html";
    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const savedEmail = localStorage.getItem("email");
        const savedPassword = localStorage.getItem("password");
        const savedUsername = localStorage.getItem("username"); // Fetch username for session tracking

        if (email === savedEmail && password === savedPassword) {
            alert("Login Successful!");

            /* CRITICAL UPDATE FOR DASHBOARD:
               Store a temporal session object for the currently active user.
               This allows dashboard.js to dynamically say "Welcome back, Username!"
            */
            const sessionUser = {
                username: savedUsername,
                email: savedEmail
            };
            localStorage.setItem("currentUser", JSON.stringify(sessionUser));

            // Redirect to the dashboard hub instead of forcing them straight into the quiz
            window.location.href = "dashboard.html";

        } else {
            alert("Invalid Email or Password!");
        }
    });
}