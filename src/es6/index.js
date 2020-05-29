///////////////Clase 1///////////////////
function newFunction(name,age,country){
  var name = name || 'Carlos';
  var age = age || '30';
  var country = country || 'MX';
  console.log(name, age, country)
}

// es6

function newFunction2 (name = 'Carlos', age='30', country='MX'){
  console.log(name,age,country);
}

newFunction2();
newFunction2('Arturo','32','CO');


///////////////Clase 2///////////////////

let hello = 'Hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

///////////////Clase 3///////////////////

let lorem = 'Con las frases que más te identifiques, ¡No te olvides de llevarlas a cabo! \n'
+ "otra cosa mas"

//es6

let lorem2 = `Vivir de las apariencias te hace esclavo de los demás
otra cosa
`;

//-------------------//

console.log(lorem);
console.log(lorem2);

let person = {
  'name': 'oscar',
  'age': 30,
  'country': 'MX'
}

console.log(person.name,person.age);

//es6

let { name, age, country} = person;
console.log(name,age,country);


let team1 = ['oscar','julian','ricardo'];
let team2 = ['Valeria','Yesica','Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);


// let solo esta la variable en local, var esta disponible en global
// se añade const para que no se cambie el valor en memoria

const a = 'b';
a = 'b';
console.log(a);

const b = 'a';
const b = 'b';
console.log(b);

///////////////Clase 4///////////////////

// Funcion antes de es6
const names = [
  {name: 'Carlos', age : 32},
  {name: 'Salvador', age: 32}
]

// Funcion con es6
let listOfNames = names.map(function(item){
  console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name,age,country) => {
  //...Codigo
}

const listOfNames4 = name => {
  //...Codigo
}

const square = num => num * num;

//las promesas para trabajar asincronamente

const helloPromise = () => {
  return new Promise((resolve,reject)=>{
    if (false){
      resolve('hey!');
    }else{
      reject('ups!!');
    }
  })
}

helloPromise()
  .then(Response=> console.log(Response))
  .then(console.log('hola'))
  .catch(error => console.log(error));

  ///////////////Clase 5///////////////////

  //las clases y la herencia

  class calculator {
    constructor() {
      this.valueA = 0;
      this.valueB = 0;
    }

    sum(valueA, valueB){
      this.valueA = valueA;
      this.valueB = valueB;
      return this.valueA + this.valueB;
    }
  }

  const calc = new calculator();
  console.log(calc.sum(2,2));

//Trabajar con modulos

import { hello } from './module'

hello();

// Generator, se puede utilizar por ejemplo para una serie de fibonacci

function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


