import React from 'react'

import Chart from 'react-apexcharts'

import {connect} from 'react-redux'



class dashboard3 extends React.Component{

    

    render(){


        const quest = this.props.quest[0]

        const question = quest ? quest.questions[7].quest : ''
        const question_ar = quest ? quest.questions[7].quest_ar : ''

        const answers = quest ? quest.questions[7].answers : [0, 0 , 0 , 0 , 0]
        const answers_ar = quest ? quest.questions[7].answers_ar : [0, 0, 0, 0,0]
        
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

     
        const results4 = results?  results.filter(result => {
            return result.results[question] ===  answers_ar[3] || result.results[question] ===  answers[3]
        }):0

        const results5 = results ? results.filter(result => {
            return result.results[question] ===  answers_ar[4] || result.results[question] ===  answers[4]
        }) : 0


        
        

     

         //state2
         const state1 ={
       
          series: [{
            data:[results1.length ,
                results2.length, 
                results3.length, 
                results4.length, 
                results5.length]
                
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions:{
              bar: {
                horizontal: false,
                dataLabels: {
                  
                  position: 'top'
                }
              }
            },
            dataLabels: {
              enabled: true,
              formatter:  (val, opts) => {
               let total = results1.length + results2.length + results3.length + results4.length + results5.length
                return Math.floor(val * 100 / total) + '%'
            },
              style: {
                colors: ['#333']
            },
            offsetY: -30
           
            
            },
            xaxis: {
              categories: localStorage.getItem('language') === 'en' ? [...answers] : [...answers_ar],
            }
            
          }
  
          
  
          
      }


            //second chart

         

        const question2 = quest ? quest.questions[8].quest : ''
        const question_ar2 = quest ? quest.questions[8].quest_ar : ''

        const answers2 = quest ? quest.questions[8].answers : ''
        const answers_ar2 = quest ? quest.questions[8].answers_ar : ''

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

        

        console.log(results1_2,
          results2_2 , 
          results3_2, 
          results4_2, 
          results5_2)

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
            horizontal: false,
            dataLabels: {
                  
              position: 'top'
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter:  (val, opts) => {
           let total = results1_2.length + results2_2.length + results3_2.length + results4_2.length + results5_2.length
            return Math.floor(val * 100 / total) + '%'
        },
          style: {
            colors: ['#333']
        },
        offsetY: -30
        },
        xaxis: {
          categories: localStorage.getItem('language') === 'en' ? [...answers] : [...answers_ar],
        }
        
      }


        
    }

   

        return(
            <div style={{background: '#eceff1'}} className='row3' >
              <div className='row justify-content-center pt-3 padrow'>
              <div className='mr-5 mt-3 break4'>
               <div className= 'card shadow my-auto ' style={{width: '700px'}} >
               <div className="card-body text-center " >
        
               <h6>{localStorage.getItem('language') === 'en' ? question : question_ar}</h6>
         {results1.length > 0 ? 
          <div className="mixed-chart">

          <Chart
            options={state1.options}
            series={state1.series}
            type="bar" height={250}
          />
        </div> : ''}
        </div>
        </div>
               </div>

               <div className='mr-5 mt-3 'style={{width: '700px' , minWidth:'fit-content'}}>
                   <div className='card shadow  ' >
                       <div className='card-body text-center '>
                       <h6>{localStorage.getItem('language') === 'en' ? question2 : question_ar2}</h6>

         {results1.length > 0 ? 
                       <div className="mixed-chart">
                       <Chart
                         options={state2.options}
                         series={state2.series}
                         type="bar"
                         height='250'
                       />
                       </div> : ''}
                       </div>
                   </div>
               </div>

         
              </div>

             
            </div>
        )
    }
}

const mapStateToProps =(state) => ({
    results: state.results.results, 
    quest: state.quests.quests
})
export default connect(mapStateToProps)(dashboard3)