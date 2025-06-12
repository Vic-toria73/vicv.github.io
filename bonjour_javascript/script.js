let name2 = prompt(' Your name ?')
let firstName = ' Beyonce !';

function sayHello(firstName, hour) {
    let message = 'Bonjour ';
    let firstName2 = name2
    message += firstName2;
    
    if (hour < 18 && hour <= 18) {
        console.log('Bonjour ' + firstName2)
    } else {
        console.log('Bonsoir '+ firstName2)
    }
document.querySelector('h1').innerText = message;
}

sayHello(firstName, 11);
sayHello(firstName, 18);
sayHello(firstName, 17);