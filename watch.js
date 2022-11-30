function showTime(){

let date =new Date();
let hour =date.getHours();
let min =date.getMinutes();
let sec = date.getSeconds();

if (min<10)min='0'+min;
else{min=min}; 

if (sec<10)sec='0'+sec;
else{sec=sec}; 

let time= hour+':'+min+':'+sec;

document.getElementById("MyClock").innerText = time;
document.getElementById("MyClock").textContent = time;


setTimeout(showTime,1000);
};

showTime();

 function showDate(){
    let date =new Date();
    let day= date.getDate();
let month=date.getMonth()+1;
let year=date.getFullYear();

let cal = day+'/'+month+'/'+year;

document.getElementById("MyDate").innerText = cal;
document.getElementById("MyDate").textContent = cal;
};

showDate();