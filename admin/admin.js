const adminuser = "admin";
const adminpass = "admin123";

document.getElementById("loginform").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === adminuser && password === adminpass) {
        alert("Welcome, Admin!");
        console.log("Admin has logged in");

        // Store a flag in localStorage to mark admin login
        localStorage.setItem("isAdmin", "true");

        window.location.href = "admin_dashboard.html";
    } else {
        alert("Invalid Credentials");
        console.log("Breach detected");
    }
});