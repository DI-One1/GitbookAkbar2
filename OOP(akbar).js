// Some code
const PulpenCetakCetek = {
    // properties
    brand: 'Kenko',
    color: 'Black',
    tinta: '200 ml',
    size: '0.5 mm',
    // methods
    Cetak: () => {
      console.log('Memunculkan Ujung Pena');
    },
    Cetek: () => {
      console.log('Mengembalikan Ke Posisi Semula');
    },
    Lembiru: () => {
      console.log('Mengganti dengan jenis yang baru');
    }
  }
   
  console.log(PulpenCetakCetek.brand); // Kenko
  console.log(PulpenCetakCetek.color); // Black
  console.log(PulpenCetakCetek.tinta); // 200 ml
  console.log(PulpenCetakCetek.size); // 0.5 mm
  PulpenCetakCetek.Cetak(); // Memunculkan Ujung Pena
  PulpenCetakCetek.Cetek(); // Mengembalikan Ke Posisi Semula
  PulpenCetakCetek.Lembiru(); // Mengganti dengan jenis yang baru