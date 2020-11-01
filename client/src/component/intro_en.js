import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'

import Fade from 'react-reveal/Fade';


class intro_en extends React.Component{
    render(){
        return(
            <div className='ml-0 ml-sm-5 '  >
                
                <Fade >
                <h5> We thank you for participating in this survey </h5>
                <h5>Through which we aim to measure the extent of your satisfaction with our provided services and improve the quality of our services in the future</h5>
                
                <h5 className='mt-5'>This questionnaire takes only two minutes, and all answers and suggestions will be treated with complete confidentiality and will also be collected and analyzed by a consultant to ensure transparency and impartiality.</h5>
                </Fade>

                <div className='text-center mt-5'>
              <Fade top count= '1000'>
              <FontAwesomeIcon icon={faAngleDoubleDown} />
              </Fade>

               <div>
               <button className='btn btn-light mt-3 btn-lg px-5 shadow' style={{background: '#d62528', border: '#d62528'}} > 
               <a href='/quests/5f9a7830dc58e05a08d39e3d?id=5f9a7830dc58e05a08d39e3d' style={{color: 'white'}}>Start the questionnaire</a>
               </button>

               </div>

                </div>

            </div>
        )
    }
}


export default intro_en