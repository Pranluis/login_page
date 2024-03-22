function checkdata() {
    var password = document.getElementById('passadd').value;
    if(password.length < 6){
        alert('Enter 6 characters or more');
        password.focus();
        
    }
    else{
        alert("Account Logged in")
    }
}