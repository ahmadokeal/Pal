let nums = document.querySelectorAll('.sectionn span');
let sect = document.querySelector('.sectionn');
// window.addEventListener('scroll', function () {
//     let starFun = false;
//     if (window.scrollY >= sect.offsetTop - 100) {
//         if (starFun = false) {       
//             nums.forEach((e) => stertCont(e))
//         } else {
//             return false;
//         }
//     }
// });
let started = false;
window.onscroll = function () {
    if (window.scrollY >= sect.offsetTop - 200) {
        if (!started) {
            nums.forEach((num) => stertCont(num))
        }
        started = true;
    }
}
function stertCont(el) {
    let goal = el.dataset.goal;
    let cont = setInterval( _ => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(cont);
        }
    }, 2000 / goal)
}