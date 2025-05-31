import express from "express";

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export function pow(x, n) {
  let result = 1;

  if(n < 0) return NaN;
  if(Math.round(n) != n) return NaN;

  for (let i = 0; i < n; i++) {
    result *= x;
  }
  //console.log(result);
  return result;
}

export function calculateShipping(weight) {
    const baseRate = 5.99;
    const perKgRate = 2.50;

    console.log("Shipping Total: " + (baseRate + (weight * perKgRate)).toFixed(2));
    return (baseRate + (weight * perKgRate)).toFixed(2);
}

// to know the difference between ? and ??
let x = 10;
console.log(x === 10 ? "yes they are equal" : "no");
console.log("There is a data: " + x ?? "There is no data, its null");

//making an object, calling the function in a chain methond
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};

ladder.up().up().up().up().up().down().showStep();


pow(2, 3); // 8
calculateShipping(5);
