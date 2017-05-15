document.getElementById("button").addEventListener("click", function(){
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

          senden(form);

      }else{
          alert("Einige Eingaben sind fehlerhaft. Bitte ueberpruefen Sie ihre Eingaben.");
        }

}

function senden(form){
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://188.166.165.74:13337/api/players', true);
  xhr.responseType = 'json';
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status==200){
      alert("Daten wurden erfolgreich uebermittelt")
    }else if(xhr.readyState === XMLHttpRequest.DONE){
      alert("Daten konnten nicht erfolgreich uebermittelt werden")
      console.log(xhr.status);
    }
  };
  xhr.send(formData);
}
