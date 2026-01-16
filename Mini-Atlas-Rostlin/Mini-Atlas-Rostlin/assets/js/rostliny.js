/**
 * Načítání dat o rostlinách z externího JSON souboru
 */
async function nactiRostliny() {
    const grid = document.getElementById('plant-grid');
    if (!grid) return;

    try {
        // AJAX volání pro získání dat
        const res = await fetch('assets/data/rostliny.json');
        if (!res.ok) throw new Error('Data se nepodařilo načíst');
        
        const data = await res.json();
        
        // Mapování dat do HTML šablony karet
        grid.innerHTML = data.map(r => `
            <article class="card">
                <img src="${r.foto}" alt="${r.nazev}" onerror="this.src='https://via.placeholder.com/300x400?text=Chyba+obrazku'">
                <div class="card-content">
                    <h3>${r.nazev}</h3>
                    <p>${r.popis}</p>
                    <span class="card-info">Náročnost: ${r.narocnost}</span>
                </div>
            </article>
        `).join('');
    } catch (err) {
        console.error('Chyba AJAXu:', err);
        grid.innerHTML = `<p style="text-align:center">Omlouváme se, katalog je dočasně nedostupný.</p>`;
    }
}

// Spuštění hned po načtení stránky
document.addEventListener('DOMContentLoaded', nactiRostliny);
