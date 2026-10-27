# Bildningsröst

Fristående, statisk och mobilanpassad sida för medlemmars egna brev om facklig bildning och medlemsdemokrati.

## Starta
Öppna index.html eller kör `python3 -m http.server 8000`.

## Mottagare
Ändra `config.js` för att lägga till **offentligt verifierade** adresser. Den nuvarande listan är ofullständig. Kontrollera adress och funktion före publicering. Användaren väljer mottagare och skickar själv via sin mejlapp. Ingen adress får uppfattas som en verifierad direktadress till förbundsstyrelsen utan källa.

## Publicera
Repositoryt kan publiceras med GitHub Pages. Workflow finns under `.github/workflows/pages.yml`. Aktivera GitHub Pages med **GitHub Actions** som källa i Settings → Pages. Privat repository kan kräva särskild plan för Pages.

## Begränsningar
Generatorn använder lokala redaktionella textdelar, inte AI. Unika brev garanteras inte. Besökaren måste granska och själv godkänna brevet. `mailto:` skickar aldrig automatiskt och kan ha längdbegränsningar. Ingen serverlagring eller kontoinloggning. Webbplatsen är inte officiell för Byggnads.