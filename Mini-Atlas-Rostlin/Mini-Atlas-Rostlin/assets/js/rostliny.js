document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('plant-grid');

    fetch('assets/data/rostliny.json')
        .then(res => {
            if (!res.ok) throw new Error('Nepodařilo se načíst JSON. Spouštíš web přes Live Server?');
            return res.json();
        })
        .then(data => {
            grid.innerHTML = data.map(r => `
                <article class="card">
                    <img src="${r.foto}" alt="${r.nazev}" onerror="this.src='https://via.placeholder.com/300x400?text=Chybi+obrazek'">
                    <div class="card-content">
                        <h3>${r.nazev}</h3>
                        <p>${r.popis}</p>
                        <p style="margin-top:15px"><strong>Náročnost:</strong> ${r.narocnost}</p>
                    </div>
                </article>
            `).join('');
        })
        .catch(err => {
            console.error(err);
            grid.innerHTML = `<p style="color:white; text-align:center;">Chyba: ${err.message}</p>`;
        });
});