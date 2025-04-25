function calcularIMC() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    const imc = (peso / (altura * altura)).toFixed(1);

    document.querySelector("p").innerHTML = imc;
    }