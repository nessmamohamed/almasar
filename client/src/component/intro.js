import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'

import Fade from 'react-reveal/Fade';


class intro extends React.Component{
    render(){
        return(
            <div className='mx-auto text-right' dir="rtl" >
                
                <Fade >
                <h4> نشكركم علي المشاركة في هذا الاستبيان </h4>
                <h4> و الذي نهدف من خلاله الي قياس مدي رضاكم عن خدماتنا المقدمة و تحسين جودة خدماتنا مستقبلا </h4>
                
                <h5 className='mt-5'>يستغرق هذا الاستبيان دقيقتين فقط و ستعامل جميع الأجوبة و الأقتراحات بسرية تامة كما سيتم جمعها و تحليلها بواسطة جهة استشارية لضمان الشفافية و الحيادية</h5>
                </Fade>

                <div className='text-center mt-5'>
              <Fade top count= '1000'>
              <FontAwesomeIcon icon={faAngleDoubleDown} />
              </Fade>

               <div>
               <button className='btn btn-light mt-3 btn-lg px-5 shadow' > 
               <a href='/quest' style={{color: '#d2303f'}}>بدء الاستبيان</a>
               </button>

               </div>

                </div>

            </div>
        )
    }
}


export default intro