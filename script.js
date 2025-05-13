// Function to change text dynamically
function changeText() {
    document.getElementById("intro").textContent = "Let's create something amazing together!";
}

// Theme Toggle Feature
document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        event.preventDefault();
    }
});
