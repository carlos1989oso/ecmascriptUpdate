///////////////Clase 9///////////////////
const obj = {
  name: 'oscar',
  age: 32,
  country: 'MX'
};

let { country, ...all } = obj;
console.log(all);

const obj2 = {
  name: 'Carlos',
  age: 32
};

const obj3 = {
  ...obj2,
  country: 'MX'
};

console.log(obj3);


const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('Hellos World'), 3000)
    : reject(new Error('Test Error'))
  });
};


helloWorld()
  .then (Response => console.log(Response))
  .catch (error => console.log(error))
  .finally (() => console.log('Finalizo'))

// como agrupar mejor

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year,month,day);
