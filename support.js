document.getElementById("button").addEventListener("click",function(){
    document.querySelector(".popup").style.display ="flex"
})

document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none"
})

document.getElementById("send").addEventListener("click",function(){
    
    
    var heading = document.createElement("p");
    heading.id = "crestTitle";
    
    
    element = document.getElementById("mobnum");
    heading.innerText="  ✓  Thank you! A text with the download link has been sent to your   6295750823   mobile device";
    element.appendChild(heading);

})