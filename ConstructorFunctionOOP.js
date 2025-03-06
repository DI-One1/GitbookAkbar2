// Some code
function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
   
  Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
   
  Car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
   
  Car.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
  }

  // Membuat objek mobil menggunakan constructor function
const car1 = new Car("Toyota", "Merah", 200, 'to-1');
const car2 = new Car("Honda", "Biru", 180, 'ho-1');
const car3 = new Car("BMW", "Hitam", 220, 'b-1');

// Menampilkan informasi setiap mobil
car1.drive(); // Mobil Toyota berwarna Merah, tahun 2020
car2.drive(); // Mobil Honda berwarna Biru, tahun 2018
car3.drive(); // Mobil BMW berwarna Hitam, tahun 2022