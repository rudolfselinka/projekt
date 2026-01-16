function inicializujKontakt() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        const email = form.querySelector('input[type="email"]').value;
        
        if (!email.includes('@')) {
            e.preventDefault();
            alert('Prosím zadejte platný e-mail.');
        } else {
            // Zde by mohl proběhnout AJAX odeslání, ale zatím necháme klasické PHP
            console.log('Formulář je připraven k odeslání.');
        }
    });
}

window.inicializujKontakt = inicializujKontakt;