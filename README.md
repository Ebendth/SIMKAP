# Übungen – SIMKAP & DAUF

Offline-fähige Übungs-App fürs Eignungstest-Training.

**Startseite:** https://ebendth.github.io/SIMKAP/

| Übung | Ordner | Inhalt |
|---|---|---|
| SIMKAP | `simkap/` | Abstreichen, 75 Tonfragen, Kalender, Telefonbuch, Zeitaufgaben, Auswertung in % |
| DAUF | `dauf/` | 2000 Dreiecksreihen mit Sprung, 30 min, Fehlerauswertung in % und 5-Minuten-Verlauf |

## Installieren
- **iPhone:** Startseite in Safari öffnen → Teilen → „Zum Home-Bildschirm“. Danach offline nutzbar.
- **Android:** in Chrome öffnen → Menü → „App installieren“.

## Aufbau
- `index.html` – Startseite mit Übungsauswahl
- `sw.js` – Service Worker (offline; lädt online immer die neueste Version)
- `manifest.webmanifest`, `icon-*.png`, `apple-touch-icon.png` – App-Name und Symbol
