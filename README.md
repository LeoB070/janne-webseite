# Vercel-Deploy für die statische Website

Diese Website besteht aus statischen HTML-, CSS- und Bild-Dateien und kann direkt auf Vercel deployed werden.

## Was vorbereitet wurde

- Vercel-Konfiguration in `vercel.json`
- Ignorieren großer oder nicht benötigter Ordner in `.vercelignore`

## So deployen

1. Dieses Verzeichnis als Git-Repository verbinden oder die Dateien in ein neues Repository pushen.
2. In Vercel ein neues Projekt anlegen und das Repository auswählen.
3. Das Projekt mit der Standard-Option für statische Dateien deployen lassen.
4. Nach dem ersten Deploy ist die Seite unter der Vercel-URL erreichbar.

## Lokaler Test

Die Website lässt sich lokal z. B. mit Python prüfen:

```bash
python -m http.server 8000
```

Dann im Browser unter `http://localhost:8000/` öffnen.
