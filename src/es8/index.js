///////////////Clase 7///////////////////
//Ecmascript 8

const data = {
  frontenf: 'oscar',
  backend: 'isabel',
  design: 'Ana',
}

//entries se utiliza para ver todo el objeto completo
const entries = Object.entries(data)
console.log(entries);
console.log(entries.length);

const data = {
  frontenf: 'oscar',
  backend: 'isabel',
  design: 'Ana',
}

//values se utiliza para ver todo los valores del objeto
const values = Object.values(data);
console.log(values);
console.log(values.length);

//con padStart se añade valores al principio de un string
const string = 'hello';
console.log(string.padStart(7,'hi'));

//con padEnd se añade valores al principio de un string
const string = 'hello';
console.log(string.padEnd(12,'-----------'));
console.log('food'.padEnd(12,'-----------'));


const obj = {
  name : 'Carlos',
}

///////////////Clase 8///////////////////
//Asinc away

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
};

const helloAsync = async () => {
  const hello = await helloWorld(); 
  console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
}

anotherFunction();


