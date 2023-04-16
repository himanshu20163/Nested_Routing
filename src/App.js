import './App.css';
import Home from './Components/Home';
import {Routes,Route, Navigate} from 'react-router-dom'
import Products from './Components/Products';
import Add_To_Cart from './Components/Add_to_cart';
import { useState } from 'react';
import Technologies from './Components/Technologies';
import Html from './Components/Html';
import Css from './Components/Css';
import Javas from './Components/Javas';
import Reactss from './Components/Reactss';
import Login from './Components/Login';


function App() {
  const [carddata, setcarddata] = useState([])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products carddata={carddata} setcarddata={setcarddata}/>}/>
        <Route path='/addtocart' element={<Add_To_Cart carddata={carddata} setcarddata={setcarddata}/>}/>
        <Route path='/technologies' element={<Technologies/>}>
        <Route path='' element={<Navigate to="html"/>}/>
        <Route path='html' element={<Html/>}/>
        <Route path='css' element={<Css/>}/>
        <Route path='js' element={<Javas/>}/>
        <Route path='react' element={<Reactss/>}/>
        </Route>
       
      </Routes>
     
    </div>
  );
}

export default App;


