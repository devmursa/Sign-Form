const signUp=document.querySelector('#sign-up');
const signin=document.querySelector('#sign-in');
const signUpForm=document.querySelector('#sign-up-form');
const signINForm=document.querySelector('#sign-in-form');
const signUpIcon=document.querySelector('#sign-up-icon');
const signInIcon=document.querySelector('#sign-in-icon');
const hambar=document.querySelector('.hambar');
const hambarItem=document.querySelectorAll('.bar');
const navbar=document.querySelector('.nav-bar');
const nhambar=document.querySelector('.nhambar');
const nbar=document.querySelectorAll('.nbar');




signUp.addEventListener('click',displayform);
signin.addEventListener('click',hideform);
signUpIcon.addEventListener('click',removeform);
signInIcon.addEventListener('click',removeform);
hambar.addEventListener('click',hambarf);
nhambar.addEventListener('click',nhambarf);








function nhambarf(e){
    
    navbar.classList.toggle('active');

    hambarItem.forEach((item)=>{
        item.classList.remove('active');
    })
    nbar.forEach((item)=>{
        item.classList.remove('active');
    })
}


function hambarf(e){
    hambarItem.forEach((item)=>{
        item.classList.add('active');
    });
    navbar.classList.add('active');

    nbar.forEach((item)=>{
        item.classList.add('active');
    })
}


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