javascript:(function(){
  fetch("https://gist.githubusercontent.com/einkilometer/strudel/raw/datei.txt")
    .then(r=>r.text())
    .then(c=>window.location="https://strudel.cc/#"+c)
})();

// ANLEITUNG:
// 1. Ersetze GISTID mit der ID deines Gists
//    Beispiel: https://gist.github.com/einkilometer/abc123def456 → GISTID = abc123def456
// 2. Erstelle ein neues Bookmark in deinem Browser
// 3. Benenne es (z.B. "Strudel Bookmarklet")
// 4. Kopiere den obigen Code (mit deiner GISTID) als URL des Bookmarks
// 5. Klicke auf das Bookmark, um deinen Strudel-Code zu laden
