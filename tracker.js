let tracker = () => {

    // let inc = document.getElementsByClassName('inc');
    // inc.addEventListener('click', ()=>{
    //   console.log('clicked');
    // });
    // console.log(inc);

    let min5 = document.getElementById('5-min');
    let counter = document.getElementById('counter');
    let i = 0;
    min5.addEventListener('click', ()=>{
      i += 5;
      counter.innerHTML = i;
    });
    console.log(min5);

};
document.addEventListener('DOMContentLoaded', tracker, false);

let addtime = () => {

    let min15 = document.getElementById('15-min');
    let counter = document.getElementById('counter');
    let counterInner = document.getElementById('counter').innerHTML;
    let counterNum = Number(counterInner);
    let i = counterNum;
    console.log(counterNum);
    min15.addEventListener('click', ()=>{
      i += 15;
      console.log()
      counter.innerHTML = i;
    });
    console.log(min15);

};
document.addEventListener('DOMContentLoaded', addtime, false);


let subtracttime = () => {

    let min15 = document.getElementById('minus-15-min');
    let counter = document.getElementById('counter');
    let i = 0;
    min15.addEventListener('click', ()=>{
      i -= 15;
      counter.innerHTML = i;
    });
    console.log(min15);

};
document.addEventListener('DOMContentLoaded', subtracttime, false);

let subtractfive = () => {

    let min5 = document.getElementById('minus-5-min');
    let counter = document.getElementById('counter');
    let i = 0;
    min5.addEventListener('click', ()=>{
      i -= 5;
      counter.innerHTML = i;
    });
    console.log(min5);

};
document.addEventListener('DOMContentLoaded', subtractfive, false);
