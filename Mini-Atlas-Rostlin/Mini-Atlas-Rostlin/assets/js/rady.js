/**
 * Generování tipů pro péči o rostliny do gridu
 */
function vykresliRady() {
    const tipsList = document.getElementById('tips-list');
    if (!tipsList) return;

    const dataRady = [
        { titul: "☀️ Světlo a stanoviště", text: "Většina rostlin miluje jasné, ale nepřímé světlo. Přímé slunce listy pálí." },
        { titul: "💧 Pravidla zálivky", text: "Zlévejte až po proschnutí horní vrstvy substrátu. Pozor na přemokření." },
        { titul: "🌫️ Vlhkost vzduchu", text: "Tropické kousky ocení rosení, zejména během zimní topné sezóny." },
        { titul: "🌱 Substrát a výživa", text: "Používejte vzdušné směsi a během léta hnojte každých 14 dní." }
    ];

    // Vykreslení elementů s čistou strukturou
    tipsList.innerHTML = dataRady.map(rada => `
        <div class="rady-item">
            <h3>${rada.titul}</h3>
            <p>${rada.text}</p>
        </div>
    `).join('');
}

// Export funkce do globálního prostoru pro main.js
window.vykresliRady = vykresliRady;
