const elName = document.querySelector(".name");
const elResultName = document.querySelector(".resultName");
const elMail = document.querySelector(".mail");
const elResultMail = document.querySelector(".resultMail");
const elPass = document.querySelector(".pass");
const elResultPass = document.querySelector(".resultPass");
const bValid = document.querySelector(".valid");

bValid.onclick = function () {
    debugger;
    let mail = elMail.value;
    let mailRegex = /^[a-z0-9._%+-]{2,}@gmail.com$/;//teste email
    mailResult = mailRegex.test(mail);
    if (mailResult != true) {
        elResultMail.innerHTML = `Favor inserir dados corretamente <br>
        e-mail gmail [@gmail.com]`;
    } else {
        elResultMail.innerHTML = "Tudo OK";
    }

    let letras = elName.value;
    let letrasRegex = /^[a-z0-9._%+-]{2,}$/;//sem espaço
    let letrasResult = letrasRegex.test(letras);
    if (letrasResult != true) {
        elResultName.innerHTML = `Favor inserir dados corretamente <br>
        Sem espaços!`;
    } else {
        elResultName.innerHTML = "Tudo Ok";
    }

    let pass = elPass.value;
    let passRex = /([a-zA-Z]{5,})/;
    let passRexHif = /([-]{2,})/;
    let passRexCar = /([{}!@#$%¨&,.^? ~=+\-_\;/\-+.\|]{6,})/;
    let passResult = passRex.test(pass);
    let passHifResult = passRexHif.test(pass);
    let passCarResult = passRexCar.test(pass);
    if (passResult != true && passHifResult != true && passCarResult != true) {
        elResultPass.innerHTML = `Favor inserir dados corretamente <br>
        5 letras, 2 -, 6 caracteres especiais`;
    } else {
        elResultPass.innerHTML = 'Tudo OK';
    }
};
