/**
 * Hlavní řídící skript projektu
 * Zajišťuje plynulý scroll a spuštění všech modulů po načtení DOM
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializace modulů, pokud jsou definovány
    if (typeof vykresliRady === 'function') vykresliRady();
    if (typeof inicializujKontakt === 'function') inicializujKontakt();

    // Implementace plynulého scrollování pro one-page navigaci
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset kvůli fixnímu menu
                    behavior: 'smooth'
                });
            }
        });
    });
});
