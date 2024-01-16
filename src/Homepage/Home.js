import Rent from './Frontend/Components/Feature.js';
import Features2 from './Frontend/Components/Features2.js';
import Landlord from './Frontend/Components/LandlordFeatures.js';
import Name from './Frontend/Components/Name.js';
import Properties from './Frontend/Components/Properties/Properties.js';
import Reviews from './Frontend/Components/Revies/Reviews.js';
import Search from './Frontend/Components/Search.js';
import image from './../istockphoto-1192403701-170667a.webp';
export default function (){
  
  return(
    
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css"  rel="stylesheet" />
    

    <body>
      
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

      

<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>

    </body>
    </html>

  )
}