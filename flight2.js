//AIzaSyB_YU2jP321JEK5WYmDtnJiabPWnJdZvK4
//https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY

document.getElementById("dishur").onclick=function(){
   document.getElementById("hurray").innerHTML="Hurray! Your Ticket is booked";

}

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



document.querySelectorAll(".money").forEach((el,index)=>{el.addEventListener("click",openNav)
});

document.querySelector("#closebtn").addEventListener("click",closing)
document.querySelector("#closebtn").style.display="none";
function closing() {
   document.querySelector(".sidebar").style.display = "none";
   document.getElementById("sidehead").innerHTML= "";
   location.reload();
  //console.log("blue")
}

function openNav() {
   document.querySelector("#closebtn").style.display="block";
   document.querySelector(".sidebar").style.width = "450px";
   document.getElementById("sidehead").innerHTML= leaving+" to "+ arriving;

   // document.querySelector("#closebtn").addEventListener("click",function() {
   //    document.querySelector(".sidebar").style.width = "0px";
   //    document.getElementById("sidehead").innerHTML= leaving+" to "+ arriving;
   //  // console.log("blue")
   // })
 }
 
 
