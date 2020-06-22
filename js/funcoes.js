function soma(n1, n2) {
    return n1+n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

function botao() {
    //alert("Obrigado por clicar");
    console.log(document.getElementById("thanks"));
    document.getElementById("thanks").innerHTML = "<b>Obrigado</b> por clicar";
}

var validar;
function validarIdade(idade) {
    //var validar = false;
    if(idade >= 18)
        validar = true;
    return validar;
}

function redirecionar() {
    window.open("http://google.com"); // nova aba
    window.location.href = "http://uol.com.br"; // mesma aba
}

/*function mouseOver() {
    document.getElementById("mover").innerHTML = "Obrigado por passar o mouse";
}

function mouseOverQuit() {
    document.getElementById("mover").innerHTML = "Passe o mouse aqui";
}*/

function mouseOver(element) {
    element.innerHTML = "Obrigado por passar o mouse";
}

function mouseOverQuit(element) {
    element.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada!");
}

function change(element) {
    console.log(element.value);
}

idade = prompt("Qual a sua idade: ");
console.log("Maior de idade: " + (validarIdade(idade) ? "sim" : "não"));

//alert(soma(1,2));
//alert(setReplace("Japão é o melhor lugar.", "Japão", "Brasil"));