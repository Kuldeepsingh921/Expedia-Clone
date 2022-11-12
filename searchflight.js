
const searching=()=>{
    let leave=document.getElementById("leave1").value;
    let arrive=document.getElementById("arrive1").value;
    let date=document.getElementById("date1").value;
localStorage.setItem("leave", JSON.stringify(leave));
localStorage.setItem("arrive",JSON.stringify(arrive));
localStorage.setItem("date",JSON.stringify(date));

window.location.href="flight2.html";
}

document.getElementById("btn").addEventListener("click",searching)

// if(leave && arrive && date){
// document.getElementById("btn").addEventListener("click",searching)
// }
// else{
//     alert("Please fill all details")
// }