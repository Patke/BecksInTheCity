var old = document.getElementById("playerTableStyle").innerHTML;
document.myForm.addEventListener("load", empfangen(old));


function empfangen(old){
  document.getElementById("All").innerHTML  = "All";
  document.getElementById("Favorites").innerHTML  = "";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status==200){
      document.getElementById("playerTableStyle").innerHTML = old;
      document.getElementById("All").innerHTML  = "All";
      document.getElementById("Favorites").innerHTML  = "";
      var serverResponse = JSON.parse(xhr.responseText);
      createTable(serverResponse);
    }else if(xhr.readyState === XMLHttpRequest.DONE){
      console.log(xhr.status);
      }
  };
  xhr.open('GET', 'http://188.166.165.74:13337/api/players', true);
  xhr.send();
}

function toggle(old){
  if(document.getElementById("All").innerHTML == "All"){
    document.getElementById("All").innerHTML  = "";
    document.getElementById("Favorites").innerHTML  = "Favorites";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status==200){
      var serverResponse = JSON.parse(xhr.responseText);
      document.getElementById("playerTableStyle").innerHTML = old;
      document.getElementById("All").innerHTML  = "";
      document.getElementById("Favorites").innerHTML  = "Favorites";
      createTable(serverResponse);
        document.getElementById("check").checked = true;
    }else if(xhr.readyState === XMLHttpRequest.DONE){
      console.log(xhr.status);
      }
  };
  xhr.open('GET', 'http://188.166.165.74:13337/api/players?favorites=true', true);
  xhr.send();

  }else{
    empfangen(old);
  }

}

function createTable(serverResponse){
  for(var k in serverResponse) {
      console.log(serverResponse[k]);
      document.getElementById("playerTableStyle").innerHTML +=
      "<tr> <td>" +serverResponse[k].name +
      "</td> <td>"+serverResponse[k].club +
      "</td> <td>"+serverResponse[k].coach +
      "</td> <td>"+serverResponse[k].position +
      "</td> <td>"+serverResponse[k].number +
      "</td> <td>"+serverResponse[k].year +"</td> </tr>";
    }
}
