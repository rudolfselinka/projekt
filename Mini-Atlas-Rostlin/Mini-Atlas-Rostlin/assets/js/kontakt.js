/**
 * Správa kontaktního formuláře a základní validace
 */
function inicializujKontakt() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        const emailInput = form.querySelector('input[type="email"]');
        
        // Jednoduchá kontrola formátu e-mailu před odesláním
        if (!emailInput.value.includes('@')) {
            e.preventDefault();
            alert('Zadejte prosím platnou e-mailovou adresu.');
        } else {
            console.log('Formulář připraven k odeslání na server.');
        }
    });
}

window.inicializujKontakt = inicializujKontakt;
