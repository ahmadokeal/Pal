// function sweatPrompt(txtMaessage, placePrompt, valueReturnVar = undefined) {
//   let div = document.createElement("div");
//   div.classList.add("prompt", "bg-dark", "text-light", "shahid");
//   let message = document.createElement("div");
//   message.classList.add("massege");
//   message.textContent = txtMaessage;
//   let inp = document.createElement("input");
//   inp.setAttribute("type", "text");
//   let btnCont = document.createElement("div");
//   btnCont.classList.add("btns");
//   let btnOk = document.createElement("span");
//   let btnCansel = document.createElement("span");
//   btnOk.classList.add("btn", "btn-primary");
//   btnCansel.classList.add("btn", "btn-danger");
//   btnOk.innerHTML = "ok";
//   btnCansel.innerHTML = "cansel";
//   btnCont.appendChild(btnOk);
//   btnCont.appendChild(btnCansel);
//   div.appendChild(message);
//   div.appendChild(inp);
//   div.appendChild(btnCont);
//   let valueReturn = "unknown";
//   placePrompt.appendChild(div);
//   setTimeout(() => {
//     div.classList.add("active");
//     inp.focus();
//   }, 100);
//   btnOk.addEventListener("click", (_) => {
//     btnCont.parentElement.parentElement.remove();
//     if (inp.value !== "") {
//       valueReturn = inp.value;
//     }
//     valueReturnVar.innerHTML = valueReturn;
//   });
//   btnCansel.addEventListener("click", (_) => {
//     btnCont.parentElement.parentElement.remove();
//     valueReturnVar.innerHTML = valueReturn;
//   });
//   inp.addEventListener("keyup", (ev) => {
//     if (ev.key == "Enter") {
//       btnOk.click();
//     }
//   });
// }
// let myRequest = new XMLHttpRequest();
// myRequest.onreadystatechange = (_) => {
//   console.log(this.readyState);
//   // if (this.readyState === 4 && this.status === 200) {
//   //     console.log(this.responseText);
//   // }
// };
// myRequest.open("Get", "js/keyboard Shortcut.txt", true);
// myRequest.send();
function toggleAmPm(timeHour) {
  if (timeHour.endsWith("AM")) {
    timeHour = Array.from(timeHour);
    timeHour.splice(timeHour.length - 2, 2, "PM");
    return timeHour.join("");
  } else if (timeHour.endsWith("PM")) {
    timeHour = Array.from(timeHour);
    timeHour.splice(timeHour.length - 2, 2, "AM");
    return timeHour.join("");
  }
}
function getDateOfGame() {
  let timeGame = new Date().getHours();
  let theDate = `${new Date().getFullYear()}/${
    new Date().getMonth() + 1
  }/${new Date().getDate()} ${timeGame}:${new Date().getMinutes()}AM`;
  if (timeGame > 12) {
    timeGame -= 12;
    theDate = toggleAmPm(
      `${new Date().getFullYear()}/${
        new Date().getMonth() + 1
      }/${new Date().getDate()} ${timeGame}:${new Date().getMinutes()}AM`
    );
  }
  return theDate;
}
