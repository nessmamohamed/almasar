import React, {Fragment} from 'react'

import Fade from 'react-reveal/Fade';

import logo from './images/logo10.png'

import { Dropdown } from 'react-bootstrap';

import {connect} from 'react-redux'

import Translate from 'react-translate-component';

import {logout} from '../actions/user'


class Nav extends React.Component{

    state = { 
        menu:  false
    }

    toggleMenu =() =>{
        this.setState({
            menu: !this.state.menu
        })
    }

    onClicklang = (e) => {
        localStorage.setItem('language', e.target.name)
   
        setTimeout(() => {
          window.location.reload()
        }, 500);
     }

     onLogout = () => {
      this.props.logout()
   
      setTimeout(() => {
         window.location.href= '/admin'
      }, 200);
    }
   

    render(){

        const show = (this.state.menu) ? "show" : "" ;


        return(
            <div>
                 <nav className='navbar  navbar-expand-lg navbar-light px-2 shadow py-0' 
          style={{ background:'white', zIndex: '1'}}
          id ={this.state.menu ? "navbar" : ''}  >
          
           <Fade left>
           <a className="navbar-brand " href="/" >
                  <img src={logo} width='150'/>
                  </a>
           </Fade>
           
          
          
          <button className="navbar-toggler"  type="button" onClick={ this.toggleMenu }>
         <span className="navbar-toggler-icon" ></span>
       </button>
       <div className={"collapse navbar-collapse " + show} id="navbarNav">

        
          
                  
        

       <ul className="navbar-nav ml-5 d-flex py-3 py-md-0" style={{width: '100%', fontSize: '17px', justifyContent: 'flex-end'}}>
    
    


  {
    this.props.auth.user ? 

    

   <Fragment className='d-flex'>
     <li className='navbar-item my-auto py-3'>
                       <a className='nabar-link mr-3' href='/Dashboard' style={{color: '#dc3545'}}>
                           Dashboard
                       </a>
        </li>

      <li className='navbar-item my-auto py-3 text-success'>
    Welcome {this.props.auth.user.name}
</li>

    <li className='navbar-item my-auto py-3'>
          <button className='nabar-link mx-3 btn btn-light' onClick={this.onLogout}  style={{color: '#dc3545', background: 'none', border: 'none'}}>
                          logout
                       </button>
    </li>
   </Fragment>
    : ''
  }

  



       <li className='navbar-item mr-5 py-3' style={{listStyle:'none'}}>
                   <Dropdown  >
  <Dropdown.Toggle variant="success" id="dropdown-basic2" style={{background: 'none', border: 'none', color: '#dc3545' }}>

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
                   </li>

             
      
     
    </ul>

    
      
  </div>
  </nav>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})
export default connect(mapStateToProps, {logout})(Nav)