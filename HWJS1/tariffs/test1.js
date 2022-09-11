let a = parseFloat(prompt(`Вартість 1 кубометра газу`));
let b = parseFloat(prompt(`Вартість 1 кВт електроенергії`));
let X = parseFloat(prompt(`Кількість використаного газу у кубометрах`));
let Y = parseFloat(prompt(`Кількість використаної електроенергії у кВт`));
document.write(
  `Абонентна плата за газ збільшиться на ${Math.round(
    X * (a * 1.23) - X * a
  )} гривень <br>`
);
document.write(
  `Абонентна плата за електроенергію збільшиться на ${Math.round(
    X * (a * 1.15) - X * a
  )} гривень`
);
