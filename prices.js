/* =========================================================
   Advantic – Preisdaten
   Diese Datei wird automatisch überschrieben (z.B. per n8n):
   - Amazon: über die Product Advertising API (erst nach Freischaltung)
   - Bergfreunde.ch: über den Awin-Produktfeed
   - Galaxus: über den Tradedoubler-Produktfeed

   Preise NICHT von Hand eintragen. Amazon erlaubt nur Preise aus
   der API, mit Zeitstempel und höchstens 24 Stunden alt. Ältere
   Einträge blendet die Seite automatisch aus.

   Format:
   window.ADVANTIC_PRICES = {
     items: {
       "garmin-fenix-8": {
         amazon:      { value: 0.00, currency: "EUR", updated: "2026-10-13T20:00:00Z" },
         bergfreunde: { value: 0.00, currency: "CHF", updated: "2026-10-13T20:00:00Z" },
         galaxus:     { value: 0.00, currency: "CHF", updated: "2026-10-13T20:00:00Z" }
       }
     }
   };
   ========================================================= */
window.ADVANTIC_PRICES = { items: {} };
