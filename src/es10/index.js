///////////////Clase 10///////////////////

let array = [1,2,3, [1,2,3,[1,2,3]]]

console.log(array.flat(2));

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]))

let hello = '             hello World';

console.log(hello);
console.log(hello.trimStart());

let hello = 'hello World        ';
console.log(hello);
console.log(hello.trimEnd());

// nuevo arreglo en es10 catch sin pasar el error
try {

}catch{

}

// transformacion de objetos a arreglos y viceversa
let entries = [["name","oscar"], ["age",30]];
console.log(Object.fromEntries(entries));

// acceso a las descripciones
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);