document.getElementById('sign-now').addEventListener('click' , function(){
   //Get user Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //Get user Password
    const passwordfield = document.getElementById('user-pass');
    const userPassword = passwordfield.value;

    //Condition
    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
        console.log('valid use');

        //How can i link to other page
        window.location.href = 'banking.html';
    }
})



