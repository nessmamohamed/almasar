import React from 'react'

import {register} from '../actions/user'

import {connect} from 'react-redux'

import Nav from './nav'

class AddUser extends React.Component{


    state= {}

    onChange=(e) => {


        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        this.setState({
            err: false,
            success: false
        })

        const {name, password, confirm_password} = this.state

        if(!name || !password || !confirm_password){
            this.setState({
                err: 'please enter all fields'
            })
        }else if( password !== confirm_password){
            this.setState({
                err: 'password is not equal'
            })
        }else{
            

            this.props.register({name, password})

            setTimeout(() => {
                if(!this.props.error.msg){
                    this.setState({
                        success: 'user added .. ', 
                        err: false
                    })
                }
            }, 1000);
        }
    }
    render(){
        return(
            <div>
                <Nav/>
                <div className='card shadow mx-auto text-center mt-5' style={{maxWidth: '500px'}}>
                       <div className='card-header bg-success text-light'> Add User</div>
                            
                       <div className='card-body'>

                       <div className="alert alert-danger" role="alert" style={{background: 'white', border: 'white'}}>
                    {this.state.err || this.props.error.msg.msg}
                   </div>

                   <div className="alert alert-success" role="alert" style={{background: 'white', border: 'white'}}>
                    {this.state.success ? this.state.success  : ''}
                   </div>


                       <form onSubmit = {this.onSubmit} style={{width: '80%', margin: '0 auto'}}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input onChange={this.onChange} type="name" name = 'name' class="form-control" id="exampleInputEmail1"  placeholder="Enter name"/>

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={this.onChange} name='password' type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input onChange={this.onChange} name='confirm_password' type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
  <button type="submit" class="btn btn-danger">Submit</button>
</form>
                       </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state) => ({
 error: state.error
})

export default connect(mapStateToProps, {register})(AddUser)