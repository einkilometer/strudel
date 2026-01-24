#Short links to strudel

short.html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Shortlink Loader</title>
</head>
<body>
<script>
  // Hash ohne "#"
  const key = location.hash.slice(1);

  // Mapping definieren
  const links = {
    "strudel": "https://raw.githubusercontent.com/einkilometer/strudel/refs/heads/main/raw/datei.txt",
    "test": "https://example.com/test.txt"
  };

  // Wenn Key existiert → laden
  if (links[key]) {
    fetch(links[key])
      .then(r => r.text())
      .then(c => location = "https://strudel.cc/#" + c);
  } else {
    document.body.innerHTML = "<h1>Unbekannter Shortcut: " + key + "</h1>";
  }
</script>
</body>
</html>


0. Lege eine Datei im Ordner RAW an, die den base64 codierten strudel-content enthält.

1. Verwende die URL der RAW-Ansicht der datei.txt

   Beispiel: https://raw.githubusercontent.com/einkilometer/strudel/refs/heads/main/raw/datei.txt


