let scroll_top = document.querySelector("#galery .container .scroll-top"),
  progreses = selection1(
    "#our-skills .container .skills .skill .the-progress span",
    true
  ),
  timer = setInterval(() => {
    let time =
        new Date("jul 8, 2022 23:59:59").getTime() - new Date().getTime(),
      days = Math.floor(time / (1000 * 60 * 60 * 24)),
      hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      seconds = Math.floor((time % (1000 * 60)) / 1000);
    selection1(
      "#events .container .info .time .unit:nth-child(1) span:first-child"
    ).innerHTML = days < 10 ? `0${days}` : days;
    selection1(
      "#events .container .info .time .unit:nth-child(2) span:first-child"
    ).innerHTML = hours < 10 ? `0${hours}` : hours;
    selection1(
      "#events .container .info .time .unit:nth-child(3) span:first-child"
    ).innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    selection1(
      "#events .container .info .time .unit:nth-child(4) span:first-child"
    ).innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    if (time <= 0) {
      clearInterval(timer);
      selection1(
        "#events .container .info .time .unit:nth-child(1) span:first-child"
      ).innerHTML = "00";
      selection1(
        "#events .container .info .time .unit:nth-child(2) span:first-child"
      ).innerHTML = "00";
      selection1(
        "#events .container .info .time .unit:nth-child(3) span:first-child"
      ).innerHTML = "00";
      selection1(
        "#events .container .info .time .unit:nth-child(4) span:first-child"
      ).innerHTML = "00";
    }
  }, 1000);
scroll_top.addEventListener("click", () => {
  window.scrollTo({
    top: selection1("header").offsetTop,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", () => {
  window.scrollY >= 2000
    ? scroll_top.classList.add("display")
    : scroll_top.classList.remove("display");
  window.scrollY >= selection1("#our-skills").offsetTop - 400
    ? progreses.forEach((progres) => {
        progres.style.width = progres.dataset.width;
      })
    : "";
});
let gaols = selection1("#stats .container .box span span:first-child", true),
  stateScroll = false;
window.addEventListener("scroll", () => {
  if (window.scrollY >= selection1("#stats").offsetTop - 500) {
    if (!stateScroll) {
      gaols.forEach((gaol1) => {
        let counter = setInterval(() => {
          gaol1.innerHTML++;
          if (+gaol1.innerHTML >= +gaol1.dataset.goal) {
            clearInterval(counter);
          }
        }, 1000 / gaol1.dataset.goal);
      });
      stateScroll = true;
    }
  }
});

let image = document.querySelector("#discount .image"),
  currentBg = 1;
image.style.cssText = `background-image: url("imgs/bg-${currentBg}.jpg") !important;`;
setInterval(() => {
  currentBg++;
  if (currentBg > 5) {
    currentBg = 1;
  }
  image.style.cssText = `background-image: url("imgs/bg-${currentBg}.jpg") !important;`;
}, 10000);
let btnGenColors = selection1("#colors .container .btn-genrate");
function randomColors() {
  selection1("#colors .container .the-colors ").innerHTML = "";
  for (let index = 0; index < 70; index++) {
    let div = document.createElement("div"),
      span1 = document.createElement("input"),
      span2 = document.createElement("span");
    div.classList.add("color");
    span1.classList.add("name");
    span2.classList.add("shap");
    let color = randomColor();
    span1.setAttribute("readOnly", "");
    span1.value = color;
    span1.style.color = color;
    span2.style.backgroundColor = color;
    div.appendChild(span1);
    div.appendChild(span2);
    selection1("#colors .container .the-colors ").appendChild(div);
    span2.addEventListener("click", () =>
      navigator.clipboard.writeText(span1.value)
    );
  }
}
randomColors();
btnGenColors.addEventListener("click", () => {
  randomColors();
});
let btnGenGrad = selection1("#gradient .container .btn-gen");
function GenRandomGrad() {
  selection1("#gradient .container .the-grads").innerHTML = "";
  for (let i = 0; i < 12; i++) {
    let div = document.createElement("div"),
      info = document.createElement("textarea"),
      test = document.createElement("div"),
      icon = document.createElement("i");
    div.classList.add("grad");
    let color1 = randomColor(),
      color2 = randomColor(),
      color3 = randomColor();
    info.classList.add("informtion");
    info.value = `linear-gradient(45deg, ${color1}, ${color2}, ${color3})`;
    test.classList.add("test");
    test.style.backgroundImage = `linear-gradient(45deg, ${color1}, ${color2}, ${color3})`;
    icon.classList.add("fas", "fa-highlighter", "fa-4x");
    div.appendChild(info);
    div.appendChild(test);
    div.appendChild(icon);
    selection1("#gradient .container .the-grads").appendChild(div);
    test.addEventListener("click", () =>
      navigator.clipboard.writeText(info.value)
    );
    info.addEventListener(
      "input",
      () => (test.style.backgroundImage = `${info.value}`)
    );
  }
}
GenRandomGrad();
btnGenGrad.addEventListener("click", () => GenRandomGrad());
