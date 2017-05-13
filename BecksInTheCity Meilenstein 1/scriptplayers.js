document.myForm.addEventListener("load", empfangen());

function empfangen(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status==200){
      var serverResponse = JSON.parse(xhr.responseText);
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
    }else if(xhr.readyState === XMLHttpRequest.DONE){
      console.log(xhr.status);
      }
  };
  xhr.open('GET', 'http://188.166.165.74:13337/api/players', true);
  xhr.send();
}
