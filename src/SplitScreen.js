import React from 'react'
import "./SplitScreen.css"
import Navbar from "./components/Navbar"

export default function SplitScreen() {
  return (
    <div>
        <Navbar />
      <div className="split-screen-container">
    
          <div className="left-side">
            <img src="logo1.png" alt="logo" />
            <p>تسجيل الدخول إلى حسابك</p>
            <div className="cover">
           
            <div className="input-container">
            
           
            <input  className="bod1" type="text" placeholder="*البريد الإلكتروني"  />
           
            </div>

            <div className="input-container">
            
            <input  className="bod"type="password" placeholder="*كلمة المرور"/>
         
            </div>
            <div className="box">
            <div className="box1">
           <input class="jss18" name="remember_me" type="checkbox" data-indeterminate="false" value=""></input>
            <p className="text">تذكرتي</p>
           
            </div>
           
           <a className="login-btn" href="https://www.google.com/search?q=mytek&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQ45MTI3MTA5NjhqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8">نسيت كلمة المرور؟</a>
           
            </div>
            <div className="alt-login" >
              

              <div className="confirmer"  >
                
               
           
            <a className='ce' href="Page2">تسجيل الدخول</a>



              </div>
              
            </div>
          </div>
          </div>
          
          <div className="right-side">
         
            <img src="logo2.png" alt="logo" />
            

        </div>

          </div>
      
    </div>
  )
}