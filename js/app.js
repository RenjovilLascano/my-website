function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 5  && hour < 12) return "Good Morning!";
    if (hour >= 12 && hour < 17) return "Good Afternoon!";
    if (hour >= 17 && hour < 21) return "Good Evening!";
    return "Good Night!";
}

function displayGreeting() {
    const el = document.getElementById("greeting-message");
    if (el) el.textContent = getGreeting();
}

function updateClock() {
    const el = document.getElementById("clock");
    if (!el) return;
    const now = new Date();
    const h = now.getHours()  .toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');
    el.textContent = `${h}:${m}:${s}`;
}

function typeText(elementId, text, speed = 60) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.textContent = "";
    let index = 0;
    function typeNextChar() {
        if (index < text.length) {
            el.textContent += text.charAt(index);
            index++;
            setTimeout(typeNextChar, speed);
        }
    }
    typeNextChar();
}

function isRateLimited() {
    const now = Date.now();
    const LIMIT = 3;
    const WINDOW = 60000;

    let times = JSON.parse(localStorage.getItem("submitTimes") || "[]");
    times = times.filter(t => now - t < WINDOW);

    if (times.length >= LIMIT) {
        localStorage.setItem("submitTimes", JSON.stringify(times));
        return true;
    }

    times.push(now);
    localStorage.setItem("submitTimes", JSON.stringify(times));
    return false;
}

let formLoadTime = null;

function isTooFast() {
    if (!formLoadTime) return false;
    return (Date.now() - formLoadTime) / 1000 < 2;
}

const SPAM_WORDS = [
    "free money", "buy now", "click here",
    "subscribe", "promo", "limited offer",
    "act now", "100% free", "winner"
];

