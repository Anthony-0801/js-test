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

// to know the difference between ? and ??
let x = 10;
console.log(x === 10 ? "yes they are equal" : "no");
console.log("There is a data: " + x ?? "There is no data, its null");


pow(2, 3); // 8
