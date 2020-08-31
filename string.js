let result = "abcde".charAt(0); //pega o caracter do index 0
console.log("result: ", result);

result = "abcde".indexOf("c"); //pega o primeiro index do caracter
console.log("result: ", result);

result = "bola".replace("o", "a"); //substitui o primeiro caracter
console.log("result: ", result);

result = "maçã".concat(",banana"); //concatena
console.log("result: ", result);

result = "maçã".toUpperCase(); //Letra maiúscula
console.log("result: ", result);

result = "maçã,banana,laranja".split(","); //Tranforma em array
console.log("result: ", result);

let origin = "maçã,banana,laranja"
result = origin.slice(0,4); //Pega uma parte, do 0 ao 3
console.log("result: ", result);
console.log("origin: ", result);

origin = "maçã,banana,laranja"
result = origin.substring(0,4); //Pega uma parte, do 0 ao 3
console.log("result: ", result);
console.log("origin: ", origin);

result = "maçã,banana,laranja".includes("banana");
console.log("result: ", result);



