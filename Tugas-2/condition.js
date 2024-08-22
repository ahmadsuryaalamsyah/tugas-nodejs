//menentukan bilangan genap atau ganjil
let number = 10;

if (number % 2 === 0) {
  console.log(number + ' adalah bilangan genap');
} else {
  console.log(number + ' adalah bilangan ganjil');
}

//menentukan hari berdasarkan angka
let numberDay = 5;
switch (numberDay) {
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('kamis');
    break;
  case 5:
    console.log('Jumat');
    break;
  case 6:
    console.log('Sabtu');
    break;
  case 7:
    console.log('Minggu');
    break;
  default:
    console.log('Tidak ada');
}
