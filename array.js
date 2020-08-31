// Adicionar novo elemento
array = ["Giovanna", "Lucas", "João", "José"];
array.push("Pedro");

console.log("\n");
console.log("array:", array);
console.log("\n");

// Achar o index de um elemento
array = ["Giovanna", "Lucas", "João", "José"];
let index = array.indexOf("Giovanna");

console.log("\n");
console.log("array:", array);
console.log("index:", index);
console.log("\n");

// Excluir um elemento
array = ["Giovanna", "Lucas", "João", "José"];
index = array.indexOf("Giovanna");
result = array.splice(index,1);

console.log("\n");
console.log("index:", index);
console.log("array:", array);
console.log("result:", result);
console.log("\n");



