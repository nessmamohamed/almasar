import React from 'react'
import {connect} from 'react-redux'

import {login} from '../actions/user'

import logo from './images/logo10.png'



class Login extends React.Component{

    state = {}

    onChange= (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        this.setState({
            err: false
        })

        const {name, password} = this.state

        if(!name || !password){
            this.setState({
                err: 'please enter all fields'
            })
        }else{
            this.props.login({name, password})

            setTimeout(() => {
                if(this.props.auth.user){
                    window.location.href = '/dashboard'
                }
            }, 500);
        }
    }
    render(){
        return(
            <div>
                <div className='div7'>

                    <div className='di5 shadow'></div>

                    <div className='div6 shadow'></div>

                    <div className='card shadow text-center mx-auto' style={{maxWidth:'500px' , marginTop: '150px', minHeight: '650px'}}>
                        <div className='card-body'>
                           
                           <div>
                              <a href='/'>
                              <img src={logo} width='200'/>
                              </a>
                           </div>

                           <hr/>

                           <h5 className='mt-5 text-success border-bottom mx-auto' style={{width: 'fit-content'}}>Admins Login</h5>

                           <div className="alert alert-danger" role="alert" style={{background: 'white', border: 'white'}}>
                    {this.state.err || this.props.error.id === 'login failed' ? this.props.error.msg.msg: ''}
                   </div>

                           <div>
                           <form onSubmit = {this.onSubmit} style={{width: '80%', margin: '60px auto'}}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input onChange={this.onChange} type="name" name = 'name' class="form-control" id="exampleInputEmail1"  placeholder="Enter name"/>

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={this.onChange} name='password' type="password" class="form-control mb-5" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  
  <button type="submit" class="btn btn-danger px-5 shadow">Login</button>
</form>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToprops = (state) => ({
    auth: state.auth,
    error: state.error
})


export default connect(mapStateToprops, {login})(Login)