import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Dropdown } from 'react-bootstrap';


import back from './component/images/back-m.jpeg'



import Intro from './component/intro'
import IntroEn from './component/intro_en'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faCopyright } from '@fortawesome/free-solid-svg-icons'


import icon from './component/images/m-icon.png'




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
          
          
           <img alt='img' className='quiz' src={back}/>
         
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

          <div className='footer'>
            <p>All copyrights reserved 2020 
            <FontAwesomeIcon icon={faCopyright} className='my-auto mx-2 ' color='black' style={{fontSize: '14px'}}/>

            <a href='https://twitter.com/ConsultingMsar'>
            <img src="https://img.icons8.com/fluent/48/000000/twitter.png" width='30' className='mr-2'/>
            </a>
                         <img src={icon} width='80'/>

            </p>
          </div>
         
        </div>

    </div>
  );
 }
}

export default App;
