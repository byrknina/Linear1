let flatRent = parseFloat(
  prompt(`Орендна плата за квартиру за один місяць становить`)
);

document.write(`Орендна плата за рік складатиме ${flatRent * 12} <br>`);
document.write(`Орендна плата за 2 роки складатиме ${flatRent * 24} <br>`);
document.write(`Орендна плата за 10 років складатиме ${flatRent * 120}`);
