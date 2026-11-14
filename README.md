# Übungen – SIMKAP, DAUF, Vigilanz & Stop-Signal

Offline-fähige Übungs-App fürs Eignungstest-Training.

**Startseite:** https://ebendth.github.io/SIMKAP/

| Übung | Ordner | Inhalt |
|---|---|---|
| SIMKAP | `simkap/` | Abstreichen (echte Zahlen- und Symbollisten), 75 Tonfragen, Kalender, Telefonbuch, Zeitaufgaben, Auswertung in % |
| Vigilanz | `vigilanz/` | Punkt springt im Kreis, 2–7 Sprünge pro Minute, 30 min, Fehlerquote und 5-Minuten-Verlauf |
| Stop-Signal | `stopsignal/` | Pfeile links/rechts, Piepton = nicht drücken, adaptive Verzögerung, Fehler %, SSRT |
| DAUF | `dauf/` | 2000 Dreiecksreihen mit Sprung, 30 min, Fehlerauswertung in % und 5-Minuten-Verlauf |

## Installieren
- **iPhone:** Startseite in Safari öffnen → Teilen → „Zum Home-Bildschirm“. Danach offline nutzbar.
- **Android:** in Chrome öffnen → Menü → „App installieren“.

## Aufbau
- `index.html` – Startseite mit Übungsauswahl
- `sw.js` – Service Worker (offline; lädt online immer die neueste Version)
- `manifest.webmanifest`, `icon-*.png`, `apple-touch-icon.png` – App-Name und Symbol
