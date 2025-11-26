# Název hlavní složky projektu
$root = "Mini-Atlas-Rostlin"

# Vytvoření hlavní složky, pokud neexistuje
if (!(Test-Path $root)) {
    New-Item -ItemType Directory -Path $root
}

# Složky projektu
$folders = @(
    "$root/assets",
    "$root/assets/css",
    "$root/assets/js",
    "$root/assets/img",
    "$root/assets/data",
    "$root/php"
)

# Vytvoření složek
foreach ($folder in $folders) {
    if (!(Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder
    }
}

# Soubory projektu (prázdné připravené k úpravě)
$files = @(
    "$root/index.html",
    "$root/rostliny.html",
    "$root/rady.html",
    "$root/kontakt.html",

    "$root/assets/css/style.css",
    "$root/assets/css/cards.css",
    "$root/assets/css/header.css",
    "$root/assets/css/footer.css",

    "$root/assets/js/main.js",
    "$root/assets/js/rostliny.js",
    "$root/assets/js/rady.js",
    "$root/assets/js/kontakt.js",

    "$root/assets/data/rostliny.json",

    "$root/php/send.php"
)

# Vytvoření souborů
foreach ($file in $files) {
    if (!(Test-Path $file)) {
        New-Item -ItemType File -Path $file
    }
}

Write-Host "Projektová struktura 'Mini-Atlas-Rostlin' byla úspěšně vytvořena!"
