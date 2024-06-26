
# Generazione di una pagina web simile a https://fodi.github.io/arucosheetgen/ tramite GitHub Pages

## Descrizione del sito

Il generatore di fogli di marker ArUco sul sito [fodi.github.io](https://fodi.github.io/arucosheetgen/) è stato creato utilizzando la libreria OpenCV per generare marker ArUco. Questo strumento permette di scegliere tra diversi dizionari di marker (4x4, 5x5, 6x6, 7x7) con varie dimensioni e ID iniziale e finale. La funzionalità di stampa e generazione PDF è integrata nel browser. Il generatore si basa sul lavoro di Oleg Kalachev e la funzionalità specifica per i fogli è stata aggiunta da Fodi.

## Come creare una pagina simile tramite GitHub

Per creare una pagina come quella del generatore di marker ArUco su GitHub Pages, segui questi passaggi:

1. **Crea un repository su GitHub**:
   - Vai su GitHub e crea un nuovo repository.
   - Nome il repository e rendilo pubblico.

2. **Clona il repository**:
   - Clona il repository sul tuo computer usando `git clone`.

3. **Aggiungi i file del sito web**:
   - Crea o copia i file HTML, CSS e JavaScript nel repository. Puoi utilizzare editor di testo o IDE per questo.
   - Assicurati di avere un file `index.html` come pagina principale.

4. **Configura GitHub Pages**:
   - Vai alle impostazioni del repository su GitHub.
   - Nella sezione "GitHub Pages", seleziona il branch che contiene il tuo sito (di solito `main` o `gh-pages`).

5. **Pubblichi il sito**:
   - Dopo aver configurato GitHub Pages, il tuo sito sarà disponibile all'URL fornito (es. `https://username.github.io/repository-name`).

### Esempio di file `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ArUco Marker Generator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>ArUco Marker Generator</h1>
    <form id="markerForm">
        <label for="dictionary">Dictionary:</label>
        <select id="dictionary">
            <option value="DICT_4X4_50">4x4 (50 markers)</option>
            <option value="DICT_5X5_50">5x5 (50 markers)</option>
            <option value="DICT_6X6_50">6x6 (50 markers)</option>
            <option value="DICT_7X7_50">7x7 (50 markers)</option>
        </select><br>
        <label for="markerId">Marker ID:</label>
        <input type="number" id="markerId" min="0" value="0"><br>
        <button type="button" onclick="generateMarker()">Generate Marker</button>
    </form>
    <div id="markerOutput"></div>
    <script src="script.js"></script>
</body>
</html>
```

### Esempio di file `styles.css`

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 20px;
}

form {
    margin-bottom: 20px;
}

#markerOutput {
    margin-top: 20px;
}
```

### Esempio di file `script.js`

```javascript
function generateMarker() {
    const dictionary = document.getElementById('dictionary').value;
    const markerId = document.getElementById('markerId').value;
    const markerOutput = document.getElementById('markerOutput');

    const markerUrl = `https://example.com/generate_marker?dictionary=${dictionary}&id=${markerId}`;
    markerOutput.innerHTML = `<img src="${markerUrl}" alt="ArUco Marker">`;
}
```

### Passaggi aggiuntivi

1. **Carica i file su GitHub**:
   - Assicurati di caricare i file `index.html`, `styles.css`, e `script.js` nel repository GitHub.
   
2. **Configura GitHub Pages**:
   - Vai nelle impostazioni del tuo repository su GitHub.
   - Nella sezione "GitHub Pages", seleziona il branch che contiene i tuoi file (di solito `main` o `gh-pages`).

3. **Verifica la pubblicazione**:
   - Dopo aver configurato GitHub Pages, il tuo sito sarà disponibile all'URL fornito (es. `https://username.github.io/repository-name`).

Questi passaggi ti permetteranno di creare e pubblicare una pagina web simile a quella del generatore di marker ArUco su GitHub Pages.
