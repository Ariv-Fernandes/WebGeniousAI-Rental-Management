import Rent from "./Frontend/Components/Feature.js";
import Features2 from "./Frontend/Components/Features2.js";
import Landlord from "./Frontend/Components/LandlordFeatures.js";
import Name from "./Frontend/Components/Name.js";
import Properties from "./Frontend/Components/Properties/Properties.js";
import Reviews from "./Frontend/Components/Revies/Reviews.js";
import Search from "./Frontend/Components/Search.js";
import image from '../../istockphoto-1192403701-170667a.webp'

const Homepage=()=>{
  
  return(
    

    

<div>
    
      {/* <Navbar/> */}
      <div className="bg-cover bg-center py-10"  style={{ backgroundImage: `url(${image})` }}>
      <Name/>
     <Search/>
     </div>
     
     <Properties/>
     <Landlord/>
     <Features2/>
     <Rent/>
     <Reviews/>
     {/* <Footer/> */}

      
</div>


  )
}

export default Homepage