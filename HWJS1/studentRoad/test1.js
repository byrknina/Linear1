let a = parseFloat(prompt(`Квиток на трамвай, грн`));
let b = parseFloat(prompt(`Квиток на потяг, грн`));
let c = parseFloat(prompt(`Вартість таксі, грн`));
let d = parseFloat(prompt(`Квиток на автобус, грн`));

document.write(
  `Витрати студента при проїзді у трамваї складуть ${3 * a} гривень <br>`
);
document.write(
  `Витрати студента при проїзді потягом та на таксі складуть ${
    b + c
  } гривень <br>`
);
document.write(
  `Витрати студента при проїзді в автобусі складуть ${2 * d} гривень`
);
