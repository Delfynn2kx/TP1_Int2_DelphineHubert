const validateForm = () => {

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    let noError = true;

    //Validation du Username
    if(usernameValue === '') {
        setError(username, 'Le nom ne peut pas être vide');
        noError = false;
    } else {
        setSuccess(username);
    }

    //Validation du email
    if(emailValue === ''){
        setError(email,'Email ne peut être vide');
        noError = false;
    }
    else if(!validateEmail(emailValue)){
        setError(email,'Entrez une adresse courriel valide');
        noError = false;
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password,'Mot de passe ne peut être vide');
        noError = false;
    }
    else if(passwordValue.length < 8){
        setError(password,'Mot de passe ne peut être plus petit que 8 caractères'); 
        noError = false;
    }
    else{
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Confirmez votre mot de passe');
        noError = false;
    } 
    else if (password2Value !== passwordValue) {
        setError(password2, "Les mots de passe ne sont pas conformes");
        noError = false;
    } 
    else {
        setSuccess(password2);
    }

    console.log(noError);
    return noError;
}

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(String(email).toLowerCase());
}

const setError = (element,message) => { 
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

