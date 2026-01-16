<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "tvuj-email@seznam.cz";
    $subject = "Nový dotaz z Mini Atlasu";
    $body = "Od: $name\nE-mail: $email\n\nZpráva:\n$message";

    if (mail($to, $subject, $body)) {
        echo "Zpráva byla úspěšně odeslána!";
    } else {
        echo "Došlo k chybě při odesílání.";
    }
}
?>