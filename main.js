
function imc(){
    var n = document.getElementById('nome').value;
    var a = document.getElementById('altura').value;
    var p = document.getElementById('peso').value;
    var nome = n;
    var altura = a;
    var peso = p;
    var cont = (p/(a * 2));
    var res = cont.toFixed(2);

    if(res  <= 18.5){
        document.getElementById('resultado').innerHTML = `${nome} seu IMC é de ${res}. Você está abaixo do peso.`;
    }
    else if((res  >= 18.5) && (res <= 24.9)){
        document.getElementById('resultado').innerHTML = `${nome} seu IMC é de ${res}. Você está com o peso normal.`;
    }
    else if((res >= 25) && (res <= 29.9)){
        document.getElementById('resultado').innerHTML = `${nome} seu IMC é de ${res}. Você está com sobrepeso.`;
    }
    else if((res >= 30) && (res <= 34.9)){
        document.getElementById('resultado').innerHTML = `${nome} seu IMC é de ${res}. Você está com obesidade grau 1.`;
    }
    else if((res >= 35) && (res <= 39.9)){
        document.getElementById('resultado').innerHTML = `${nome} seu IMC é de ${res}. Você está com obesidade grau 2.`;
    }
    else if(res >= 40){
        document.getElementById('resultado').innerHTML = `${nome} seu IMC é de ${res}. Você está com obesidade grau 3 ou mórbida.`;
    }
}
console.log(n)
