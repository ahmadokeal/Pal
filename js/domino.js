function main() {
    let content = document.querySelector('.content');
    let classes7 = ['dark', 'light']
    function getRandNum(arr) {
        let ranNum = Math.floor(Math.random() * arr.length);
        return ranNum;
    };
    let nums = '0123456789';
    let aRR = [23, 18, 16, 29, 21]
    for (let index = 0; index < aRR[getRandNum(aRR)]; index++) {
        let dot = document.createElement('div');
        dot.classList.add('dot')
        dot.classList.add(classes7[getRandNum(classes7)]);
        dot.appendChild(document.createTextNode(nums.split('')[getRandNum(nums.split(''))]));
        content.appendChild(dot);
    };
    let parDark = `${(document.querySelectorAll('.content .dot.dark').length / document.querySelectorAll('.content .dot').length * 100).toFixed(1)}%`;
    let parlight = `${(document.querySelectorAll('.content .dot.light').length / document.querySelectorAll('.content .dot').length * 100).toFixed(1)}%`;
    console.log(parDark, parlight);
};
main();
function char() {
    let land = `${(document.querySelectorAll('.landing div').length / document.querySelectorAll('div').length * 100).toFixed(1)}%`;
    let art = `${(document.querySelectorAll('.articles div').length / document.querySelectorAll('div').length * 100).toFixed(1)}%`;
    let gal = `${(document.querySelectorAll('.galary div').length / document.querySelectorAll('div').length * 100).toFixed(1)}%`;
    let fea = `${(document.querySelectorAll('.features div').length / document.querySelectorAll('div').length * 100).toFixed(1)}%`;
    console.log(land);
    console.log(art);
    console.log(gal);
    console.log(fea);
}
char()