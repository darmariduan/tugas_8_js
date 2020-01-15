function functionName() {
  var nama = {
    first : 'Darma',
    last : 'Riduan',
    age : 24,

  }
  console.log(nama);
  console.log("Nama :",nama.first,nama.last);
  console.log("Age :",nama.age);

  // berubah
  console.log("Change Data :");
  nama.age = 25
  console.log("Nama :",nama.first, nama.last);
  console.log("Age :", nama.age);

}

functionName()
