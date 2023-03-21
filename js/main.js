function calcIMC(){
    var alt, peso, imc;

    alt = parseFloat(document.getElementById("altura").value);
    peso = parseFloat(document.getElementById("peso").value);

    imc = peso/(alt*alt);

    document.getElementById("resp").value = "Seu IMC é: " + imc.toFixed(2) + ". \n";

    if(imc < 18.5){
        document.getElementById("resp").value += "Classificação: magreza.";
    }
    else if(imc < 25){
        document.getElementById("resp").value += "Classificação: normal.";
    }
    else if(imc < 30){
        document.getElementById("resp").value += "Classificação: sobrepeso.";
    }
    else if(imc < 35){
        document.getElementById("resp").value += "Classificação: obesidade grau 1."
    }
    else if(imc < 40){
        document.getElementById("resp").value += "Classificação: obesidade grau 2."
    }
    else{
        document.getElementById("resp").value += "Classificação: obesidade grau 3."
    }

    pesoIdeal();
}

function pesoIdeal(){

    var alt, pesoId;

    alt = parseFloat(document.getElementById("altura").value);

    if(document.getElementById("man-check").checked == true){
        pesoId = (72.7 * alt) - 62;
    }
    else if(document.getElementById("woman-check").checked == true){
        pesoId = (62.1 * alt) - 48.7;
    }
    else{
        alert("Por favor selecione o seu gênero.");
    }

    document.getElementById("resp").value += "\nO seu peso ideal é próximo de: " + pesoId.toFixed(2) + " kg.";
    
}

function limpar(){
    document.getElementById("resp").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("man-check").checked = false;
    document.getElementById("woman-check").checked = false;
}