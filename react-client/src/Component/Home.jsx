// // import  Logo from './Snake_images/menu2.jpg'
// const Home = () => {
//   return (
//     <main>
//       {/* <div> */}
//     <header>
//         <nav>
//             <div className="img">
//                     <img src={Logo} alt="" />
//              </div>
//             <div>
//                 <h2>snake restaurant</h2>
//                 <p>Restaurant Quality Fast Food</p>
//             </div>
//         </nav>
//     </header>
//     <section>
//         <div class="container">
//             <div class="firstText">
//                 <p>Welcome to snake restaurant!</p>
//                 <p>How may I help you?</p>
//             </div>
    
//             <div class="main">
//                 <div class="box">
//                     <div class="text">
//                         <p>Discover our new delicious menu. Now open 11pm to 4am every day</p>
//                     </div>
//                     <div class="btn">
//                         <a href="/images/femi'CV2_pic.pdf"><button>Download Menu</button></a>
//                     </div>
                    
//                 </div>
//             </div>
//         </div>
//     </section>
//     <div class="section1">
//         <div class="about">
//             <p>About Snake Restaurant</p>
//             <p>Snake Restaurant was opened in 2016 and founded by the famous Snake himself. With the help of an investment from Aya, Snake Restaurant has established itself as one of the go to places for late night eating and snacks. Snake Restaurant combines the delicous fast food style in a restaurant environment.</p>
//         </div>

//         <div class="productBox">
//             <p>Below are some items from our famous menu:</p>
//             <div class="wrap">
//                 <div class="boxImage">
//                     <div class="imgPro">
//                         {/* <img src="images/burger1.jpg" alt=""/> */}
//                     </div>
//                     <div class="textPro">
//                         <h4>Bendyman Burger</h4>
//                         <p>A delicous cheese burger with no pickle or onions. The stores best seller!</p>
//                     </div>
//                 </div>
                
//                 <div class="boxImage">
//                     <div class="imgPro">
//                         {/* <img src="images/fries1.jpg" alt=""/> */}
//                     </div>
//                     <div class="textPro">
//                         <h4>Fred Fries</h4>
//                         <p>Clasisc french fries crafted from the famous Fred chef. Covered in our famous salt.</p>
//                     </div>
//                 </div>
//                 <div class="boxImage">
//                     <div class="imgPro">
//                         {/* <img src="images/soda1.jpg" alt=""/> */}
//                     </div>
//                     <div class="textPro">
//                         <h4>Snake Soda</h4>
//                         <p>Thirsty? Why not have a snake soda! Snake soda is the best way to refresh your body.</p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     </div>


//     <div class="section2">
//         <div class="box_img">
//             {/* <img src="images/img01.jpg" alt=""/> */}
//         </div>

//         <div class="box">
//             <h2>Meal of the week!</h2>
//             <h4>Truck Loaded Fries</h4>
//             <p>Our latest and greatest Truck Loaded Fries combines the delicious taste of thick french fries with tomato sauce and cheese. This product comes in a square box and serves up to two people. For a limited time we will also be delivering your loaded fries via Truck himself!</p>
//         </div>
//     </div>

//     <div class="section3">
//         <div class="box">
//             <div class="boxP">
//                 <p>"Snake Restaurant has a delicous range of cat biscuits and people's feet to swipe. I<br/> would highly recommend Snake Restaurant to anyone.</p>
//             </div>
//             <div class="imgBox">
//                 {/* <img src="images/img02.jpg" alt=""/> */}
//                 <h5>Aya Feliar</h5>
//                 <p>Valued customer and investor.</p>
//             </div>
//         </div>
//     </div>

//     <footer>
//         <p>© 2024. Snake Restaurant. All Rights Reserved.</p>
//     </footer>
//   {/* <div/> */}
//     </main>
//   )
//   }


// import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Welcome to Joyvinco please Sign In <Link to={'signup'}>Sign Up</Link></h1> 
    </div>
  )
}

export default Home