

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

        if (email === savedEmail && password === savedPassword) {

            alert("Login Successful!");

            window.location.href = "quiz.html";

        } else {

            alert("Invalid Email or Password!");
        }
    });
}