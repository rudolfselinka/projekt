<?php
/**
 * Zpracování kontaktního formuláře a odeslání e-mailu
 */

// Kontrola, zda byla data odeslána metodou POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Sanitizace vstupních dat proti XSS útokům pomocí htmlspecialchars
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Konfigurace příjemce a předmětu zprávy
    $to = "selinka.rudolf@gmail.com";
    $subject = "Nový dotaz z Mini Atlasu";
    
    // Sestavení těla e-mailu
    $body = "Od: $name\nE-mail: $email\n\nZpráva:\n$message";

    // Odeslání e-mailu pomocí vestavěné funkce mail()
    if (mail($to, $subject, $body)) {
        // Úspěšné odeslání – uživatel uvidí potvrzení
        echo "Zpráva byla úspěšně odeslána!";
    } else {
        // Chybový stav v případě selhání poštovního serveru
        echo "Došlo k chybě při odesílání.";
    }
}
?>
