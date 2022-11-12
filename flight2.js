//AIzaSyB_YU2jP321JEK5WYmDtnJiabPWnJdZvK4
//https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY
//window.onload = my_code();
let leaving = JSON.parse(localStorage.getItem("leave"));
let arriving = JSON.parse(localStorage.getItem("arrive"));
let dating = JSON.parse(localStorage.getItem("date"));

document.getElementById("leavefrom").value = leaving; 
document.getElementById("goingto").value = arriving;
document.getElementById("dateq").value = dating;

 let x=document.querySelectorAll(".change1")
 x.forEach(function(el){
    el.innerText = leaving;
 }) 

 let y=document.querySelectorAll(".change2")
 y.forEach(function(el){
    el.innerText = arriving;
 }) 
// document.getElementsByClassName("change2").innerText = arriving;


document.querySelectorAll(".money").forEach((el)=>{addEventListener("click",openNav)});

document.querySelector("#closebtn").addEventListener("click",function() {
   document.querySelector(".sidebar").style.width = "0px";
   document.getElementById("sidehead").innerHTML= leaving+" to "+ arriving;
  //console.log("blue")
})

function openNav() {
 
   document.querySelector(".sidebar").style.width = "450px";
   document.getElementById("sidehead").innerHTML= leaving+" to "+ arriving;

   document.querySelector("#closebtn").addEventListener("click",function() {
      document.querySelector(".sidebar").style.width = "0px";
      document.getElementById("sidehead").innerHTML= leaving+" to "+ arriving;
    // console.log("blue")
   })
 }
 
 
