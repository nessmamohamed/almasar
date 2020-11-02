import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'

import Fade from 'react-reveal/Fade';


class intro extends React.Component{
    render(){
        return(
            <div className='mx-auto text-right mt-5' dir="rtl" >
                
                <Fade >
                <h5> نشكركم علي المشاركة في هذا الاستبيان </h5>
                <h5> و الذي نهدف من خلاله الي قياس مدى رضاكم عن خدماتنا المقدمة و تحسين جودة خدماتنا مستقبلا </h5>
                
                <h5 >يستغرق هذا الاستبيان دقيقتين فقط و ستعامل جميع الأجوبة و الأقتراحات بسرية تامة كما سيتم جمعها و تحليلها بواسطة جهة استشارية لضمان الشفافية و الحيادية</h5>
                </Fade>

                <div className='text-center mt-5'>
              <Fade top count= '1000'>
              <FontAwesomeIcon icon={faAngleDoubleDown} />
              </Fade>

               <div>
               <button className='btn btn-light mt-3 btn-lg px-5 shadow questButton' style={{background: '#d62528', border: '#d62528'}}> 
               <a href='quests/5f9a7830dc58e05a08d39e3d?id=5f9a7830dc58e05a08d39e3d' style={{color: 'white'}}>بدء الاستبيان</a>
               </button>

               </div>

                </div>

            </div>
        )
    }
}


export default intro