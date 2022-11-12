
function navbar () {
   return `
   <div id="left-section">
   <div><a href="../index.html"> <img src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2" alt=""></a></div>
   <div class="dropdown"><button class="dropbtn" onclick="myFunction()">More Travel<i class="fa-solid fa-chevron-down"></i></button>
       <div class="dropdown-content"  id="myDropdown">
            <a href=""><i class="fa-solid fa-building"></i>Stays</a>
            <a href=""><i class="fa-solid fa-plane-departure"></i>Flights</a>
            <a href=""><i class="fa-solid fa-car"></i>Cars</a>
            <a href=""><i class="fa-solid fa-suitcase-rolling"></i>Packages</a>
            <a href=""><i class="fa-solid fa-list-check"></i>Things to do</a>
            <a href=""><i class="fa-solid fa-ship"></i>Cruises</a>
            <a href="">Deals</a>
            <a href="">Groups & meetings</a>
       </div>
   </div>
</div>

<div id="right-section">
   <div><a href="#"><i class="fa-solid fa-globe"></i>English</a></div>
   <div><a href="#">List your property</a></div>
   <div><a href="#">Support</a></div>
   <div><a href="./trips/trip.html">Trips</a></div>
   <div><a href="./SignIn/signin.html"><i class="fa-solid fa-bell"></i></a></div>
   <div class="sign_dropdown"><button class="sign_dropbtn" onclick="signinFunction()">Sign in</button>
         <div class="sign_dropdown-content" id="myDropdown_sign">
              <div><img src="https://a.travel-assets.com/pricing-claim/sparkle_white.svg" ></div>
              <p>Save an average of 15% on <br> thousands of hotels when you're <br> signed in</p>
              <a href="./SignIn/signin.html"><button>Sign in</button></a>
              <h2>Sign up,it's free</h2>
              <p class="para">List of Favourites</p>
              <p class="para">goEXO Rewards</p>
              <hr class="line">
              <p class="para">Feedback</p>
         </div>
   </div> 
</div>
`
}
export default navbar;




    






