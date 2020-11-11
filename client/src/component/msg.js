import React from 'react' 

import logo from './images/logo10.png'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faCopyright } from '@fortawesome/free-solid-svg-icons'


import icon from './images/m-icon.png'

export default class Msg extends React.Component{
    render(){
        return(
            <div>
                 <div className = 'card mx-auto mt-5 shadow text-center' style={{maxWidth: '600px'}}>
                        <div className='card-body'>

                            <img src = {logo} width='200'/>
                        {localStorage.getItem('language') !== 'en' ? 
                        <div className= 'mt-4'>
                            <h6>انتهت المدة المحددة للاستبيان </h6>
                        <h6 >اذا كان لديك أي إستفسار أو ملاحظات بخصوص هذا الإستبيان ، الرجاء التواصل على العنوان التالي :</h6>
                        
                        <p className='text-info'>مسار للإستشارات الإدارية</p>
                        <p className='text-info'>المملكة العربية السعودية</p>

                     


                        <p className='text-info'>+966 552101067</p>
                        <p className='text-info'>info@msarconlt.com</p>
                        <p className='text-info'>@ConsultingMsar</p>
                        </div>: <div>
                        <h6> The period for the questionnaire has expired </h6>                     
                        <h6> If you have any questions or comments regarding this questionnaire, please contact the following address: </h6>
                       
                         <p className='text-info'> Masar Management Consulting </p>                       
                         <p className='text-info'>Saudi arabia</p>
                    

                        <p className='text-info'>+966 552101067</p>
                        <p className='text-info'>info@msarconlt.com</p>
                        <p className='text-info'>@ConsultingMsar</p>
                        
                        </div>}
                        </div>
                    </div>

                    <div className='footer shadow'>
            <p>All copyrights reserved 2020 
            <FontAwesomeIcon icon={faCopyright} className='my-auto mx-2 ' color='black' style={{fontSize: '14px'}}/>

            <a href='https://twitter.com/ConsultingMsar'>
            <img src="https://img.icons8.com/fluent/48/000000/twitter.png" width='30' className='mr-2'/>
            </a>
                         <img src={icon} width='80'/>

            </p>
          </div>
            </div>
        )
    }
}