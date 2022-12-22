describe("test of cart total", function () {
  it("sum of article prices", function () {
    let list = [
      { title: "fanta", quantity: 1, price: 10 },
      { title: "cola", quantity: 2, price: 20 },
      { title: "coffee", quantity: 1, price: 30 },
    ];
    let total = (60).toFixed(2); // 2 decimals
    expect(calculateCartTotal(list)).toBe(total);
  });
});
