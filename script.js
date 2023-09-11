const gradients = ["gradient1", "gradient2", "gradient3"];
let currentIndex = 0;
const background1 = document.getElementById("background1");
const background2 = document.getElementById("background2");

function changeBackground() {
    if (background1.style.opacity == "1") {
        background2.className = 'background ' + gradients[currentIndex];
        background1.style.opacity = "0";
        background2.style.opacity = "1";
    } else {
        background1.className = 'background ' + gradients[currentIndex];
        background1.style.opacity = "1";
        background2.style.opacity = "0";
    }

    currentIndex = (currentIndex + 1) % gradients.length;
}

// Initiate with the first two gradients
background1.className = 'background ' + gradients[0];
background2.className = 'background ' + gradients[1];

// Change background every 2 seconds (2000 milliseconds).
setInterval(changeBackground, 2000);

/* ... (rest of the initial script) ... */

// Make the prompt disappear after 3 seconds
setTimeout(function() {
    const promptDiv = document.getElementById("prompt");
    promptDiv.style.opacity = "0";
    // Optional: Remove the prompt from the DOM after it becomes fully transparent
    setTimeout(() => promptDiv.remove(), 1000);
}, 3000);
