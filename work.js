



let username=prompt("Lütfen adınızı ve soyadınızı giriniz.")

let bilgi=document.querySelector("#name")

bilgi.innerHTML=`Merhaba, ${username}! Hoş geldin!`


let current= new Date()

const weekday = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
let day = weekday[current.getDay()-1]


let localtime=current.toLocaleTimeString()

let zaman=document.querySelector("#date")

zaman.innerHTML=`${localtime}  ${day}  `