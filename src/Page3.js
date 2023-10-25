import React from "react" ;
import './Page3.css'
import Aside from "./components/Aside";
import Aside2 from "./components/Aside2";
import QRCode from 'qrcode.react';
import Codeqr from"./components/Codeqr";
import  { useState, useEffect } from "react";



 function Page3() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem('formData');

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
    }
  }, []);
const [formData2, setFormData2] = useState(null);

useEffect(() => {
  const storedData = sessionStorage.getItem('formData2');

  if (storedData) {
    const parsedData = JSON.parse(storedData);
    setFormData2(parsedData);
    }
  }, []);
  
    return(
     
        <div className="ticket">
                 <Aside formData={formData}></Aside>
             <Aside2 formData2={formData2}></Aside2>
             <Codeqr></Codeqr>
           
           
      
          
    
    </div>

    );
}
export default Page3;