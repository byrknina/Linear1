let x = parseInt(prompt`Турист проїхав перший відрізок протягом, год`);
let y = parseInt(prompt`Турист проїхав другий відрізок протягом, год`);

let S1 = x * 40;
let S2 = y * 25;
let genS = S1 + S2;

document.write(`Загальна відстань, яку проїхав турист, складе ${genS} км`);
