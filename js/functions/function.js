function selection1(selector, all = false) {
  if (all == true) {
    return document.querySelectorAll(selector);
  } else {
    return document.querySelector(selector);
  }
}
function randomColor() {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let color = "#";
  for (let index = 0; index < 6; index++) {
    let random1 = arr[Math.floor(Math.random() * arr.length)];
    color += random1;
  }
  return color;
}
function CrElement(typeOfElement) {
  return document.createElement(typeOfElement);
}
function copier(txt) {
  copy(txt);
}
