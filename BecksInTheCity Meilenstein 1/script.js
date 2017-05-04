function validateForm() {
  var x = document.forms["myForm"]["FirstName"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
