let language = document.querySelector('.containers-big .language')
let languageall =document.querySelector('.containers-big .language-all')
let third_ul = document.querySelector('.containers-big .third-ul')
let third_ul_l1 = document.querySelector('.containers-big .third-ul .l1')
let third_ul_ul1 = document.querySelector('.containers-big .third-ul .l1 ul')
let third_ul_l3 = document.querySelector('.containers-big .third-ul .l3')
let third_ul_ul3 = document.querySelector('.containers-big .third-ul .l3 ul')
let first_ul = document.querySelector('.containers-big .first-ul')
let qr = document.querySelector('.second-head-nav-right-l1')
let qr_ul = document.querySelector('.second-head-nav-right-l1 ul')
language.onclick = () => {
  if( languageall.style.display === 'flex'){
    languageall.style.display = 'none'
  }else{
    languageall.style.display = 'flex'
  }
}

let lis = document.querySelectorAll('.containers-big .first-ul li')

for(let li of lis){
  li.onclick = () =>{
    let before = document.querySelector('.first-ul-before')
    before.classList.remove('first-ul-before')
    li.classList.add('first-ul-before')
  }
}
let body = document.querySelector('body')
let second_ul = document.querySelector('.containers-big .second-ul')
let search = document.querySelector('.containers-big .Search')
let i = document.querySelector('.containers-big .Search i')
second_ul.onclick = () =>{
  search.style.display = 'flex'
  third_ul.style.display = 'none'
}
i.onclick = () =>{
  search.style.display = 'none'
  third_ul.style.display = 'flex'
}
third_ul_l1.onmouseover = () => {
  third_ul_ul1.style.opacity = 1
  third_ul_ul1.style.transform = 'scaleY(1)';
}

third_ul_l1.onmouseleave = () => {
  third_ul_ul1.style.opacity = 0
  third_ul_ul1.style.transform = 'scaleY(0)';
}
third_ul_l3.onmouseover = () => {
  third_ul_ul3.style.opacity = 1
  third_ul_ul3.style.transform = 'scaleY(1)';
}

third_ul_l3.onmouseleave = () => {
  third_ul_ul3.style.opacity = 0
  third_ul_ul3.style.transform = 'scaleY(0)';
}


qr.onmouseover = () => {
  qr_ul.style.opacity = 1
  qr_ul.style.transform = 'scaleY(1)';
}

qr.onmouseleave = () => {
  qr_ul.style.opacity = 0
  qr_ul.style.transform = 'scaleY(0)';
}


let tab_buttons = document.querySelectorAll('.tab-button button')
for(let tabs of tab_buttons){
  tabs.onclick = () =>{
    let tbs = document.querySelector('.tab-buttons')
    tbs.classList.remove('tab-buttons')
    tabs.classList.add('tab-buttons')
     

    let id = tabs.id
    let div = document.querySelectorAll('.tab-menu-alls div')
     
    for(let divs of div){
      if(divs.id === id){
        divs.classList.add('d-none')
      }else{
        divs.classList.remove('d-none')
      }
    }
   }
}
let calc_buttons = document.querySelectorAll('.calc-button button')
for(let calcs of calc_buttons){
  calcs.onclick = () =>{
    let clcs = document.querySelector('.calc-buttons')
    clcs.classList.remove('calc-buttons')
    calcs.classList.add('calc-buttons')
  }
}
// calculator
let range1 = document.getElementById('range1')
let range2 = document.getElementById('range2')

range1.oninput = (e) => {
  document.querySelector('.inp .value1').innerHTML = e.target.value;
}
range2.oninput = (e) => {
  document.querySelector('.inp .value2').innerHTML = e.target.value;
}





function calculate() {
  let a = parseFloat(document.getElementById('range1').value)
  let b = parseFloat(document.getElementById('range2').value)
  let c = parseFloat(document.getElementById('range3').value)

  num=(a*c)/100
  num1=a+num;
  num3=(num1/b).toFixed(2)

  document.querySelector('.bank-show .bank-show-months').innerHTML = num3;
  document.querySelector('.bank-show .bank-show-alls').innerHTML = num1;
}
function update1() {
  document.querySelector('.inp .value1').innerHTML = document.getElementById('range1').value;
  calculate();
}

function update2() {
  document.querySelector('.inp .value2').innerHTML = document.getElementById("range2").value;
  calculate();
}

function update3() {
  document.querySelector('.inp .value').innerHTML = document.getElementById('range3').value;
  calculate();
}

document.querySelector('.inp').addEventListener("input", update1);
document.querySelector('.inp').addEventListener("input", update2);
document.querySelector('.inp').addEventListener("input", update3);