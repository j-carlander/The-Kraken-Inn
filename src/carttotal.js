function calculateCartTotal(list) {
  let total = 0;
  for (let index in list) {
    let price = Number(list[index].price);
    total += price;
  }
  return total.toFixed(2);
}
