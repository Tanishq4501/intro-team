// --- MATRIX RAIN EFFECT ---
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    // Semi-transparent black to create fade trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0"; // Green text
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Run matrix effect every 33ms
setInterval(drawMatrix, 33);

// Handle Window Resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


// --- INTERACTION LOGIC ---

function hackAction(name) {
    const originalText = document.querySelector(`.terminal-card h2:contains('${name}')`)?.innerText || name;
    alert(`[SYSTEM]: Accessing encrypted repository for ${name}... \n[STATUS]: Access Granted.`);
    // window.open('https://github.com/YOUR_GITHUB_USER', '_blank'); 
}

document.getElementById('deploy-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const response = confirm("Execute collaboration protocol?");
    if (response) {
        alert("Initializing handshake... Let's build something cool.");
    }
});

// Add a little console easter egg
console.log("%c SYSTEM BREACH DETECTED", "color: red; font-size: 20px; font-weight: bold;");
console.log("Just kidding. Welcome to the console, dev.");