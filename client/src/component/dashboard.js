import React from 'react'

import Chart from 'react-apexcharts'

import {connect} from 'react-redux'

import {logout} from '../actions/user'

import Dashboard2 from './dashboard2'
import Dashboard3 from './dashboard3'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faBars, faHome , faStickyNote, faPrint, faUsers, faLongArrowAltUp} from '@fortawesome/free-solid-svg-icons'


import Fade from 'react-reveal/Fade';


import axios from 'axios'

import Excel from './excel'



class dashboard extends React.Component{

  

  componentDidMount() {
    

   setTimeout(() => {
      if(!this.props.auth.user){
       window.location.href= '/admin'
    }
    }, 3000);

    this.visitors()
   
  }

  state ={
    menu: false, 
    res: [], 
    ip: 0,
    dataTotal: []
  }


  
  

  visitors =()=>{
       axios.get('/visitors')
       .then(res => {
         const ip = res.data.visitors.length
         this.setState({
           ip
         })
       })
  }

  onClickBar =(e) =>{
    e.preventDefault()

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

      const quest = this.props.quest[0]
      
   

        const question = quest ? quest.questions[0].quest : ''
        const question_ar = quest ? quest.questions[0].quest_ar : ''

        const answers = quest ? quest.questions[0].answers : ''
        const answers_ar = quest ? quest.questions[0].answers_ar : ''
        
        //results

        const results = this.props.results

        

    

        const results1 = results ? results.filter(result => {
            return result.results[question] ===  answers_ar[0] || result.results[question] ===  answers[0]
        }) : 0

        const results2 = results?  results.filter(result => {
            return result.results[question] ===  answers_ar[1] || result.results[question] ===  answers[1]
        }):0

        const results3 = results ? results.filter(result => {
            return result.results[question] ===  answers_ar[2] || result.results[question] ===  answers[2]
        }) : 0



        
        
       console.log(results1.length, results2.length, 2)
     

        
       const state1 ={
       
        series: [
            {
             
              data: [results1.length, results2.length, results3.length]
            }
          ],
          options: {
            chart: {
              height: 350,
              type: 'line',
              dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
              },
              toolbar: {
                show: false
              }
            },
            colors: ['green'],
            dataLabels: {
              enabled: true,
            },
            stroke: {
              curve: 'smooth'
            },
            grid: {
              borderColor: '#e7e7e7',
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            markers: {
              size: 1
            },
            xaxis: {
              categories: localStorage.getItem('language') === 'en' ? [...answers] : [...answers_ar],
     
            },
            yaxis: {
              
            
            },
            legend: {
              position: 'top',
              horizontalAlign: 'right',
              floating: true,
              offsetY: -25,
              offsetX: -5
            }
          },
        
        
        

        
    }


            //second chart

         

        const question2 = quest ? quest.questions[1].quest : ''
        const question_ar2 = quest ? quest.questions[1].quest_ar : ''

        const answers2 = quest ? quest.questions[1].answers : ''
        const answers_ar2 = quest ? quest.questions[1].answers_ar : ''

        //results 

        
        const results1_2 = results ? results.filter(result => {
            return result.results[question2] ===  answers_ar2[0] || result.results[question2] ===  answers2[0]
        }) : 0

        const results2_2 = results?  results.filter(result => {
            return result.results[question2] ===  answers_ar2[1] || result.results[question2] ===  answers2[1]
        }):0

        const results3_2 = results ? results.filter(result => {
            return result.results[question2] ===  answers_ar2[2] || result.results[question2] ===  answers2[2]
        }) : 0

        
        const results4_2 = results ? results.filter(result => {
            return result.results[question2] ===  answers_ar2[3] || result.results[question2] ===  answers2[3]
        }) : 0

        const results5_2 = results?  results.filter(result => {
            return result.results[question2] ===  answers_ar2[4] || result.results[question2] ===  answers2[4]
        }):0

        

        //state2
    const state2 ={
        series: [{
            data:[results1_2.length ,
                results2_2.length, 
                results3_2.length, 
                results4_2.length, 
                results5_2.length]
                
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions:{
              bar: {
                horizontal: true
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: localStorage.getItem('language') === 'en' ? [...answers2] : [...answers_ar2],
            }
            
          }

        
    }

    // chart3

    

    const question3 = quest ? quest.questions[2].quest : ''
    const question_ar3 = quest ? quest.questions[2].quest_ar : ''

    const answers3 = quest ? quest.questions[2].answers : ''
    const answers_ar3 = quest ? quest.questions[2].answers_ar : ''

    //results 

        
    const results1_3 = results ? results.filter(result => {
        return result.results[question3] ===  answers_ar3[0] || result.results[question3] ===  answers3[0]
    }) : 0

    const results2_3 = results?  results.filter(result => {
        return result.results[question3] ===  answers_ar3[1] || result.results[question3] ===  answers3[1]
    }):0

    const results3_3 = results ? results.filter(result => {
        return result.results[question3] ===  answers_ar3[2] || result.results[question3] ===  answers3[2]
    }) : 0

    
    const results4_3 = results ? results.filter(result => {
        return result.results[question3] ===  answers_ar3[3] || result.results[question3] ===  answers3[3]
    }) : 0

    const results5_3 = results?  results.filter(result => {
        return result.results[question3] ===  answers_ar3[4] || result.results[question3] ===  answers3[4]
    }):0

    const state3 = {
        series: [{
            name: "STOCK ABC",
            data: [results1_3.length, results2_3.length, results3_3.length, results4_3.length, results5_3.length ]
          }],
          options: {
            chart: {
              type: 'area',
              height: 350,
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            
            title: {
              text: 'Fundamental Analysis of Stocks',
              align: 'left'
            },
            subtitle: {
              text: 'Price Movements',
              align: 'left'
            },
            xaxis: {
              categories:  localStorage.getItem('language') === 'en' ? [...answers3] : [...answers_ar3]
            },
            yaxis: {
              opposite: true
            },
            legend: {
              horizontalAlign: 'left'
            }
          },
    }



    //data


    

     console.log(this.state.dataTotal)


     const quest_ = this.props.quest[0]

  const question_ = quest_ ? quest_.questions.map(quests => {
      return quests.quest
  }): ''


  
  const quserdata = this.props.results.map(row => 
    

    {

       const data =[
       
        row.results[question_[0]],
        row.results[question_[1]],
        row.results[question_[2]],
        row.results[question_[3]],
        row.results[question_[4]],
        row.results[question_[5]],
        row.results[question_[6]],
        row.results[question_[7]],
        row.results[question_[8]]
      ]
     
      
return data
  
})


var merged = [].concat.apply([], quserdata)


const satisfied = merged.filter(data =>{
  return (data === 'satisfied') || (data === 'extremely satisfied') || (data === 'راضي') || (data === 'راضي جدا')
})



const onPrint = (e) => {
  e.preventDefault()

  const page = document.body.innerHTML
  const printContent = document.getElementById('charts').innerHTML
  document.body.innerHTML = printContent

  setTimeout(() => {
    window.print()

  document.body.innerHTML = page
  }, 5000);
  


}




        return(
            <div style={{background: '#eceff1', paddingRight: '90px'}} >
              
             
          
             <div>

               <div id='charts'>

               <div className='row justify-content-center pt-3'>
                 <div className='card shadow my-auto mx-5 border-none' > 
                 <div className='card-body' style={{background: 'linear-gradient(360deg, rgb(0 128 69 / 22%), transparent)'}}>
                   <div className='d-flex'>
              <h5 className='mr-2'>Visitors: {this.state.ip}</h5> 
                     <FontAwesomeIcon icon={faLongArrowAltUp} color='blue' style={{fontSize: '25px'}}/>
                   </div>
                 </div>
                 </div>


                 <div className='card shadow my-auto mx-5' > 
                 <div className='card-body' style={{background: 'linear-gradient(360deg, rgb(0 128 69 / 22%), transparent)'}}>
                   <div className='d-flex'>
              <h5 className='mr-2'>customers: {this.props.results.length}</h5> 
                     <FontAwesomeIcon icon={faLongArrowAltUp} color='blue' style={{fontSize: '25px'}}/>
                   </div>
                 </div>
                 </div>


                 <div className='card shadow my-auto mx-5' > 
                 <div className='card-body'style={{background: 'linear-gradient(360deg, rgb(0 128 69 / 22%), transparent)'}}>
                   <div className='d-flex'>
              <h5 className='mr-2'>satisfiction: {Math.floor(satisfied.length * 100 / merged.length) || 0} %</h5> 
                     <FontAwesomeIcon icon={faLongArrowAltUp} color='blue' style={{fontSize: '25px'}}/>
                   </div>
                 </div>
                 </div>


               </div>
                   <div className='row justify-content-center pt-3' >
              <div className=''>
               <div className= 'card shadow my-auto ' >
               <div className="card-body text-center " >
        
               <h6>{localStorage.getItem('language') === 'en' ? question : question_ar}</h6>
          <div className="mixed-chart">

         

            <Chart
              options={state1.options}
              series={state1.series}
              type="line"
              height='250'
            />
          </div>
        </div>
        </div>
               </div>

               <div className='ml-md-5  'style={{width: '30%' , minWidth:'fit-content'}}>
                   <div className='card shadow  ' >
                       <div className='card-body text-center mt-5'>
                       <h6>{localStorage.getItem('language') === 'en' ? question2 : question_ar2}</h6>

                       <div className="mixed-chart">

         

<Chart
  options={state2.options}
  series={state2.series}
  type="bar"
  height='250'
/>
</div>
                       </div>
                   </div>
               </div>

               <div className= 'ml-md-5 ' style={{width: '30%' , minWidth:'fit-content'}}>
                   <div className='card shadow  ' >
                       <div className='card-body text-center mt-3'>
                       <h6>{localStorage.getItem('language') === 'en' ? question3 : question_ar3}</h6>
                           <div className='mixed-chart'>
                               <Chart
                               options={state3.options} series={state3.series} type="area" 
                               height='250'/>
                           </div>
                       </div>
                   </div>
               </div>
              </div>

              <Dashboard2/>
              <Dashboard3/>

              </div>

             <Fade>
             <div className= 'n-bar text-center pt-4' style={{display: !this.state.menu ? 'block' : 'none'}}>
                  <button onClick = {this.onClickBar} className='btn btn-light mx-auto' style={{background: 'none', border: 'none'}}>
                  <FontAwesomeIcon icon={faBars} color='white' style={{fontSize: '25px'}} />
                  </button>
              </div>
             </Fade>

              {/**dashboard */}
             
              <Fade>
              <div className='n-menu text-center pt-3 text-light' style={{display: this.state.menu ? 'block' : 'none'}}>
              <button  onClick={this.onClickBar}  className='btn btn-light ' style={{background: 'none', border: 'none', color: 'white', fontSize: '21px'}}>
                <FontAwesomeIcon icon={faHome} color='white' className='mr-2'/> Dashboard
                     </button>
                  <hr/>
                      <h5>
                      {localStorage.getItem('language') === 'en' ? 'language' : 'اللغة'}
                      </h5>
                  <ul style={{listStyle: 'none', padding: 0}}>
                    <li>
                     <button name='en' onClick={this.onClicklang}  className='btn btn-light' style={{background: 'none', border: 'none', color: 'white'}}>
                       English
                     </button>
                    </li>
                    <li>
                     <button name= 'ar' onClick={this.onClicklang}  className='btn btn-light' style={{background: 'none', border: 'none', color: 'white'}}>
                       Arabic
                     </button>
                    </li>
                  </ul>  



         {
           this.props.auth.user ?
           this.props.auth.user.admin? 

           <div>
               <div>
                    <FontAwesomeIcon icon={faStickyNote} color='white' style={{fontSize:'25px'}}/>
                  </div>

                  <div>
          <a className='text-light' href = '/addquest'>{localStorage.getItem('language') === 'en' ? 'Add questionnaire' : 'اضافة استبيان'}</a>

          </div>

         
<br/>
          <div>
          <a className='text-light' href = '/masarquests'>{localStorage.getItem('language') === 'en' ? 'questionnaires' : 'استبيانات'}</a>

          </div>

         

          <div className='mt-4'>
                    <FontAwesomeIcon icon={faUsers} color='white' style={{fontSize:'25px'}} />
                  </div>

       <div>
       <a className='text-light' href='/adduser'>{localStorage.getItem('language') === 'en' ? 'Add User' : 'اضافة مستخدم'}</a>
       </div>

       <br/>

       <div>
       <a className='text-light' href='/users'>{localStorage.getItem('language') === 'en' ? 'Users' : 'المستخدمين'}</a>
       </div>

       <br/>

      

       <Excel/>

   <br/>
           </div>

           : '' : ''
         }
               

                
       <div>
         <button onClick={onPrint} className='btn btn-light text-light' style={{background: 'none', border: 'none'}}>
         <FontAwesomeIcon icon={faPrint} color='white' style={{fontSize: '20px'}}/> Print
         </button>
       </div>

       <br/>

       <div>
       <button className='btn btn-light text-light' onClick={this.onLogout}  style={{background: 'none', border: 'none'}} >{localStorage.getItem('language') === 'en' ? 'Logout' : 'تسجيل خروج'}</button>
       </div>

       <br/>

       
        

         
               </div>
              </Fade>
             </div>
              
            </div>
        )
    }
}

const mapStateToProps =(state) => ({
    results: state.results.results, 
    quest: state.quests.quests,
    auth: state.auth
})
export default connect(mapStateToProps, {logout})(dashboard)