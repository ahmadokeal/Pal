// let title = 5, dec = 7, x = 8;
// console.log(+-50)
// console.log(x++)
// console.log(x) 
// let a = 10, b = "20", c = 80;
// console.log(`${++a}
// ${+b++}
// ${+c++}`);
// console.log(parseInt(5.99))
// console.log(parseFloat(5.99))
// console.log(Number.isInteger(5.99))
// console.log(Number.isNaN(5.99 / "ahmad"))

// console.log(Math.round(99.5))
// console.log(Math.ceil(99.1))
// console.log(Math.floor(99.9))
// console.log(Math.min(99.9, 100, -100, 140))
// console.log(Math.max(99.9, 88, 150))
// console.log(Math.trunc(99.9))
// console.log(Math.pow(5, 3))
// console.log(Math.random())
// let a = 1_00, b = 2_00.5, c = 1e2, d = 2.4;
// console.log(parseInt(Math.min(a, b, c, d)));
// let a = "elzero okeal amean"
// console.log(a.length);
// console.log(a.substring(2, 6));
// console.log(a.substr(0, 13));
// console.log(a.charAt(0).toLowerCase())
let D = document.querySelectorAll('.unit span:first-child')[0];
let H = document.querySelectorAll('.unit span:first-child')[1];
let M = document.querySelectorAll('.unit span:first-child')[2];
let S = document.querySelectorAll('.unit span:first-child')[3];
let dat = new Date("Apr 1, 2022 23:59:59").getTime();
let counter = setInterval(() => {
    let datNow = new Date();
    let diffDate = dat - datNow;

    let Days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    let Hours = Math.floor(diffDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let Minuets = Math.floor(diffDate % (1000 * 60 * 60) / (1000 * 60));
    let Seconds = Math.floor(diffDate % (1000 * 60) / 1000);

    D.innerHTML = Days < 10 ?  `0${Days}` : Days;
    H.innerHTML = Hours < 10 ?  `0${Hours}` : Hours;
    M.innerHTML = Minuets < 10 ?  `0${Minuets}` : Minuets;
    S.innerHTML = Seconds < 10 ?  `0${Seconds}` : Seconds;

    if (diffDate = 0) {
        clearInterval(counter)
    }
}, 1000)
let a = 10;
a < 10
    ? console.log(10)
    : a >= 10 && a <= 40
    ? console.log("10 to 40")
    : a > 40
    ? console.log("> 40")
    : console.log('unknown');
let st = "elzero web school";
if (!(st === "34")) {
    console.log("good");
} else {
    console.log("bad");
};
if (st !== "string") {
    console.log("good");
};
if (!(st === "number")) {
    console.log("good");
};
if (st.trim().slice(0, 6).repeat(2) === "elzeroelzero") {
    console.log("good");
};
// let day = "3";
// switch (day) {
//     case 0:
//         console.log("0");
//         break;
//     case 1:
//         console.log("1");
//         break;
//     case 3:
//     case 2:
//         console.log("2");
//         break;
//     default:
//         console.log("%cfalse", "opacity: .5; color: red; font-weight: bold; font-size: 20px");
// }
let job = "IT";
let salary = 0;
switch (job) {
    case "manager":
        salary = 8000;
        console.log(8000);
        break;
    case "IT":
    case "Support":
        console.log(6000);
        salary = 6000;
        break;
    case "developer":
    case "designer":
        console.log(7000);
        salary = 7000;
        break;
    default:
        console.log("8000");
        salary = 4000;
        break;
};
let holi = "5", mon = 0;
if (holi === 0) {
    mon = 5000;
    console.log(`your money is ${mon}`);
} else if (holi === 1 || holi === 2) {
    mon = 3000;
    console.log(`your money is ${mon}`);
} else if (holi === 3) {
    mon = 2000;
    console.log(`your money is ${mon}`);
} else if (holi === 4) {
    mon = 1000;
    console.log(`your money is ${mon}`);
} else if (holi === 5) {
    mon = 0;
    console.log(`your money is ${mon}`);
} else {
    mon = 0;
    console.log(`your money is ${mon}`);
};
// let frend = ["ahmad", "amean", "okeal"];
// console.log(frend);
// console.log(frend[2][2][1]);
// frend[1] = ["gamal", "blabla"];
// console.log(frend);
// frend[frend.length] = "mohamed"
// console.log(frend)
// frend[frend.length - 1] = "gamal"
// console.log(frend)
// frend.unshift("mohamed", "ali")
// console.log(frend)
// frend.push("mohamed", "ali")
// console.log(frend)
// let f = frend.shift()
// console.log(frend)
// console.log(f)

// let l = frend.pop()
// console.log(frend)
// console.log(l)
// let my = ["ahmad", 5 ,"mazero", "lham", 7, "osama", 10, "gamal", "ameer"];
// console.log(my)
// let names = []
// for (let i = 0; i < my.length; i++) {
//     if (typeof my[i] === 'string') {
//         names.push(my[i]);
//     }
// }
// console.log(names)
// let pro = ["pc", "lap", "ipad", "iphone", "pen"];
// let colors = ["red", "green", "blue"];
// let showcount = 5;
// document.write(`<h1> show count ${showcount} pro </h1>`)
// for (let i = 0; i < showcount; i++) {
//     document.write(`<div>`);
//     document.write(`<h2>[${i + 1}] ${pro[i] || "unknown" || 0}</h2>`)
//     for (let c = 0; c < colors.length; c++) {
//         document.write(`<p>- ${colors[c]}</p>`)
//     }
//     document.write(colors.join(" | "))
//     document.write(`</div>`);
//     if (showcount < 1) {
//         showcount === "unknown"
//         break;
//     }
// };
// let admins = ["ahmad", "osama", "sayed", "stop", "amean"];
// let jobs = ["amgad", "sameh", "ameer", "omar", "othman", "abdelrahman", "sameer"]
// let index = 0;
// // let A = []
// // let S = []
// // let O = []
// let jab = 0
// document.write(`we have ${admins.length} admin`)
// while (index < admins.length) {
//     // if (admins[index] === "stop") {
//     //     continue;
//     // }
//     document.write(`<hr>`);
//     document.write(`<div>`);
//     document.write(`the admin for team ${index + 1} is ${admins[index]}`);
//     document.write(`<h2>team membars:</h2>`)
//     while (jab < jobs.length) {
//         document.write(`<p>- ${jab + 1} ${jobs[jab]}</p>`)
//         jab += 1
//     }
//     document.write(`</div>`);
//     index += 1;
// }
// function years(day, mon, year) {
//     year = 12 * mon
//     mon = 30 * day
//     return 2022 - year, 3 - mon, 1 - day 
// };
// console.log(years(15, 12, 2022))
// function info(us = "un", ag = "un", rate = 0 ,show = "yes" ,...skills) {
//     document.write(`<div>`)
//     document.write(`<h2>hello ${us} your age is ${ag}</h2>`)
//     document.write(`<h3>hour rate: $${rate}</h3>`)
//     if (show === "yes") {
//         if (skills.length > 1) {
//             document.write(`<h3>skills: </h3>`);
//             for (let i = 0; i < skills.length; i++) {
//                 document.write(`<p>-[${i + 1}] ${skills[i]}</p>`)
//             }
//         } else {
//             document.write("<h3>skills:  no skills</h3>")
//         }
//     } else {
//         document.write("<h3>skills: skills is hidden</h3>")
//     }
//     if (skills.length >= 5) {
//         document.write(`<h2>${us} you are professional programer</h2>`)
//     }
//     document.write(`</div>`)
// }
// info("okeal", 50, 15000, "yes", "html", "css", "js", "c#", "c++");
// function showDatelies(a, b, c) {
//     if (a === 'Number') {
//         b = a
//     } else if (a === 'Boolean') {
//         c === a
//     }
//     if (b === 'String') {
//         a = b
//     } else if (b === 'Boolean') {
//         c === b
//     }
//     if (c === 'Number') {
//         b = c
//     } else if (a === 'String') {
//         a === c
//     }
//     if (c === true) {
//         console.log(`hello ${a} your age is ${b} villable`)
//     } else {
//         console.log(`hello ${a} your age is ${b} not villable`)
//     }
// }
// console.log(showDatelies(65, true, "ahmad"));
// let names2 = (...namesA )=>  `string [${namesA}]`
// console.log(names2("ahmad", "okeal", "amen"));
// let mynums = [1, 2, 3, 4, 5]
// let add = mynums.map((ele) => ele + ele);
// console.log(add);
// let letters = "eLzErO";
// let lat = letters.split("").map((ele) => ele === ele.toLowerCase() ? ele.toUpperCase() : ele.toLowerCase()).join('');
// console.log(lat);
// let int = [1, -1, 10, -50];
// let neg = int.map((ele) => -ele === ele ? +ele : -ele);
// console.log(neg);
// let blabla = " W269N-WFGWX-YVC9B-4J6C9-T83GX";
// let blue = blabla.split("").sort().map((ele) => isNaN(parseInt(ele))  === false && ele !== "-" ? ele : '').join('');
// console.log(blue);
// let numbers = [15, 20, "ghfg", 19, 9, 4, 18, "dfs"];
// let newNum = numbers.filter((el) => el % 2 !== 0 && isNaN(parseInt(el)) === false).join('');
// console.log(newNum)
// let ran = [1, 2, 3];
// let exar = "i love foood code too playing much";
// let ans = exar.split(" ").filter((e) => e.length <= 4).join(" ");
// console.log(ans)
// let exam2 = "A454h781m874a2014d";
// let answer = exam2.split("").filter((e) => isNaN(parseInt(e))).join('')
// console.log(answer)
// let exam3 = "A2h5m29";
// let answer2 = exam3
//     .split("")
//     .filter((e) => !isNaN(parseInt(e)))
//     .map((e) => e * e)
// console.log(answer2)
// let ran2 = +ran.reduce((e, c)  => e / c).toFixed(1)
// console.log(ran2);
// let exam4 = ["ahmad", "okealing", "okeal", "amean", "okil","ok", "environment", "e@n@vir@onm@ent_tw"];
// let answer3 = exam4
//     .reduce((e, c) => e.length > c.length ? e : c)
//     .split('')
//     .filter((e) => e !== "@")
//     .reduce((e,c) => e + c)
//     .toUpperCase()
//     console.log(answer3);
// // let myString = "1,2,3,EE,l,z,e,r,o_w,e,b_s,c,h,o,o,l,1,2,0,Z";
// // let solution = myString.split("").filter((e) => isNaN(parseInt(e)) && e !== "_" && e !== ",").reduce((e,c) => e === c ? '' : e)
// // console.log(solution);
// let nam8 = "country"
// let user = {
//     "age of": 15,
//     say_hello: _ => `hello`,
//     country: "egypt"
// }
// console.log(user[nam8])
// console.log(user["age of"])
// console.log(user.say_hello())
// let obj = new Object({
//     volcano: "hawaii",
//     strong: 7555
// });
// console.log(obj)
// let obj2 = Object.create(obj);
// obj2.volcano = 5
// console.log(obj2);
// let finalObj = Object.assign(obj, obj2)
// console.log(finalObj)
// let myIdElement = document.getElementById('articles')
// let myTagElements = document.getElementsByTagName('div')
// let myClassElement = document.getElementsByClassName('box')
// let myElement = document.querySelector('body')
// console.log(myIdElement)
// console.log(myElement)
// console.log(myTagElements[142].innerHTML)
// console.log(myClassElement[33].innerHTML)
// console.log(document.title);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.links[58].innerHTML);
// console.log(document.images[37].outerHTML);
// let jsEl = document.querySelector('#test')
// console.log(jsEl.innerHTML)
// console.log(jsEl.textContent)
// jsEl.innerHTML = "text from <span>js.js</span>"
// jsEl.textContent = "text from <span>js.js</span>"

// document.images[document.images.length - 1].src = "imgs/avatar-01.png"
// document.images[document.images.length - 1].alt = "imgs/avatar-01.png"
// document.images[document.images.length - 1].title = "imgs/avatar-01.png"
// document.images[document.images.length - 1].id = "ava"
// document.images[document.images.length - 1].className = "class"
// console.log(document.images[document.images.length - 1].getAttribute('class'))
// console.log(document.images[document.images.length - 1].getAttribute('src'))
// document.images[document.images.length - 1].setAttribute('src', "imgs/events.png")
// document.images[document.images.length - 1].setAttribute('class', 'imgTest')
// let myImg = document.querySelector("img");
// if (myImg.hasAttribute("alt")) {
//     if (myImg.hasAttribute("alt") === "") {
//         myImg.setAttribute("alt", "new")
//     }
// } else {
//     myImg.setAttribute("alt", "new")
// };
// let myDiv = document.createElement('div');
// myDiv.className = "cssDiv";
// myDiv.id= "jsDiv";
// let textDiv = document.createTextNode('ahmad okeal');
// myDiv.appendChild(textDiv);
// document.body.appendChild(myDiv);
// myDiv.style.fontSize = '50px';
// myDiv.style.fontWeight = 'bold';
// myDiv.style.textTransform = 'capitalize';
// myDiv.style.color = 'var(--main-color)';
// console.log(myDiv);
// let product = document.createElement('div')
// product.className = "product";
// let head = document.createElement('h3')
// let t_h3 = document.createTextNode('product')
// head.appendChild(t_h3);
// let p = document.createElement('p')
// let t_p = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque minus unde aliquam ullam quis velit accusantium eveniet dolores harum iusto mollitia quod officia aliquid iure, rerum accusamus amet esse");
// p.appendChild(t_p);
// product.appendChild(head);
// product.appendChild(p);
// product.style.border = "3px solid var(--main-color)"
// product.style.textAlign = "center"
// product.style.width = "350px"
// product.style.margin = "50px auto" 
// product.style.fontSize = "25px" 
// product.style.boxShadow = "0 0px 20px rgb(169 169 169 / 32%), 0 5px 20px 5px rgb(175 175 175 / 28%)"
// product.style.padding = "15px"
// head.style.color = "var(--main-color)"
// head.style.textTransform = "capitalize"
// p.style.color = "#666"
// p.style.lineHeight = "1.6"
// document.body.appendChild(product)
// for (let i = 0; i < 10; i++) {
//     let product = document.createElement('div')
//     product.className = "product";
//     let head = document.createElement('h3')
//     let t_h3 = document.createTextNode(`product ${i + 1}`)
//     head.appendChild(t_h3);
//     let p = document.createElement('p')
//     let t_p = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque minus unde aliquam ullam quis velit accusantium eveniet dolores harum iusto mollitia quod officia aliquid iure, rerum accusamus amet esse");
//     p.appendChild(t_p);
//     product.appendChild(head);
//     product.appendChild(p);
//     product.style.border = "3px solid var(--main-color)"
//     product.style.textAlign = "center"
//     product.style.width = "350px"
//     product.style.margin = "50px auto" 
//     product.style.fontSize = "25px" 
//     product.style.boxShadow = "0 0px 20px rgb(169 169 169 / 32%), 0 5px 20px 5px rgb(175 175 175 / 28%)"
//     product.style.padding = "15px"
//     head.style.color = "var(--main-color)"
//     head.style.textTransform = "capitalize"
//     p.style.color = "#666"
//     p.style.lineHeight = "1.6"
//     document.body.appendChild(product)
// }
// let btn_u = document.querySelector('#btn1');
// let btn_p = document.querySelector('#btn2');
// let btn_s = document.querySelector('[type= "submit"]')[1];
// document.forms[1].onsubmit = function (e) {
//     let nameV = false;
//     let pasV = false;
//     if (btn_u.value !== '' && btn_u.value.length <= 10) {
//         nameV = true
//     } else {
//         nameV = false
//     }
//     if (btn_p.value !== '' && btn_p.value.length >= 5) {
//         pasV = true
//     } else {
//         pasV = false
//     }
//     if (nameV === false || pasV === false) {
//         e.preventDefault()
//     }
// }
// console.log(btn_u.classList)
// console.log(btn_u.classList.item('2'))
// console.log(btn_u.classList.contains('a' , 'b', 'c'))
// console.log(btn_u.classList)
// myDiv.onclick = _ => myDiv.classList.toggle('cssDiv');
// let btn_b = document.createElement('button');
// let t_btn = document.createTextNode('dark')
// btn_b.appendChild(t_btn);
// document.querySelector('header .container').appendChild(btn_b);
// btn_b.onclick = _ => {document.body.style.cssText = 'background-color: #333; color: white';
//     document.querySelectorAll('div').style.cssText = 'background-color: #333; color: white'};
let artc = document.querySelector('.articles .container');
let artcM = document.querySelector('#articles').cloneNode(true);
let my_box = document.querySelectorAll('#comments .box')[0];
// artcM.id = `${artcM.id}-copy`
console.log(artc.childNodes[0]);
console.log(artc.firstChild);
console.log(artc.lastChild);
console.log(artc.firstElementChild);
console.log(artc.lastElementChild);
console.log(artcM.parentElement);
console.log(artcM);
console.log(my_box);
// document.body.appendChild(artcM)
// my_box.addEventListener("click", function () {
//     console.log('event 1');
// })
my_box.addEventListener("click", function () {
    let copy = my_box.cloneNode(true);
    copy.classList.add('copier');
    my_box.parentElement.appendChild(copy);
    console.log(copy.innerHtml)
    my_box.remove()
    // let T = document.createTextNode('delete');
    // let btn = document.createElement('button');
    // btn.appendChild(T);
    // btn.classList.add('delete')
    // copy.style.alignItems = 'Flex-start';
    // copy.appendChild(btn);
});
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("copier")) {
        let cCopy = e.target.cloneNode(true);
        e.target.parentElement.appendChild(cCopy);
        console.log(cCopy.innerHtml)
        // let btn_DD = document.querySelector('.delete');
    };
    // if (e.target === btn_DD) {
    //     // console.log(`${e.target.classList}`)
    //     e.addEventListener('click', function () {
    //         this.parentElement.remove()
    //     })
    // }
});
// document.addEventListener('click', function (ed) {
//     if (ed.target.classList.contains('delete') === true) {
//         ed.pa
//     };
// });
// let count = setTimeout( _ => console.log(" 1 + 20"), 3000);
// let my_btn = document.querySelector('#stop')
// my_btn.onclick =_ => {
//     my_btn.textContent = 'return';
//     my_btn.id = 'return';
// }
// setTimeout(document.addEventListener('click', function (e) {
//         if (e.target.id = 'return') {
//             // let count2 = setTimeout( _ => console.log(" 1500"), 3000);
//             e.target.textContent = 'stop'
//             e.target.id = 'stop'
//         }
//     }), 1000)
// let main_color = document.styleSheets[2].rules
// console.log(document.styleSheets[1])
// window.localStorage.setItem('contS', S.innerHTML);
// setInterval(() => {
//     window.localStorage.setItem('contS', S.innerHTML);
// }, 1000);
// S.innerHTML = window.localStorage.getItem('contS');
// // minuets
// // window.localStorage.setItem('contM', M.innerHTML);
// setInterval(() => {
//     window.localStorage.setItem('contM', M.innerHTML);
// }, 6000);
// M.innerHTML = window.localStorage.getItem('contM');
// // // hours
// setInterval(() => {
//     window.localStorage.setItem('contH', H.innerHTML);
// }, 36000);
// H.innerHTML = window.localStorage.getItem('contH');
// // days
// setInterval(() => {
//     window.localStorage.setItem('contD', D.innerHTML);
// }, 86_400_000);
// D.innerHTML = window.localStorage.getItem('contD');
// window.localStorage.color = document.body.style['--main_color'];
// document.body.style['--main_color'] = '#00b998';
// document.body.style['--alt-color'] = '#00e1a9';
// console.log(document.body.style['--main_color']);

