describe("test of cart total", function () {
  it("sum of article prices", function () {
    let list = [
      { title: "fanta", quantity: 1, price: 10 },
      { title: "cola", quantity: 2, price: 20 },
      { title: "coffee", quantity: 1, price: 30 },
    ];

    expect(calculateCartTotal(list)).toBe(60);
  });
});
