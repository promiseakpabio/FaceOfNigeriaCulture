/*const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const icon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }

});*/

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    hamburger.style.display = "none";
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburger.style.display = "block";
});

const pageLoader = document.getElementById("page-loader");
window.addEventListener("load", () => {
    if (!pageLoader) return;
    pageLoader.style.opacity = "0";
    pageLoader.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
        pageLoader.remove();
    }, 500);
});

const commentForm = document.querySelector(".comment-form");
const commentName = document.getElementById("comment-name");
const commentEmail = document.getElementById("comment-email");
const saveCommentInfo = document.getElementById("chk");

function loadCommenterInfo() {
    if (!commentName || !commentEmail || !saveCommentInfo) return;

    const savedName = localStorage.getItem("commentName");
    const savedEmail = localStorage.getItem("commentEmail");

    if (savedName) commentName.value = savedName;
    if (savedEmail) commentEmail.value = savedEmail;
    if (savedName || savedEmail) saveCommentInfo.checked = true;
}

function updateCommenterStorage() {
    if (!commentName || !commentEmail || !saveCommentInfo) return;

    if (saveCommentInfo.checked) {
        localStorage.setItem("commentName", commentName.value.trim());
        localStorage.setItem("commentEmail", commentEmail.value.trim());
    } else {
        localStorage.removeItem("commentName");
        localStorage.removeItem("commentEmail");
    }
}

if (commentForm) {
    loadCommenterInfo();

    const confirmationMessage = document.createElement("p");
    confirmationMessage.className = "comment-confirmation";
    confirmationMessage.style.color = "#0b6623";
    confirmationMessage.style.marginTop = "1rem";
    confirmationMessage.style.fontWeight = "600";

    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        updateCommenterStorage();

        commentForm.querySelector("textarea")?.value && (commentForm.querySelector("textarea").value = "");
        commentName.value = "";
        commentEmail.value = "";

        if (!commentForm.contains(confirmationMessage)) {
            commentForm.appendChild(confirmationMessage);
        }

        confirmationMessage.textContent = "Thank you! Your comment has been submitted.";

        setTimeout(() => {
            confirmationMessage.textContent = "";
        }, 5000);
    });

    saveCommentInfo?.addEventListener("change", () => {
        if (!saveCommentInfo.checked) {
            localStorage.removeItem("commentName");
            localStorage.removeItem("commentEmail");
        }
    });
}


// Set registration closing date
   
const countdownDate = new Date("July 31, 2026 23:59:59").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))/(1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))/1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance < 0) {
        clearInterval(timer);

        document.querySelector(".countdown").innerHTML = `<h3>REGISTRATION CLOSED</h3>`;
    }

}, 1000);

function agreeToTerms() {
    document.getElementById("sub-section").style.display = "block";

    // Optional: automatically scroll to the section
    document.getElementById("sub-section").scrollIntoView({
        behavior: "smooth"
    });
}

function closeSection() {
    document.getElementById("sub-section").style.display = "none";
}