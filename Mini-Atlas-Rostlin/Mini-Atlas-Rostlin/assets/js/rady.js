function vykresliRady() {
    const tipsList = document.getElementById('tips-list');
    const rady = [
        { titul: "Světlo", text: "Většina pokojovek miluje nepřímé sluneční světlo. Pozor na úpal!" },
        { titul: "Vlhkost", text: "V zimě rostliny roste rozprašovačem, suchý vzduch z topení jim nesvědčí." },
        { titul: "Přesazování", text: "Ideální čas na nový květináč je jaro, kdy rostliny začínají růst." }
    ];

    tipsList.innerHTML = '';
    
    rady.forEach(rada => {
        const tipDiv = document.createElement('div');
        tipDiv.style.marginBottom = '20px';
        tipDiv.innerHTML = `
            <h3 style="color: var(--primary-color)">${rada.titul}</h3>
            <p>${rada.text}</p>
        `;
        tipsList.appendChild(tipDiv);
    });
}

// Export do globálního prostoru
window.vykresliRady = vykresliRady;