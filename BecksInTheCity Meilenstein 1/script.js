document.getElementById("button").addEventListener("submit", function(){
  validateForm(document.myForm);
});


function validateForm(form) {

      if (form.FirstName.value.match(/^([A-Za-z ]+)$/) &&
        form.Surname.value.match(/^([A-Za-z ]+)$/) &&
        form.Verein.value.match(/^([A-Za-z ]+)$/) &&
        form.Headcoach.value.match(/^([A-Za-z ]+)$/) &&
        form.Assistantcoach.value.match(/^([A-Za-z ]+)$/) &&
        form.Rueckennummer.value.match(/^([0-9])$/) &&
        form.Rueckennummer.value > 3 &&
        form.Rueckennummer.value < 16 &&
        (document.getElementById("Aktiv1").checked || document.getElementById("Aktiv2").checked) &&
        (new Date(document.getElementById("idDate").value).getFullYear() <= new Date().getFullYear()) ) {

          document.getElementById("button").addEventListener("submit", senden(form));

      }else{
          alert("Einige Eingaben sind fehlerhaft. Bitte ueberpruefen Sie ihre Eingaben.");
        }

}

function senden(form){
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://188.166.165.74:13337/api/players', true);
  xhr.responseType = 'json';
  alert("hallo")
  xhr.onload = function(e) {
      alert("Daten wurden erfolgreich uebermittelt")
  };
  xhr.send(formData);
}
