const adminuser = "admin";
const adminpass = "admin123";

document.getElementById("loginform").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if(username === adminuser && password === adminpass) {
        alert("Welcome, Admin!");
        localStorage.setItem("isAdmin", "true");
        window.location.href = "admin_dashboard.html"; // Redirect
    } else {
        alert("Invalid Credentials");
        console.log("Breach detected");
    }
});
