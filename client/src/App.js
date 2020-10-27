import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Dropdown } from 'react-bootstrap';


import quiz from './component/images/quiz3.jpg'


import Fade from 'react-reveal/Fade';

import Intro from './component/intro'
import IntroEn from './component/intro_en'




class App extends React.Component {
  
  state={}

  onClicklang = (e) => {
     localStorage.setItem('language', e.target.name)

     setTimeout(() => {
       window.location.reload()
     }, 500);
  }


 render(){
  return (
    <div className="App" >
 
      


        <div className='div1'>
       
       
         <div className='div2 shadow' >
          
           <Fade left>
           <img alt='img' className='quiz' src={quiz}/>
           </Fade>
          </div>


          <div className='div3' >
          {localStorage.getItem('language') === 'en' ? <IntroEn/> : <Intro/>}
          </div>

          <div>

            <div className='div4 shadow'></div>

            <div className='language'>
            <Dropdown  >
  <Dropdown.Toggle variant="success" id="dropdown-basic2" style={{background: 'none', border: 'none', }}>

     {localStorage.getItem('language') === 'en' ? 'English' : "العربية"}
      </Dropdown.Toggle>

  <Dropdown.Menu className='text-center'>
    
    <Dropdown.Item onClick={this.onClicklang} name='ar' >
    العربية
      </Dropdown.Item>
    <Dropdown.Item onClick={this.onClicklang} name='en'>
     الانجليزية
    </Dropdown.Item>
   
  </Dropdown.Menu >

</Dropdown>
            </div>

          </div>
         
        </div>

    </div>
  );
 }
}

export default App;
