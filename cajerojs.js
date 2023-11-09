let persona = []
class personas {
    constructor(nombre, password, capital){
        this.nombre = nombre
        this.password = password
        this.capital = capital
    }
}
let ernesto = new personas ('Ernesto', 'admin123', 10)
let maría = new personas ('María', 'cr7goat', 10)
let ramón =new personas ('Ramón', 'admin321', 10)
persona.push(ernesto,maría,ramón)

const interfaz = document.getElementById('interfaz')
let nomuser = document.getElementById('user-ok')
let capitalpersona 
let personaEncontrada

function validador(nombre, password) {
    const form = document.getElementById('form');
     personaEncontrada = persona.find(p => p.nombre === nombre && p.password === password);
  
    if (personaEncontrada) {
      alert('Login exitoso');
      form.hidden = true;
      interfaz.style.display = 'block';
      nomuser.innerHTML = personaEncontrada.nombre;
    } else if (nombre === '' || password === '') {
      alert('Todos los campos son obligatorios');
    } else {
      alert('Datos errados, vuelva a intentarlo');
    }
}

document.getElementById('btn').addEventListener('click', function(){
    let nombre = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    validador(nombre, pass);
});

function añadircapital(capitalañadido) {
    if (!isNaN(capitalañadido) && parseFloat(capitalañadido) > 0) {
        capitalañadido = parseFloat(capitalañadido);

        if (!isNaN(personaEncontrada.capital)) {
            const index = persona.findIndex(p => p.nombre === personaEncontrada.nombre);
            if (index !== -1) {
                if (persona[index].capital + capitalañadido <= 990) {
                    persona[index].capital += capitalañadido;
                    personaEncontrada = persona[index];
                    alert('Usted ha ingresado $' + capitalañadido);
                    alert('Su nuevo saldo es $' + personaEncontrada.capital);
                } else {
                    alert('El capital máximo permitido es $990');
                }
            }
        }
    } else {
        alert('Por favor, ingrese un número positivo válido.');
    }
}


document.getElementById('btn-capital').addEventListener('click', function(){
    let capitalAñadido = document.getElementById('ingresar-capital').value;
    añadircapital(capitalAñadido);
    document.getElementById('ingresar-capital').value = ''
});

function restarcapital(capitalrestado) {
    if (!isNaN(capitalrestado) && parseFloat(capitalrestado) > 0) {
        capitalrestado = parseFloat(capitalrestado);

        if (!isNaN(personaEncontrada.capital)) {
            const index = persona.findIndex(p => p.nombre === personaEncontrada.nombre);
            if (index !== -1) {
                if (persona[index].capital - capitalrestado >= 10) {
                    persona[index].capital -= capitalrestado;
                    personaEncontrada = persona[index];
                    alert('Usted ha retirado $' + capitalrestado);
                    alert('Su nuevo saldo es $' + personaEncontrada.capital);
                } else {
                    alert('El capital mínimo permitido es $10');
                }
            }
        }
    } else {
        alert('Por favor, ingrese un número positivo válido.');
    }
}

document.getElementById('btn-capital-retiro').addEventListener('click', function(){
    let capitalrestado = document.getElementById('retirar-capital').value;
    restarcapital(capitalrestado);
    document.getElementById('retirar-capital').value = ''
});
document.getElementById('btn-consulta').addEventListener('click',function(){
    alert('Su saldo actual es $'+personaEncontrada.capital)
})




