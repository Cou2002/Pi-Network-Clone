function myFunction(x) {
    let y = document.getElementById("fixed-container");
    x.classList.toggle("change");

    if (y.style.height === "0px" || y.style.height === "") {
        y.style.height = "100%";
    } else {
        y.style.height = "0";
    }
}

function openSearch() {
    document.getElementById("search-container").style.height = "15%";
}

function closeSearch() {
    document.getElementById("search-container").style.height = "0"
}

// Select the navbar element
const navbar = document.getElementById('navBar');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Check if the vertical scroll position is greater than a certain threshold (e.g., 50 pixels)
    if (window.scrollY > 50) {
        // If scrolled down, add the 'scrolled' class
        navbar.classList.add('scrolled');
    } else {
        // If at the top (or above the threshold), remove the 'scrolled' class
        navbar.classList.remove('scrolled');
    }
});
const parent = document.querySelector(".pi-video-container");
const child = document.querySelector(".play-button");

parent.addEventListener("mouseenter", () => {
    child.classList.remove("returning");
    child.style.opacity = "1";
});

parent.addEventListener("mousemove", (e) => {
    const rect = parent.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    child.style.left = `${x}px`;
    child.style.top = `${y}px`;
});

parent.addEventListener("mouseleave", () => {
    child.classList.add("returning");
    child.style.left = "50%";
    child.style.top = "50%";
    child.style.opacity = "1";
});

// Pi video responsiveImg

const img = document.getElementById("piVideo");

function updateImage() {
    if (window.innerWidth >= 1025) {
        img.src = "/IMG/pi_video-6.webp";
    } else {
        img.src = "/IMG/WhatsApp Image 2026-02-10 at 9.28.09 PM.jpeg";
        img.style.width = ""
    }
}

updateImage();
window.addEventListener("resize", updateImage);
