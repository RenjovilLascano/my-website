// ============================================================
//  app.js — Portfolio Website JavaScript
//  LBYCPG3 — Renjovil Joseph V. Lascano
// ============================================================


// ------------------------------------------------------------
// 1. TIME-BASED GREETING
// ------------------------------------------------------------
function getGreeting() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
        return "Good Morning!";
    } else if (hour >= 12 && hour < 17) {
        return "Good Afternoon!";
    } else if (hour >= 17 && hour < 21) {
        return "Good Evening!";
    } else {
        return "Good Night!";
    }
}

function displayGreeting() {
    const greetingEl = document.getElementById("greeting-message");
    if (greetingEl) {
        greetingEl.textContent = getGreeting();
    }
}


// ------------------------------------------------------------
// 2. LIVE DIGITAL CLOCK
// ------------------------------------------------------------
function updateClock() {
    const clockEl = document.getElementById("clock");
    if (!clockEl) return;

    const now = new Date();
    const hours   = now.getHours()  .toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    clockEl.textContent = `${hours}:${minutes}:${seconds}`;
}


// ------------------------------------------------------------
// 3. CONTACT FORM — retrieve values & log to console
// ------------------------------------------------------------
function handleContactForm() {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name    = document.getElementById("name").value.trim();
        const email   = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Print to browser console
        console.log("=== Contact Form Submission ===");
        console.log("Name:   ", name);
        console.log("Email:  ", email);
        console.log("Message:", message);

        alert(`Thank you, ${name}! Your message has been received.`);
        form.reset();
    });
}


// ------------------------------------------------------------
// 4. SIDEBAR NAVIGATION — section switching
// ------------------------------------------------------------
function initNavigation() {
    const menuLinks = document.querySelectorAll(".menu-link");
    const sections  = document.querySelectorAll(".content-section");

    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetSection = this.getAttribute("data-section");

            // Update active link
            menuLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            // Show target section, hide others
            sections.forEach(section => {
                if (section.id === targetSection) {
                    section.classList.add("active");
                } else {
                    section.classList.remove("active");
                }
            });
        });
    });
}

window.onload = function () {
    displayGreeting();
    updateClock();
    setInterval(updateClock, 1000);

    handleContactForm();
    initNavigation();
};