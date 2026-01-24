javascript:(function(){ fetch("https://raw.githubusercontent.com/einkilometer/strudel/refs/heads/main/raw/datei.txt") .then(r=>r.text()) .then(c=>window.location="https://strudel.cc/#"+c) })();

// ANLEITUNG:

// 1. kopiere die URL der RAW-Ansicht der datei.txt

// Beispiel: https://raw.githubusercontent.com/einkilometer/strudel/refs/heads/main/raw/datei.txt

// 2. Erstelle ein neues Bookmark in deinem Browser

// 3. Benenne es (z.B. "Strudel Bookmarklet")

// 4. Klicke auf das Bookmark, um deinen Strudel-Code zu laden
