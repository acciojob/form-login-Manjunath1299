function getFormvalue() {
    // Get the form element by its ID
    var formElement = document.getElementById("form1");

    // Access the input elements using their names
    var firstName = (formElement.fname.value);
    var lastName = (formElement.lname.value);
     firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
	lastNameName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    // Display the first and last name using alert
    alert(`${firstName} ${lastName}`);

    // Prevent the form from submitting
    return false;
}
