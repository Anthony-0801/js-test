import express from "express";

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }
  console.log(result);
  return result;
}

pow(2, 3); // 8
