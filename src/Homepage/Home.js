import Rent from "/Users/keshavdhanuka01/Desktop/myapp/src/Homepage/Frontend/Components/Feature.js";
import Features2 from "/Users/keshavdhanuka01/Desktop/myapp/src/Homepage/Frontend/Components/Features2.js";
import Landlord from "/Users/keshavdhanuka01/Desktop/myapp/src/Homepage/Frontend/Components/LandlordFeatures.js";
import Name from "/Users/keshavdhanuka01/Desktop/myapp/src/Homepage/Frontend/Components/Name.js";
import Properties from "/Users/keshavdhanuka01/Desktop/myapp/src/Homepage/Frontend/Components/Properties/Properties.js";
import Reviews from "/Users/keshavdhanuka01/Desktop/myapp/src/Homepage/Frontend/Components/Revies/Reviews.js";
import Search from "/Users/keshavdhanuka01/Desktop/myapp/src/Homepage/Frontend/Components/Search.js";
import image from '/Users/keshavdhanuka01/Desktop/myapp/src/istockphoto-1192403701-170667a.webp'
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