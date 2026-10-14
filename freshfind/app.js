// FreshFind JavaScript
console.log("FreshFind website loaded successfully!");

// 1. Mobile Navbar Toggle Feature
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    // Hamburger button dynamic create karna
    if (navbar && navLinks) {
        const toggleBtn = document.createElement("button");
        toggleBtn.className = "nav-toggle-btn";
        toggleBtn.innerHTML = "&#9776;"; // Hamburger Icon (☰)
        toggleBtn.setAttribute("aria-label", "Toggle navigation");
        
        // Logo ke baad toggle button add karna
        navbar.insertBefore(toggleBtn, navLinks);

        // Click event toggle karne ke liye
        toggleBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            // Icon change karna (☰ se ✕)
            if (navLinks.classList.contains("active")) {
                toggleBtn.innerHTML = "&times;";
            } else {
                toggleBtn.innerHTML = "&#9776;";
            }
        });
    }
});

// 2. Fresh Produce Cards Click Event
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const heading = card.querySelector("h3");
        if (heading) {
            const name = heading.textContent;
            alert("Aap ne " + name + " select kiya hai.");
        }
    });
});
