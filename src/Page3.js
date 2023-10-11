import React from "react" ;
import './Page3.css'
import Aside from "./components/Aside";
import Aside2 from "./components/Aside2";
import QRCode from 'qrcode.react';
import Codeqr from"./components/Codeqr";


 function Page3() {
    return(
     
        <div className="ticket">
                 <Aside></Aside>
             <Aside2 ></Aside2>
             <Codeqr></Codeqr>
           
           
      
          
    
    </div>

    );
}
export default Page3;