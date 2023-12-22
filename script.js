function getFormvalue() {
    // Get the form element by its ID
    var formElement = document.getElementById("form1");

    // Access the input elements using their names
    var firstName = formElement.fname.value.toCapitalize();
    var lastName = formElement.lname.value.toCapitalize();

    // Display the first and last name using alert
    alert(`${firstName} ${lastName}`);

    // Prevent the form from submitting
    return false;
}
