const passwordBox=document.getElementById("password");
const click=document.getElementById("btn")
const lenght=12;


const uppperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="@!$#&*";
const allChar=uppperCase + lowerCase + number + symbol;

click.onclick =function createPassword(){
    let password="";
    password +=uppperCase[Math.floor(Math.random()*uppperCase.length)];
    password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password +=number[Math.floor(Math.random()*number.length)];
    password +=symbol[Math.floor(Math.random()*symbol.length)];

    while (lenght > password.length){
        password +=allChar[Math.floor(Math.random()*allChar.length)];
        
    }
    passwordBox.value= password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
}
