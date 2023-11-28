import React, { useState, useEffect } from 'react';
import data from './data'
import './Features.css'
function Features(){
    const[feat,setFeat]=useState(data)
   return(
    <div className="feature-section">
        {feat.map((feature,index)=>{
            const{icon,title,desc,id}=feature;
            
                <div className="feature" key={id}>
                    <img src={icon} alt="icon" />
                  <h2>{title}</h2>
                  <p>{desc}</p>

                </div>
            
        })}
        
    </div>
   )
}
export default Features