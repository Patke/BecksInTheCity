alert("Hello World");

var try = document.getElementById('form1');
try.addEventListener('Start', formCheck);


function formCheck(){
  if(document.Formular.Vorname.value == ""){
    alert("Bitte fÜr ihren Vornamen nur Buchstaben verwenden!");
    document.Formular.Vorname.focus();
    return false;
  }
  if(document.Formular.Nachname.value == ""){
    alert("Bitte fÜr ihren Nachnamen nur Buchstaben verwenden!");
    document.Formular.Nachname.focus();
    return false;
  }
  if(document.Formular.Verein.value == ""){
    alert("Bitte fÜr ihren Verein nur Nummern und Buchstaben verwenden!");
    document.Formular.Verein.focus();
    return false;
  }
  if(document.Formular.Headcoach.value == ""){
    alert("Bitte fÜr ihren Headcoach Buchstaben verwenden!");
    document.Formular.Headcoach.focus();
    return false;
  }
  if(document.Formular.Aktiv.value == ""){
    alert("Bitte auswählen ob der Spieler aktiv ist!");
    document.Formular.Aktiv.focus();
    return false;
  }
  if(document.Formular.Position.value == ""){
    alert("Bitte auswählen welche Position der Spieler spielt!");
    document.Formular.Position.focus();
    return false;
  }
  if(document.Formular.Nummer.value == ""){
    alert("Bitte auswählen welche Rückennummer der Spieler hat!");
    document.Formular.Nummer.focus();
    return false;
  }
  if(document.Formular.Geburtstag.value == ""){
    alert("Bitte auswählen ob der Spieler aktiv ist!");
    document.Formular.Geburtstag.focus();
    return false;
  }
  if(document.Formular.Spieler1.value == ""){
    alert("Bitte auswählen ob der Spieler aktiv ist!");
    document.Formular.Spieler1.focus();
    return false;
  }


}
