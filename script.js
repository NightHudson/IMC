function calcularIMC() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    const imc = (peso / (altura * altura)).toFixed(2);

    document.getElementById("resultado").innerHTML = imc;
    }