import logo from './logo.svg';
import './App.css';
import React from 'react';


import TitleWithIcon from './TitleWithIcon';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SplitScreen from './SplitScreen';
import Page2 from "./Page2";
import Page3 from "./Page3"
//import Login from './Login';


function App() {
 return (
 <div className="App">
  

<TitleWithIcon>

</TitleWithIcon>

<BrowserRouter>
        <Routes>
          <Route path="/" element={<SplitScreen />}></Route>
          <Route path="/Page2" element={< Page2/>}></Route>
          <Route path="/Page3" element={< Page3/>}></Route>
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
