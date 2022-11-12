let popup=document.getElementById("popUP");


function booking(){
  popup.classList.add("open-popup")
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function CLOSE(){
  popup.classList.remove("open-popup")
}