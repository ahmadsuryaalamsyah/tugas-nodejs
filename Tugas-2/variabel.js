// Const
const name = 'Alam';
console.log(name);

// Let
let age = 20;
console.log(age);
age = 21;
console.log(age);

// Var
var warga = 'Indonesia';
const country = () => {
  var warga = 'Malaysia';
  console.log(warga);
};
country();
console.log(warga);

// Tipe Data Primitif
let booleanType = true;
let numberType = 42;
let stringType = 'Hello World';
let undefinedType;
let nullType = null;

// Tipe Data Non-Primitif
//object
let objectType = {
  name: 'John',
  age: 30,
};

//array
let arrayType = [1, 2, 3, 4, 5];

//function
let functionType = function () {
  return 'This is a function';
};

// Operator Aritmatika
let a = 15;
let b = 5;
console.log('Penjumlahan: ', a + b);
console.log('Pengurangan: ', a - b);
console.log('Perkalian: ', a * b);
console.log('Pembagian: ', a / b);
console.log('Modulus: ', a % b);
console.log('Eksponen: ', a ** b);

// Operator Perbandingan
console.log('a == b: ', a == b);
console.log('a != b: ', a != b);
console.log('a > b: ', a > b);
console.log('a < b: ', a < b);
console.log('a >= b: ', a >= b);
console.log('a <= b: ', a <= b);

// Menggunakan Tipe Data Non-Primitif
console.log('Object: ', objectType);
console.log('Array: ', arrayType);
console.log('Function: ', functionType());

// Tipe Data Primitif Lainnya
console.log('Boolean: ', booleanType);
console.log('Number: ', numberType);
console.log('String: ', stringType);
console.log('Undefined: ', undefinedType);
console.log('Null: ', nullType);
