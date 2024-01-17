import { useState } from "react"

export default function Profile(){
    const [buttonText,setText]=useState("Edit profile")
    const[curs,setCursor]=useState();
    const [type,setType]=useState(true)
    const handleClick=()=>{
        if(buttonText==="Edit profile"){
            setText("Save")
        }
        else{setText("Edit profile")}
        if(curs==='pointer'){setCursor()}
        else{
        setCursor('pointer')
        }
        setType(!type)
    }
    
    return(
        <div className="flex" style={{backgroundImage:"url('https://img.freepik.com/premium-vector/vector-illustration-eps-10-skyscrapers-with-copy-space_554888-974.jpg?size=626&ext=jpg&ga=GA1.1.1255800410.1704448219&semt=ais')", justifyContent:'center'}}>
             

<div class=" w-full max-w-screen-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{marginTop:'40px', marginBottom:'40px'}}>
    <div class="flex justify-end px-4 pt-4">
        
        
    </div>
    <div class="flex flex-col items-center " style={{justifyContent:'center'}}>
        <img class="mb-3 rounded-full shadow-lg" src="https://www.course-api.com/images/people/person-1.jpeg" alt="Bonnie image" style={{width:'12rem', height:'12rem', margin:'15px'}}/>
        <h5 class="mb-1 text-2xl font-semibold text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
         
    </div>
   
<form class="max-w-md mx-auto">
  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{marginTop:'1.5rem'}}>Email</label>
   <input type="text" id="disabled-input" aria-label="disabled input" class="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{cursor:curs}}  defaultValue="bonnie@gmail.com" disabled={type}/>
  <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{marginTop:'1.5rem'}}>Mobile</label>
   <input type="text" id="disabled-input" aria-label="disabled input" class="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"  defaultValue="+91 98463 73362" disabled={type} style={{cursor:curs}} />
  <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{marginTop:'1.5rem'}}>Gender</label>
   <input type="text" id="disabled-input" aria-label="disabled input" class="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 "  defaultValue="Female" disabled={type} style={{cursor:curs}} />
  <div class="mb-5">
    <label for="adress" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adress</label>
    <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div  className="flex justify-center">
                <a onClick={handleClick} href="#" class="text-white block  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900" style={{width:'200px', marginBottom:'20px'}}>{buttonText}</a>
            </div>
</form>

</div>

        </div>
    )
}