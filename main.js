const signUp=document.querySelector('#sign-up');
const signin=document.querySelector('#sign-in');
const signUpForm=document.querySelector('#sign-up-form');
const signINForm=document.querySelector('#sign-in-form');
const signUpIcon=document.querySelector('#sign-up-icon');
const signInIcon=document.querySelector('#sign-in-icon');


signUp.addEventListener('click',displayform);
signin.addEventListener('click',hideform);
signUpIcon.addEventListener('click',removeform);
signInIcon.addEventListener('click',removeform);







function displayform(e){
    signUpForm.style.display='block';
    signINForm.style.display='none';
}

function hideform(e){
    signINForm.style.display='block';
    signUpForm.style.display='none';
}

function removeform(e){
    signINForm.style.display='none';
    signUpForm.style.display='none';
}