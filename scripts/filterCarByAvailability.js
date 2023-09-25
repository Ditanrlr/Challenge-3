function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log("Sebelum Filter");
  console.table(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (let i = 0; i < cars.length - 1; i++) {
    if (cars[i].available === true) {
      result.push(cars[i]);
    }
  }
  console.log("sesudah filter");
  console.table(result);
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
