import React from 'react'


import Fade from 'react-reveal/Fade'

import Nav from './nav'

import Translate from 'react-translate-component';

import {connect} from 'react-redux'


class quests extends React.Component{

    state={
        form : false
    }

  

    onClickSign = (id, e) => {
         e.preventDefault()
        window.location.href= `/quests/${id}?id=${id}`
    }

  

    
    render(){


      
        
        return(
            <div>
                <Nav/>

                <div className = 'text-center mx-auto my-4' style={{maxWidth: '500px'}}>
                   

                     <div>


                         {this.props.quests.quests.map((quest, key= 0) => (
                             <div key = {key++}>

                           <Fade>
                           <div className='card shadow mt-4 questcard'>
                                  <div className='card-body'>
                         <h6>
                             {localStorage.getItem('language') === 'en' ? quest.title : quest.title_ar}
                         </h6>

                        

                         <button onClick = {this.onClickSign.bind(this, quest._id )} className = 'btn btn-light mb-3 text-success mt-3'> 
                         <Translate content='sandq'/></button>

                        

                                  </div>
                              </div>
                           </Fade>
                             </div>
                         ))}
                     </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    quests: state.quests
})

export default connect(mapStateToProps)(quests)