// start change color
let btn_e = document.querySelectorAll('.test ul li');
let exp = document.querySelector('.shap')
if (window.localStorage.getItem('color')) {
    exp.style.color = window.localStorage.getItem('color');
    btn_e.forEach((li) => {
        li.classList.remove('active');
    });
    document.querySelector(`[data-color="${window.localStorage.getItem('color')}"]`).classList.add('active')
}
// end change color
//     document.querySelector(`[data-color] = ${window.localStorage.getItem('color')}`).classList.add('active')
// }
btn_e.forEach((li) => {
    li.addEventListener('click', (e) => {
        // console.log(e.currentTarget.dataset.color)
        btn_e.forEach((li) => {
            li.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
        window.localStorage.setItem('color', e.currentTarget.dataset.color);
        exp.style.color = e.currentTarget.dataset.color
        }
    )
})
// document.addEventListener('click', (e) => {
//     if (e.target.classList.contains('cr')) {
//         e.onclick = _ => {
//             btn_e.forEach((li) => {
//                 li.classList.remove('active');
//             })
//             li.classList.add('active');
//         }
//     }
// })
//
let ab = 1;
let bc = 2;
let cd = 3;
let de = 4;
let myFriends = ["ahmad", "hassan", "abdelrahman", "mahmoud"];
[ab = "ok",bc,cd,de,ef = "?"] = myFriends
console.log(ab)
console.log(bc)
console.log(cd)
console.log(de)
console.log(ef)
let [x,y, ,z] = myFriends
console.log(x)
console.log(y)
console.log(z)
//
let book = "vidieo1";
let vidieo = "book1";
[book, vidieo] = [vidieo, book];
console.log(book);
// const obj5 = {
//     theName: 'ahmad',
//     age: 57,
//     contry: "eg"
// }
// let chosen = 3;

// let myMemers = [
//     {title: 'ahmad', age: 15, avilable: true, skills: ["HTML", 'CSS', 'JAVASCRIPT']},
//     {title: 'okeal', age: 50, avilable: false, skills: ["c++", 'c#', 'c']},
//     {title: 'amean', age: 22, avilable: true, skills: ["python", '.Net', 'java']}
// ]
// if (chosen === 1) {
//     const [num1, , ] = myMemers;
//     const {title: t, age: a, avilable: av, skills: [,,lastSk]} = num1;
//     console.log(t);
//     console.log(a);
//     av === true? console.log("avilable"):console.log("not avilabe");
//     console.log(lastSk);
// } else if (chosen === 2) {
//     const [,num2,] = myMemers;
//     const {title: t, age: a, avilable: av, skills: [,,lastSk]} = num2;
//     console.log(t);
//     console.log(a);
//     av === true? console.log("avilable"):console.log("not avilabe");
//     console.log(lastSk);
// } else if (chosen === 3) {
//     const [, ,num3] = myMemers;
//     const {title: t, age: a, avilable: av, skills: [,,lastSk]} = num3;
//     console.log(t);
//     console.log(a);
//     av === true? console.log("avilable"):console.log("not avilabe");
//     console.log(lastSk);
// };
// let serWin = 'W269N-WFGWX-YVC9B-4J6C9-T83GX';
// // let final_ser = serial[0].toLocaleUpperCase()
// serWin.split('')
// console.log(`%c${serial}`, "font-size: 20px; font-weight: bold; color: red");
// let parsLett = serial
//     .split('')
//     .filter((e) => isNaN(parseInt(e)))
//     .length / serial.split('')
//     .length * 100;
// let parFinal = Math.round(parsLett.toFixed(1));
// console.log(`${parFinal}%`);
// console.log(serial);
// console.log(ser);
// function serial() {
    // console.log(arr5.split(""));
//     arr5.split("");
//     let ser = arr5[Math.floor(Math.random()*arr5.length)].toString + arr5[Math.floor(Math.random()*arr5.length)].toString + arr5[Math.floor(Math.random()*arr5.length)].toString

//     return ser
// }
// console.log(serial());
// let theName_1= obj5.theName
// let theage = obj5.age
// let thecontry = obj5.contry
// ({theName_1, theage, thecontry} = obj5);
// console.log(theName_1, theage, thecontry)
// location.href = '#galary'
// console.log(location.href)
// console.log(location.host)
// console.log(location.hostname)
// location.protocol='http'
let btn555 = document.querySelector('.go-up');
window.addEventListener('scroll', function () {
    if (window.scrollY >= 3500) {
        btn555.style.display = 'block'
    } else {
        btn555.style.display = 'none'
    }
})
btn555.onclick = _ => window.scrollTo({
    top: 0,
    behavior: "smooth"
})
// console.log(window.getSelection())
// window.moveTo(0, 3500)
// document.addEventListener('click', function (e) {
//     if (e.target) {
//         console.log(e.target.parentElement)
//     }
// })
console.clear()
// let SetObj = new Set([1,1,22,22,33]);
// SetObj.add(4)
// SetObj.delete(4)
// console.log(SetObj)
// // console.log(SetObj.delete(22))
// console.log(SetObj.has(222))
let myObj = {}
let myEmptyObj = Object.create(null)
let myMap = new Map()
console.log(myObj);
console.log(myEmptyObj);
console.log(myMap);
console.log('###################');
let newObj = {
    10: 'num',
    '10': 'string'
}
let newMap = new Map()
newMap.set(10, 'num')
newMap.set("10", 'string')
newMap.set(true, 'boolen')
newMap.set(function dosome() {}, 'function')
newMap.set({a: 5, b:6, c:7}, 'object')
console.log(newObj[10])
console.log(newMap.get(10))
console.log(newMap.get('10'))
console.log('###################');
console.log(newObj)
console.log(newMap)
///// start tasks
let inpTask = document.querySelector('#T-task');
let btn_add_t = document.querySelector('.cladd');
let task_p = document.querySelector('.tasks');
inpTask.onkeyup = e => {
    if (e.key == 'Enter') { 
        btn_add_t.click();
        btn_add_t.focus();
    }
}
btn_add_t.addEventListener('click', _ => {
    if (inpTask.value === '') {
        
    } else {  
        btn_add_t.classList.add('added');
        let task = document.createElement('div');
        task.setAttribute('class', 'task');
        // let tT = inpTask.value 
        task.append(inpTask.value);
        let D_task = document.createElement('button');
        D_task.classList.add('btn');
        D_task.classList.add('btn-danger');
        D_task.classList.add('D-t');
        let D_t = document.createTextNode('delete');
        D_task.appendChild(D_t);
        task.appendChild(D_task);
        task.addEventListener('click', _ => task.classList.toggle('done'));
        task_p.appendChild(task);
        window.localStorage.setItem('tasks', task_p.innerHTML);
        inpTask.value = '';
    }
})
btn_add_t.onblur = _ => {
    btn_add_t.classList.remove('added')
}
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('D-t')) {
        e.target.parentElement.remove()
        window.localStorage.setItem('tasks', task_p.innerHTML)
    }
})
task_p.innerHTML = window.localStorage.getItem('tasks')
///// end tasks
console.log(Array.from('ahmad'))
console.log(Array.from("1234", (n) => +n + +n))
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let mySet = new Set(myArr)
// console.log(Array.from(mySet))
// console.log([...new Set(myArr)])
// console.log(myArr)
// let thisnum = 9;
// // let newArr88 = myArr.copyWithin(3,-2,-1)
// // console.log(newArr88);
// console.log('#'.repeat(20))
// let somArr = myArr.some(function (e) {
//     return e > this
// }, thisnum)
// console.log(somArr)
// function CV(arr,vals) {
//     return arr.some((e) => e === vals)
// }
let arr997 = [1,2,3,4,5,6,7,8,9,10];
let range = {
    min: 10,
    max: 20,
}
// console.log(CV(myArr, 9))
let CR = arr997.some(function (e) {
    return e >= this.min && this.max; 
}, range);
console.log(CR)
// console.log(myArr)
let locations = {
    20: "place 1",
    50: "place 2",
    60: "place 3",
    80: "place 4",
    30: "place 5",
}
let locationArr = Object.keys(locations);
let locationNum = locationArr.map((n) => +n);
let minLocate = 15;
let Chck = locationNum.every(function (e) {
    return e > this
}, minLocate)
console.log(Chck)
console.log('#'.repeat(30))
let arr1 =[1,2,3];
let arr2 =[4,5,6];
let allArrs = [...arr1,...arr2]
console.log(allArrs)
let copierArr = [...arr2]
console.log(copierArr)
let friends = ['ahmad', 'okeal', 'amean'];
let myNwFrnd = ['okil', 'ali'];
friends.push(...myNwFrnd)
console.log(friends)
console.log(Math.max(...arr997))
let obj1 = {
    a:1,
    b:2
}
let obj2 = {
    c:3,
    d:4
}
console.log({...obj1,...obj2,e:5})
console.log('#'.repeat(30))
let words = "Hello my names Is Ahmad okeal ahmad"
let regex = /ahmads/ig
console.log(words.match(regex))

