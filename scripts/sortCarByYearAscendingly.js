function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log("Sebelum diurutkan");
  console.table(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (let i = 0; i < result.length - 1; i++) {
    for (let ii = 0; ii < result.length - 1; ii++) {
      now = result[ii].year;
      next = result[ii + 1].year;
      if (now > next) {
        temp = result[ii];
        result[ii] = result[ii + 1];
        result[ii + 1] = temp;
      }
    }
  }
  console.log("Sesudah diurutkan");
  console.table(result);
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
