const subscribeButton = document.querySelector(".main-button");
const emailError = document.querySelector(".sectionForm__form__email__container--email--error");
const emailInput = document.querySelector(".input-email");
const successContainer = document.querySelector(".success--container");
let mainCard = document.querySelector(".mainCard")

function showSuccess(){
    mainCard.style.display = 'none';
    successContainer.style.display = 'block';
}
subscribeButton.addEventListener('click', (e) => {
   
    const emailExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if(emailExp.test(emailInput.value) === true){
        emailInput.style.border = '1px solid green';
        emailError.innerHTML = '';
        showSuccess();
        
    }else{
        emailInput.style.backgroundColor = 'hsl(4, 100%, 67%)';
        emailError.innerHTML = 'Valid email required'
    }
    e.preventDefault()
})
// emailInput.addEventListener('blur', function(){
//     if(emailInput.checkValidity()){
//         emailInput.classList.add('itsValid');
//     }else{
//         emailInput.classList.remove('itsValid')
//     }
// })

