function carSearch(){
    let pickup=document.getElementById("pickup").value
    let drop=document.getElementById("drop").value
    let PDate=document.getElementById("Pdate").value
    let DDate=document.getElementById("Ddate").value
    let PTime=document.getElementById("Ptime").value
    let DTime=document.getElementById("Dtime").value

    if (pickup,drop,PDate,DDate,PTime,DTime!==""){
        window.location.href="carsListPage.html"
    }
    else if (pickup,drop,PDate,DDate,PTime,DTime===""){
        alert("please fill all the details")
    }
}