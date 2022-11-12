

let hotelArr=[
    {img:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/5000000/4300000/4292600/4292527/d89fc908_b.jpg",
    name:"Aloft London Excel",
    distance:"1.08 Km from London City(LCY)",
    famous:"Modern hotel in East London",
    facilities:"24 hours fitness,indoor pool sauna,located near canary whalf,The O2 Arean London City Airport and the Excel Center.",
    rating:"4.5/5",
    span:"Good (1100 reviews)",
    price:10767,
},
{img:"https://images.trvl-media.com/hotels/55000000/54800000/54792600/54792524/50d10753.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name:"Holiday in Express London",
    distance:"1.08 Km from London City(LCY)",
    famous:"Modern hotel in East London",
    facilities:"Fully Refundable",
    rating:"3.4/5",
    span:"Good (800 reviews)",
    price:9707,
},
{img:"https://images.trvl-media.com/hotels/10000000/9020000/9010800/9010783/9d0a77d0.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name:"Courtyard by Marriot London City Airport",
    distance:"0.06 Km from London City(LCY)",
    famous:"Modern hotel in East London",
    facilities:"24 hours fitness,indoor pool sauna,located near canary whalf,The O2 Arean London City Airport and the Excel Center.",
    rating:"4.0/5",
    span:"Very good (500 reviews)",
    price:11067,
},
{img:"https://images.trvl-media.com/hotels/30000000/29290000/29280700/29280683/7890d6d8.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name:"London City Airport Hotel",
    distance:"0.08 Km from London City(LCY)",
    famous:"Modern hotel in East London",
    facilities:"Fully Refundable",
    rating:"4.7/5",
    span:"Excellent (300 reviews)",
    price:12747,
},
{img:"https://images.trvl-media.com/hotels/18000000/17320000/17310300/17310213/e3e9b06c.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name:"Hapmton by Hilton London Docklands",
    distance:"0.77 Km form London City(LCY)",
    famous:"Modern hotel in East London",
    facilities:"Fully Furnished",
    rating:"3.5/5",
    span:"Good (1100 reviews)",
    price:10767,
},
{img:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/5000000/4300000/4292600/4292527/d89fc908_b.jpg",
    name:"Aloft London Excel",
    distance:"1.08 Km from London City(LCY)",
    famous:"Modern hotel in East London",
    facilities:"24 hours fitness,indoor pool sauna,located near canary whalf,The O2 Arean London City Airport and the Excel Center.",
    rating:"4.5/5",
    span:"Good (1000 reviews)",
    price:13007,
},
{img:"https://images.trvl-media.com/hotels/17000000/16760000/16755800/16755707/31ef2dd1.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name:"Moxy London Excel",
    distance:"0.72 Km form London City(LCY)",
    famous:"Modern hotel in East London",
    facilities:"Fully Refundable",
    rating:"4.0/5",
    span:"Good (500 reviews)",
    price:7767,
},
{img:"https://images.trvl-media.com/hotels/2000000/1320000/1311400/1311387/5ed202fc.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name:"Travelodge London City Airport",
    distance:"0.08 Km form London City(LCY)",
    famous:"Modern hotel in East London",
    facilities:"Parking available",
    rating:"4.3/5",
    span:"Very good (200 reviews)",
    price:8767,
},
{img:"https://images.trvl-media.com/hotels/6000000/5280000/5275200/5275153/25cdc6c6.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name:"Fox Cannaught",
    distance:"0.08 Km form London City(LCY)",
    famous:"Modern hotel in East London",
    facilities:"Fully refundable",
    rating:"4.5/5",
    span:"Excellent (900 reviews)",
    price:7767,
},
{img:"https://images.trvl-media.com/hotels/17000000/16310000/16300700/16300604/85ea2f85.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name:"Good Hotel London",
    distance:"2.08 Km form London City(LCY)",
    famous:"Modern hotel in East London",
    facilities:"Fully furnished",
    rating:"3.4/5",
    span:"Good (1000 reviews)",
    price:6767,
},
{img:"https://images.trvl-media.com/hotels/1000000/1000000/992700/992650/f3caa114.jpg?impolicy=resizecrop&rw=455&ra=fit",
    name:"NoveTel London ExCel",
    distance:"1.88 Km from London City(LCY)",
    famous:"Modern hotel in East London",
    facilities:"Parking available",
    rating:"4.0/5",
    span:"Good (700 reviews)",
    price:9767,
},
   ] || []
   


   const append=(hotelArr)=>{
    let container=document.getElementById("rooms")
    container.innerHTML=null;
    hotelArr.forEach((el)=>{
       
        let hotels=document.createElement("div")
        hotels.setAttribute("class","hotels")

        let image=document.createElement("div")
        image.setAttribute("class","image")

        let img=document.createElement("img")
        img.src=el.img;
        image.append(img)

        let details=document.createElement("div")
        details.setAttribute("class","details")

        let name=document.createElement("h2")
        name.innerText=el.name;

        let distance=document.createElement("p")
        distance.innerText=el.distance;

        let famous=document.createElement("h5")
        famous.innerText=el.famous

        let popup=document.createElement("div")
        popup.setAttribute("id","popup")
        let div1=document.createElement("div")
        let facilities=document.createElement("p")
        facilities.innerText=el.facilities;
        div1.append(facilities)
        
        popup.append(div1)
        
        let rating_div=document.createElement("div")
        rating_div.setAttribute("class","ratings")
     
        let rating=document.createElement("h5")
        rating.innerText=el.rating;


        let span=document.createElement("span")
        span.innerText=el.span;
        rating_div.append(rating,span)

        let price=document.createElement("h2")
        price.innerText=`Rs. ${el.price}`;
        let price_div=document.createElement("div")
        price_div.setAttribute("id","price_div")
        price_div.append(rating_div,price)
        

        let btn=document.createElement("button")
        btn.innerText="Book Now";
        btn.setAttribute("class","book")
        btn.addEventListener("click",()=>{
            bookFun(el)
        })
        
        details.append(name,distance,famous,popup,price_div,btn)
        hotels.append(image,details)
        rooms.append(hotels)
        // container.append(rooms)

    })
   }
   append(hotelArr)
   
const bookFun=()=>{
    alert("Your booking successfull!")
}


 let btw4To8=document.getElementById("btw4To8")
        btw4To8.addEventListener("click",()=>{
            filter1()
        })
       
const filter1=()=>{
    let result=hotelArr.filter(function(el){
        if(el.price>=4000 && el.price<=8000){
            return el.price;
        }
        
  })     
  console.log(result)
  append(result)
}        

let btw8To11=document.getElementById("btw8To11")
        btw8To11.addEventListener("click",()=>{
            filter2()
        })
       
const filter2=()=>{
    let result=hotelArr.filter(function(el){
        if(el.price>=8000 && el.price<=11000){
            return el.price;
        }
        
  })     
  console.log(result)
  append(result)
}        

let greaterThan11=document.getElementById("greaterThan11")
greaterThan11.addEventListener("click",()=>{
            filter3()
        })
       
const filter3=()=>{
    let result=hotelArr.filter(function(el){
        if(el.price>=11000){
            return el.price;
        }
        
  })     
  console.log(result)
  append(result)
}        

let LTH=document.getElementById("LTH")
LTH.onclick=()=>{
    let res=hotelArr.sort(function(a,b){
      return a.price-b.price;
    })
    console.log(res)
    append(res)
}

let HTL=document.getElementById("HTL")
HTL.onclick=()=>{
    let res=hotelArr.sort(function(a,b){
      return b.price-a.price;
    })
    console.log(res)
    append(res)
}