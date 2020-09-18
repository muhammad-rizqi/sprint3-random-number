var randomNumbers = [
  90,
  99,
  78,
  73,
  80,
  60,
  96,
  67,
  55,
  86,
  80,
  81,
  81,
  73,
  77,
  71,
  90,
  87,
  85,
  23,
  52,
  87,
  78,
  96,
  80,
  68,
];

let modified = randomNumbers
  .filter((num) => num >= 65)
  .map((num) => num / 2)
  .filter((num) => num < 40)
  .map((num) => randomNumbers.length / num)
  .reduce((a, b) => a / 2 + b);

console.log(modified);
