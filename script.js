let hrs = document.querySelector(".hrs h1");
let min = document.querySelector(".min h1");
let sec = document.querySelector(".sec h1");


setInterval(()=>{
    let time = new Date();
    hrs.innerHTML = (time.getHours()<10?"0":"") + time.getHours();
    min.innerHTML = (time.getMinutes()<10?"0":"") + time.getMinutes();
    sec.innerHTML = (time.getSeconds()<10?"0":"") + time.getSeconds();
},1000);