let domain = "Org Net Com Info Io Ae Code"
let regex1 = /(io|com|code)/ig
console.log(domain.match(regex1))

let nums = "12345678910"
let numsreg = /[0-2]/g
console.log(nums.match(numsreg))

let noTnums = "12345678910"
let noTnumsreg = /[^0-2]/g
console.log(nums.match(noTnumsreg))

let specnums = "1!23@45#6$7%8&9%10"
let specnumsreg = /[^0-9]/g
console.log(specnums.match(specnumsreg))

let os = "os Os10os Os87 Os8os"
let osreg = /os[0-9]os/ig
console.log(os.match(osreg))

let Emali = 'A@@@...com a@gmail.com A@g.net a-g.com A@m.org 1@1.com'
let valid = /./g
let valid1 = /\w/g
let valid2 = /\W/g
let valid3 = /\d/g
let valid4 = /\D/g
let valid5 = /\s/g
let valid6 = /\S/g
console.log(Emali.match(valid))
console.log(Emali.match(valid1))
console.log(Emali.match(valid2))
console.log(Emali.match(valid3))
console.log(Emali.match(valid4))
console.log(Emali.match(valid5))
console.log(Emali.match(valid6))
console.log('#'.repeat(30))
let validate = /\w+@\w+.(com|net|org)/ig;
// document.querySelector('.events [type = "email"]').addEventListener('blur', _ => {
//     let value = document.querySelector('.events [type = "email"]').value;
//     if (validate.test(value)) {
//         console.log('valid');
//     } else {
//         console.log('Not valid');
//     }
// })
let word1 = 'We Love Programming'
let names12 = '1AhmadZ 2Okealz 3ameaens 5OkilZ 5MouhamedZ 5mahmoud'
console.log(/ing$/ig.test(word1))
console.log(/^we/ig.test(word1))
console.log(/dz$/ig.test(names12))
console.log(/^\s/ig.test(names12))

