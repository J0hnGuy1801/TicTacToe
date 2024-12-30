
let fields = [
    null, // Feld 1
    'circle', // Feld 2
    'circle', // Feld 3
    'circle', // Feld 4
    null,     // Feld 5
    null,     // Feld 6
    null,     // Feld 7
    'cross',  // Feld 8
    'cross',   // Feld 9
  ];
  
  function init() {
    render();
  }

  // Variable, um den aktuellen Spieler festzulegen
  let currentPlayer = 'cross'; // Der erste Spieler ist 'cross' (X)
  
  // render() Funktion, die die Tabelle erstellt
  function render() {
    const content = document.getElementById("content");
  
    // HTML-Tabelle erstellen
    let tableHTML = "<table>"; // Tabelle beginnen
    
    for (let i = 0; i < 3; i++) {
      tableHTML += "<tr>"; // Neue Zeile beginnen
      
      for (let j = 0; j < 3; j++) {
        const index = i * 3 + j; // Index im "fields"-Array berechnen
        let cellContent = fields[index];
  
        // Wenn das Feld leer ist, bleibt es leer
        if (cellContent === null) {
          cellContent = "";
        } else if (cellContent === 'circle') {
          cellContent = "O"; // Kreis wird als O angezeigt
        } else if (cellContent === 'cross') {
          cellContent = "X"; // Kreuz wird als X angezeigt
        }
  
        tableHTML += `<td onclick="handleClick(${index})">${cellContent}</td>`; // Klick-Handler hinzufügen
      }
  
      tableHTML += "</tr>"; // Zeile beenden
    }
  
    tableHTML += "</table>"; // Tabelle beenden
  
    // HTML-Code in den Content-Container einfügen
    content.innerHTML = tableHTML;
  }
  
  // Beispiel-Funktion, um auf Klicks auf die Felder zu reagieren
  function handleClick(index) {
    // Nur einen Zug machen, wenn das Feld leer ist
    if (fields[index] === null) {
      // Setze das Feld auf den aktuellen Spieler (entweder 'circle' oder 'cross')
      fields[index] = currentPlayer;
  
      // Spieler wechseln
      switchPlayer();
  
      // Nach jedem Klick die Tabelle neu rendern
      render();
    }
  }
  
  // Spieler wechseln
  function switchPlayer() {
    // Wenn der aktuelle Spieler 'cross' (X) ist, wechsle zu 'circle' (O) und umgekehrt
    currentPlayer = (currentPlayer === 'cross') ? 'circle' : 'cross';
  }
  
  // Zu Beginn die Tabelle rendern
  render();
  