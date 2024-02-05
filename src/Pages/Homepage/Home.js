import Rent from '../../components/Feature.js';
import Features2 from '../../components/Features2.js';
import Landlord from '../../components/LandlordFeatures.js';
import Name from '../../components/Name.js';
import Properties from '../../components/Properties/Properties.js';
import Reviews from '../../components/Revies/Reviews.js';
import Search from '../../components/Search.js';
import image from '../../asssets/istockphoto-1192403701-612x612.jpg';
import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';
export default function (){
  
  return(
    
    
    
  
    

    <div>
    
    
  <div className="bg-cover bg-center py-10"  style={{ backgroundImage: `url(${image})`, backgroundSize:'cover',backgroundRepeat: 'no-repeat'}}>
      <Name/>
     <Search/>
     </div>
     
     <Properties/>
     <Landlord/>
     <Features2/>
     <Rent/>
     <Reviews/>
  
    </div>
      
       

      



  )
}