console.log(names12.match(/\d\w{5}(?=Z)/ig))
console.log(names12.match(/\d\w{7}(?!Z)/ig))
console.log('#'.repeat(30))
let words8 = 'we love @ because @ is amaizing'
console.log(words8.replaceAll('@', 'javacript'))
console.log(words8.replaceAll(/@/ig, 'javacript'))
console.log('#'.repeat(30))
let url1 = 'elzero.org'
let url2 = 'http://elzero.org'
let url3 = 'https://elzero.org'
let url4 = 'https://www.elzero.org'
let url5 = 'https://www.elzero.org:80800/articles.php?id=100&cat=topics'
let url6 = 'file:///G:/Myprogects/%E2%80%8F%E2%80%8Fmyprojct3/index.html#features'
let url7 = 'https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#provisional-headers'
let Re = /(((https?)?(:\/\/)?(www.)?\w+.org(:\d+\/\w+.php\?id=\d+&\w+=\w+)?)|((file:\/\/\/)?[c-g]:\/\w+\/%?\w+%?\d+%?\w+%?\w+%?\d+%?\w+\/\w+.html(#\w+)?))/ig;
console.log(url1.match(Re).join(''))
console.log(url2.match(Re).join(''))
console.log(url3.match(Re).join(''))
console.log(url4.match(Re).join(''))
console.log(url5.match(Re).join(''))
console.log(url6.match(Re).join(''))
// console.log(url7.match(Re))
console.log(url1.match(Re) == url1)
console.log(url2.match(Re) == url2)
console.log(url3.match(Re) == url3)
console.log(url4.match(Re) == url4)
console.log(url5.match(Re) == url5)
console.log(url6.match(Re) == url6)
///////
console.clear()
let spans = document.querySelectorAll('.skill .prog span');
let sec1 = document.querySelector('#skills');
window.addEventListener('scroll', function() {
    if (window.scrollY >= sec1.offsetTop - 400) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
})
// start componant
// function RemoveActive(thas) {
//     thas.forEach((li) => {
//         li.classList.remove('active');
//         this.classList.add('active')
//     })
// }
// end componant
// console.log(dat)
// document.body.style.cssText = '--main_color: var(--bs-purple);--alt-color: var(--bs-indigo);'
let inp = document.querySelector('#js-Magic2 [type]');
let Prog = document.querySelector('#js-Magic2 .Progress');
let cont = document.querySelector('#js-Magic2 .cont');
cont.innerHTML = inp.getAttribute('maxlength');
inp.oninput = _ => {
    let Attr = inp.getAttribute('maxlength');
    let pars = (inp.value.length / Attr) * 100;
    Prog.style.width = `${pars}%`;
    cont.innerHTML = +Attr - inp.value.length;
    if (cont.innerHTML === "0") {
        cont.classList.add('zero')
    } else {
        cont.classList.remove('zero')
    }
}
let liTap = document.querySelectorAll('#js-Magic2 .tabs li');
let contTap = document.querySelectorAll('#js-Magic2 .content div');
// console.log(liTap);
// console.log(contTap);
liTap.forEach((li) => {
    li.addEventListener('click', _ => {
        liTap.forEach((l) => {
            l.classList.remove('active');
        })
        li.classList.add('active')
        contTap.forEach((t) => {
            t.classList.remove('active');
            if (t.classList.contains(`${li.dataset.con}`)) {
                t.classList.add('active')
            }
        })
    })
});
let hexArr = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let theColor = '#';
let testBac = document.querySelector('.rand .shap');
let inpHex = document.querySelector('.rand .hex');
let btn_genColor = document.querySelector('.rand .gencol');
inpHex.onscroll = _ => false;
inpHex.onfocus = _ => {
    inpHex.select();
};
btn_genColor.onclick = _ => {
    genRandCol();
}
function genRandCol() {
    inpHex.value = '';
    for (let i = 0; i < 6; i++) {
        theColor += hexArr[Math.floor(Math.random() * hexArr.length)];
    };
    testBac.style.cssText = `background-color: ${theColor}`;
    inpHex.value = theColor;
    window.localStorage.setItem('specColor', theColor);
    theColor = '#';
}
if (!window.localStorage.getItem('specColor') == '') {
    testBac.style.cssText = `background-color: ${window.localStorage.getItem('specColor')}`;
    inpHex.value = window.localStorage.getItem('specColor');
} else {
    ''
}
let inpD = document.querySelector('input[type = "month"]');
let arr5 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let numSer = 25;
let allSer = [];
if (localStorage.getItem('allSerial')) {
    allSer = JSON.parse(localStorage.getItem('allSerial'));
}
function getSerial(arr, numser) {
    arr.split('');
    let serArr = [];
    for (let i = 0; i < numser; i++) {
        let num = arr[Math.floor(Math.random() * arr.length)];
        serArr.push(num);
        if (serArr.length === 5) {
        serArr.push('-');
        } else if (serArr.length === 11) {
            serArr.push('-');
        } else if (serArr.length === 17) {
            serArr.push('-')
        } else if (serArr.length === 23) {
            serArr.push('-')
        }
    };
    while (/^\d/.test(serArr.join('')) == true) {
        serArr = [];
        for (let i = 0; i < numser; i++) {
            let num = arr[Math.floor(Math.random() * arr.length)];
            serArr.push(num);
            if (serArr.length === 5) {
            serArr.push('-');
            } else if (serArr.length === 11) {
                serArr.push('-');
            } else if (serArr.length === 17) {
                serArr.push('-')
            } else if (serArr.length === 23) {
                serArr.push('-')
            }
        };
    }
    return serArr.join('');
}
function addSLS(serialArr) {
    window.localStorage.setItem('allSerial', JSON.stringify(serialArr));
}
function getArrLS(arr) {
    arr = JSON.parse(window.localStorage.getItem(arr));
}
function getold(theDate) {
    let date1 = new Date(theDate).getTime();
    let date2 = new Date().getTime();
    let deferense = date2 - date1;
    let years = Math.floor(deferense / (1000 * 60 * 60 * 24 * 365));
    let monthes = Math.floor(deferense % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 30));
    // let weeks = Math.floor(deferense % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor(deferense % (1000 * 60 * 60 * 24 * (366 / 30)) / (1000 * 60 * 60 * 24)); // 34
    let daysT = Math.floor(deferense / (1000 * 60 * 60 * 24)); // days  = 4
    return `${years}-${monthes}-${days}-${daysT}`;
}
function RemoveActive(arr, Activation = false) {
    if (Activation == true) {
        arr.forEach((e) => {
            e.addEventListener('click', _ => {
                arr.forEach((e) => {
                    e.classList.remove('active');
                });
                e.classList.add('active');
            });
        });
    } else {
        arr.forEach((e) => {
            e.classList.remove('active')
        })
    }
}
let inpSer = document.querySelector('.js-magic2 .randSer .serial');
let btn_Ser = document.querySelector('.randSer .genser');
let place_Sers = document.querySelector('.randSer .allSer');
let btn_Show_All_Serials = document.querySelector('.randSer .show-serials');
if (window.localStorage.getItem('serials')) {
    place_Sers.innerHTML = window.localStorage.getItem('serials')
} 
btn_Show_All_Serials.addEventListener('click', _ => {
    place_Sers.innerHTML = '';
    allSer.forEach((ser) => {
        let div = document.createElement('div');
        div.appendChild(document.createTextNode(ser));
        div.classList.add('ser');
        place_Sers.appendChild(div);
    });
    window.localStorage.setItem('serials', place_Sers.innerHTML);
})
btn_Ser.onclick = _ => {
    inpSer.value = '';
    let serial = getSerial(arr5, numSer);
    allSer.push(serial);
    addSLS(allSer);
    inpSer.value = serial;
};
let Myold = getold('Jan 1, 2008');
// let data97 = new Date('Dec 15, 2007').getDate();
console.log(Myold);
// start slider
function slider() {
    let sliderImgs = Array.from(document.querySelectorAll('.slider .slider-cont img'));
    let sliderCount = document.querySelector('.slider .count');
    let nextSlide = document.querySelector('.slider .nextSlide');
    let pevsSlide = document.querySelector('.slider .prevSlide');
    let btnsSlider = document.querySelector('.slider .btns');
    let currentSlide = 1;
    let sliderNum = sliderImgs.length;
    let ulBtns = document.createElement('ul');
    for (let i = 0; i < sliderNum; i++) {
        let li = document.createElement('li');
        li.setAttribute('data-index', i);
        ulBtns.appendChild(li);
    };
    btnsSlider.innerHTML = '';
    btnsSlider.appendChild(ulBtns);
    checker();
    nextSlide.addEventListener('click', function () {
        if (currentSlide >= sliderNum) {
            currentSlide = 1;
            checker();
        } else {
            currentSlide++;
            checker();
        };
    });
    pevsSlide.addEventListener('click', function () {
        if (currentSlide <= 1) {
            currentSlide = sliderNum;
            checker();
        } else {
            currentSlide--;
            checker();
        };
    });
    function checker() {
        let btns = document.querySelectorAll('.slider .btns li');
        RemoveActive(sliderImgs);
        sliderImgs[currentSlide - 1].classList.add('active');
        sliderCount.innerHTML = `Slide ${currentSlide} Of ${sliderNum}`;
        RemoveActive(btns);
        btns[currentSlide - 1].classList.add('active');
    };
    document.addEventListener('click', (e) => {
        if (e.target.hasAttribute('data-index')) {
            currentSlide = +e.target.getAttribute('data-index') + 1;
            checker();
        };
    });
};
slider();
// console.log(sliderCount,sliderImgs,nextSlide,pevsSlide)
// end slider
function bar() {
    let btnBar = document.querySelector('header .setting');
    let bar = document.querySelector('.bar');
    let colors = Array.from(document.querySelectorAll('.bar .set-color .color'));
    document.addEventListener('keyup', (ev) => {
        if (ev.key == 'Escape') {
            btnBar.click();
        };
    });
    btnBar.addEventListener('click', _ => {
        bar.classList.toggle('active');
        btnBar.classList.toggle('active');
    });
    colors.forEach((color) => {
        color.style.cssText = `color: ${color.dataset.color}`;
    });
    if (window.localStorage.getItem('main-color')) {
        colors.forEach((color) => {
            if (color.dataset.color == window.localStorage.getItem('main-color')) {
                RemoveActive(colors);
                document.body.style.cssText = `--main_color: ${color.dataset.color}; --alt-color: ${color.dataset.color}`;
                color.classList.add('active');
            };
        });
    };
    colors.forEach((color) => {
        color.addEventListener('click', _ => {
            RemoveActive(colors);
            color.classList.add('active');
            document.body.style.cssText = `--main_color: ${color.dataset.color}; --alt-color: ${color.dataset.color}`;
            window.localStorage.setItem('main-color', color.dataset.color);
        });
    });
    let choosers = Array.from(document.querySelectorAll('.bar .choosers div'));
    RemoveActive(choosers, true);
};
bar()