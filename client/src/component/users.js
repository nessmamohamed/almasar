import React from 'react'

import axios from 'axios'

import Nav from './nav'


class Users extends React.Component{

    componentDidMount(){
        this.getusers()
    }

    state={
        users: []
    }

    getusers =() =>{
      axios.get('/usersAll' )
      .then(res => {
          this.setState({
              users: res.data.users
          })

      })
    }

    deleteuser = (id, e) =>{
        
   

        axios.post('/userdel', {id})
        .then(res=>{
            this.setState({
                users: res.data.users
            })
        })
       
         
    }
    render(){
        return(
            <div>

                <Nav/>


               <div className='mt-5'>
                   <div className='card-header bg-success text-light text-center mx-auto' style={{width: '500px'}}>users</div>
                    {this.state.users.map(user => (
                        <div className='card mx-auto text-center shadow' style={{width: '500px'}}>
                          <div className='card-body' >
                    <div className='d-flex'>
                    <h6>{user.name}</h6>

                    {!user.admin ? 
                    <button  onClick={this.deleteuser.bind(this, user._id)} className='btn btn-sm btn-danger ml-auto'>delete user</button>
                    :''}
                    </div>
                          </div>
                        </div>
                    ))}
               </div>
            </div>
        )
    }
}


export default (Users)