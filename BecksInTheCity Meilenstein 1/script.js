function validateForm(form) {
    if (form.FirstName.value == "" ) {
        alert(unescape("Bitte kein leeres Feld! @Vorname"));
        document.myForm.name.focus();
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(form.FirstName.value)) {
        alert("Nur Buchstaben! @Vorname");
        document.myForm.name.focus();
        return false;
    }
}
