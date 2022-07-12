function validation() {
    let name = document.getElementById('name').value;
    let subject = document.getElementById('subject').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let error_message = document.getElementById('error_message')
    let text;

    error_message.style.padding = "10px";

    if(name.length < 5) {
        text = "Please enter a valid name."
        error_message.innerHTML = text;
        return false;
    }
    if(subject.length < 10) {
        text = "Please enter a valid subject."
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length != 10) {
        text = "Please enter a valid phone number."
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6) {
        text = "Please enter a valid email."
        error_message.innerHTML = text;
        return false;
    }
    if(message.length < 140) {
        text = "Please enter a valid message. (min. 140 characters)"
        error_message.innerHTML = text;
        return false;
    }
    return true
}
