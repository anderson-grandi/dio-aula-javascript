var nome = "Anderson", idade = 46;
alert("Bem vindo " + nome + " tem " + idade + " anos");
console.log(nome);
console.log(idade);
var frase = "Japão é o melhor time do mundo";
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Alemanha"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

var lista = ["maça", "pera", "laranja"];
console.log(lista);
console.log(lista.push("uva"));
console.log(lista);
console.log(lista.pop());
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join("-"));

var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
console.log(fruta.cor);

var frutas = [fruta, {nome: "uva", cor: "roxo"}];
console.log(frutas);
console.log(frutas[1]);
console.log(frutas[0].nome);

var idade1 = prompt("Qual a sua idade: ");
console.log(idade1);

var i = 1;
while(i <= 10) {
    console.log(i);
    i += 1;
}

var d = new Date();
console.log(d);
console.log("Date: " + d.getDate());
console.log("Day: " + d.getDay());
console.log("Hour: " + d.getHours());
console.log("Minutes: " + d.getMinutes());
console.log("Seconds: " + d.getSeconds());
console.log("Month: " + (d.getMonth()+1));