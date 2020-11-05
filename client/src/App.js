import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Dropdown } from 'react-bootstrap';


import back from './component/images/logo11.jpg'
import logo from './component/images/logo10.png'


import Intro from './component/intro'
import IntroEn from './component/intro_en'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faCopyright } from '@fortawesome/free-solid-svg-icons'

import {connect} from 'react-redux'


import icon from './component/images/m-icon.png'

import axios from 'axios'




class App extends React.Component {

  componentDidMount(){
    axios.get('https://api.ipify.org/?format=json%27')
        .then(res => {
          const ip = res.data

         setTimeout(() => {
           axios.post('/visitors',{ip})
         }, 1000);
        })
  }
  
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
 
      


        <div  style={{height:  '1050px' , position: 'relative', background: '#137d4d', width: 'auto'}}>
       
       
         <div className='div2 shadow' >
          
          
           <img alt='img' className='quiz' src={back}/>
         
          </div>


          <div className='div3' >
  <div className='text-center mb-4'>
    
  {localStorage.getItem('language') === 'en' ? (this.props.quest[0]?  <h4 id='h5'>{this.props.quest[0].title}</h4> : '' ): this.props.quest[0]?  <h4>{this.props.quest[0].title_ar}</h4> : ''}
  
  <div className= 'border-bottom text-center mx-auto ' style={{width: '80%', borderColor: '#dee2e685'}}></div>
  </div>
          {localStorage.getItem('language') === 'en' ? <IntroEn/> : <Intro/>}
          </div>

          <div>

            <div className='div4 shadow'></div>

            <img src={logo} width='150px' className='logo2'/>

            <div className='language'>
            <Dropdown  >
  <Dropdown.Toggle variant="success" id="dropdown-basic2" style={{background: 'none', border: 'none', color: 'red' }}>

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

const mapstatetoprops =( state ) => ({
  quest : state.quests.quests
})

export default connect(mapstatetoprops) (App);