function containsSpam(text) {
    const lower = text.toLowerCase();
    return SPAM_WORDS.some(word => lower.includes(word));
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setFieldError(inputEl, errorElId, message) {
    const errEl = document.getElementById(errorElId);
    inputEl.classList.add("input-error");
    inputEl.classList.remove("input-ok");
    if (errEl) errEl.textContent = message;
}

function setFieldOk(inputEl, errorElId) {
    const errEl = document.getElementById(errorElId);
    inputEl.classList.remove("input-error");
    inputEl.classList.add("input-ok");
    if (errEl) errEl.textContent = "";
}

function clearFieldState(inputEl, errorElId) {
    const errEl = document.getElementById(errorElId);
    inputEl.classList.remove("input-error", "input-ok");
    if (errEl) errEl.textContent = "";
}

function showFormStatus(message, type) {
    const statusEl = document.getElementById("form-status");
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = `form-status form-status--${type} form-status--visible`;
    setTimeout(() => {
        statusEl.className = "form-status";
        statusEl.textContent = "";
    }, 6000);
}

function attachRealTimeValidation(form) {
    const nameEl    = form.querySelector("#contact-name");
    const emailEl   = form.querySelector("#contact-email");
    const messageEl = form.querySelector("#contact-message");
    const counter   = document.getElementById("char-counter");

    if (nameEl) {
        nameEl.addEventListener("input", () => {
            const val = nameEl.value.trim();
            if (val.length === 0) {
                clearFieldState(nameEl, "error-name");
            } else if (val.length < 2) {
                setFieldError(nameEl, "error-name", "Name must be at least 2 characters.");
            } else if (val.length > 80) {
                setFieldError(nameEl, "error-name", "Name must be under 80 characters.");
            } else {
                setFieldOk(nameEl, "error-name");
            }
        });
    }

    if (emailEl) {
        emailEl.addEventListener("input", () => {
            const val = emailEl.value.trim();
            if (val.length === 0) {
                clearFieldState(emailEl, "error-email");
            } else if (!isValidEmail(val)) {
                setFieldError(emailEl, "error-email", "Please enter a valid email address (e.g. you@example.com).");
            } else {
                setFieldOk(emailEl, "error-email");
            }
        });
    }

    if (messageEl) {
        messageEl.addEventListener("input", () => {
            const val = messageEl.value;
            const len = val.length;
            if (counter) counter.textContent = `${len} / 1000`;
            if (len === 0) {
                clearFieldState(messageEl, "error-message");
            } else if (len < 10) {
                setFieldError(messageEl, "error-message", "Message must be at least 10 characters.");
            } else if (len > 1000) {
                setFieldError(messageEl, "error-message", "Message must be under 1000 characters.");
            } else {
                setFieldOk(messageEl, "error-message");
            }
        });
    }
}

function handleContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    formLoadTime = Date.now();
    attachRealTimeValidation(form);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameEl    = form.querySelector("#contact-name");
        const emailEl   = form.querySelector("#contact-email");
        const messageEl = form.querySelector("#contact-message");

        const name    = nameEl.value.trim();
        const email   = emailEl.value.trim();
        const message = messageEl.value.trim();

        let valid = true;

        if (name.length < 2) {
            setFieldError(nameEl, "error-name", "Name must be at least 2 characters.");
            valid = false;
        } else if (name.length > 80) {
            setFieldError(nameEl, "error-name", "Name must be under 80 characters.");
            valid = false;
        } else {
            setFieldOk(nameEl, "error-name");
        }

        if (!email.includes("@") || !isValidEmail(email)) {
            setFieldError(emailEl, "error-email", "Enter a valid email address.");
            valid = false;
        } else {
            setFieldOk(emailEl, "error-email");
        }

        if (message.length < 10) {
            setFieldError(messageEl, "error-message", "Message must be at least 10 characters.");
            valid = false;
        } else if (message.length > 1000) {
            setFieldError(messageEl, "error-message", "Message must be under 1000 characters.");
            valid = false;
        } else {
            setFieldOk(messageEl, "error-message");
        }

        if (!valid) {
            showFormStatus("Please fix the errors highlighted above before submitting.", "error");
            return;
        }

        if (containsSpam(message)) {
            setFieldError(messageEl, "error-message", "Your message contains blocked spam keywords.");
            showFormStatus("Your message was flagged as spam. Please revise it.", "warning");
            return;
        }

        if (isTooFast()) {
            showFormStatus("Submission was too fast. Please review your message and try again.", "warning");
            return;
        }

        if (isRateLimited()) {
            showFormStatus("Too many submissions. Please wait a minute before trying again.", "warning");
            return;
        }

        console.log("=== Contact Form Submission ===");
        console.log("Name:   ", name);
        console.log("Email:  ", email);
        console.log("Message:", message);

        showFormStatus("Sending your message...", "success");
        form.submit();
    });
}

function showSection(target) {
    const menuLinks = document.querySelectorAll(".menu-link");
    const sections  = document.querySelectorAll(".content-section");
    if (!document.getElementById(target)) return;

    menuLinks.forEach(l => {
        l.classList.toggle("active", l.getAttribute("data-section") === target);
    });

    sections.forEach(section => {
        if (section.id === target) {
            section.classList.add("active");
            if (target === "about") {
                formLoadTime = Date.now();
            }
        } else {
            section.classList.remove("active");
        }
    });

    if (history.replaceState) history.replaceState(null, "", "#" + target);
    const main = document.querySelector(".main-section");
    if (main) main.scrollTop = 0;
    window.scrollTo(0, 0);
}

function initNavigation() {
    document.querySelectorAll(".menu-link, [data-goto]").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            showSection(this.getAttribute("data-section") || this.getAttribute("data-goto"));
        });
    });

    const initial = window.location.hash.replace("#", "");
    if (initial) showSection(initial);
}

window.onload = function () {
    displayGreeting();
    updateClock();
    setInterval(updateClock, 1000);
    typeText("typed-welcome", "Welcome to my Portfolio Website", 65);
    handleContactForm();
    initNavigation();
};