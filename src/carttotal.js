function calculateCartTotal(list) {
  let total = 0;
  for (let index in list) {
    total += list[index].price;
  }
  return total;
}
