let a = parseInt(prompt("Введіть число a:", "0"));
let b = parseInt(prompt("Введіть число b:", "0"));
let c = parseInt(prompt("Введіть число c:", "0"));

let S1 = a + 12 + b;
let S2 = Math.sqrt((a + b) / (2 * a));
let S3 = Math.cbrt((a + b) * c);
let S4 = Math.sin(a / -b);

document.write(`
  <h1>Результат обчислення значення виразів для введених даних a=${a}, b=${b}, c=${c}</h1>
  <ol>
    <li>S1=${S1.toFixed(2)}</li>
    <li>S2=${S2.toFixed(2)}</li>
    <li>S3=${S3.toFixed(2)}</li>
    <li>S4=${S4.toFixed(2)}</li>
  </ol>
`);
