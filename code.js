// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.

let button = document.getElementById("submit-btn");

button.addEventListener("click",function (event){

    event.preventDefault();

    let name = document.getElementById("name_input");
    let nameValue = name.value;
    let email = document.getElementById("email_input");
    let emailValue = email.value;
    let message = document.getElementById("message_input");
    let messageValue = message.value;
    alert(`From: ${nameValue} \n Message: ${messageValue} \n Message them back at: ${emailValue}`);


}
)
