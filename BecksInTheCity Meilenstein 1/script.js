function validateForm(form) {
    if (form.FirstName.value.match(/^([A-Za-z ]+)$/)) {

    }else{
      alert("Einige Eingaben sind fehlerhaft. Bitte ueberpruefen Sie ihre Eingaben.");
      document.myForm.name.focus();
      return false;
    }
}

/*function meinHandler(id, ereignis, funktion)
{
   if(window.addEventListener)
      document.getElementById(id)
         .addEventListener(ereignis, funktion, false);
   else if(window.attachEvent)
      document.getElementById(id)
         .attachEvent("on" + ereignis, funktion);
}

function pruefen(idFeld)
{
   var idFeldMeldung = idFeld + "Meldung";
   var fehler = false;
   if(document.getElementById(idFeld).value == "" ||
    document.getElementById(idFeld).value =="Vorname" ||
     document.getElementById(idFeld).value == "Nachname" ||
      document.getElementById(idFeld).value =="Verein"||
       document.getElementById(idFeld).value =="Headcoach"||
        document.getElementById(idFeld).value =="Assistantcoach"||
         document.getElementById(idFeld).value =="Nummer")
   {
      document.getElementById(idFeldMeldung).firstChild.nodeValue =
         "(Bitte etwas eintragen)";


      fehler = true;
   }
   else
      document.getElementById(idFeldMeldung).firstChild.nodeValue = "";
   return fehler;
}

function numbersOnlyBetween4A15 (idFeld){
  var idFeldMeldung = idFeld + "Meldung";

    var fehler = false;
   if (document.getElementById(idFeld).value.search(/[^0-9]+/)===-1){
  if(document.getElementById(idFeld).value > 3 && document.getElementById(idFeld).value <15){

  }else{
    fehler = true;
    document.getElementById(idFeldMeldung).firstChild.nodeValue =
     "(Bitte nur Zahlen zwischen 4-15 eintragen)";
  }

   }else{ fehler = true;
     document.getElementById(idFeldMeldung).firstChild.nodeValue =
      "(Bitte nur Zahlen eintragen)";

    }
   return fehler;

}

function lettersOnlly (idFeld){
var idFeldMeldung = idFeld + "Meldung";

  var fehler = false;
 if (document.getElementById(idFeld).value.search(/[^a-zA-Z]+/)===-1){


 }else{ fehler = true;
   document.getElementById(idFeldMeldung).firstChild.nodeValue =
    "(Bitte nur Buchstaben eintragen)";
   document.getElementById(idFeld).focus();
  }
 return fehler;
}

function validDate (idFeld){

  var idFeldMeldung = idFeld + "Meldung";

  var UserDate = document.getElementById("idDate").value;
    var ToDate = new Date();

    if (new Date(UserDate).getTime() >= ToDate.getTime()) {
      document.getElementById(idFeldMeldung).firstChild.nodeValue =
       "(Bitte ein gueltiges Datum eingeben)";
          return false;
     }
    return true;



}

function senden(e)
{

   var p1 = pruefen("idVorname");
   var p2 = lettersOnlly("idVorname");

   var p3 = pruefen("idNachname");
   var p4 = lettersOnlly("idNachname");

   var u5 = pruefen("idVerein");
   var u6 = lettersOnlly("idVerein");

   var p7 = pruefen("idHeadcoach");
   var p8 = lettersOnlly("idHeadcoach");

   var p9 = pruefen("idAssistCoach");
   var p10 = lettersOnlly("idAssistCoach");

   var p12 = pruefen ("idRueckennummer");
   var p11 = numbersOnlyBetween4A15 ("idRueckennummer");

   var p13 = validDate("idDate");



   if(p1 || p2 || p3 || p4 || p5 || p6 || p7 || p8 || p9 || p11 || p12 || p13)
   {
     alert ("Es fehlen wohl einige Felder");
      if(e.preventDefault) e.preventDefault();
      else                 window.event.returnValue = false;
      return false;
   }
   else
      return true;
}*/
