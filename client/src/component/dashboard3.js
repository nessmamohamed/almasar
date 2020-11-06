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
            return result.results[question] ===  answers_ar[1] || result.results[question] ===  answers[1]
        }):0

        const results5 = results ? results.filter(result => {
            return result.results[question] ===  answers_ar[2] || result.results[question] ===  answers[2]
        }) : 0


        
        

     

         //state2
         const state1 ={
       
          series: [
              {
               
                data: [results1.length, results2.length, results3.length, results4.length, results5.length]
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
              colors: ['black'],
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

        

        //state2
    const state2 ={
       
        series: [
            {
             
              data: [results1_2.length, results2_2.length, results3_2.length, results4_2.length, results5_2.length]
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
            colors: ['#77B6EA'],
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

   

        return(
            <div style={{background: '#eceff1'}} >
              <div className='row justify-content-center pt-3'>
              <div className=''>
               <div className= 'card shadow my-auto ' style={{width: '700px'}} >
               <div className="card-body text-center " >
        
               <h6>{localStorage.getItem('language') === 'en' ? question : question_ar}</h6>
          <div className="mixed-chart">

         

            <Chart
              options={state1.options}
              series={state1.series}
              type="line" height={250}
            />
          </div>
        </div>
        </div>
               </div>

               <div className='ml-md-5  'style={{width: '30%' , minWidth:'fit-content'}}>
                   <div className='card shadow  ' >
                       <div className='card-body text-center '>
                       <h6>{localStorage.getItem('language') === 'en' ? question2 : question_ar2}</h6>

                       <div className="mixed-chart">

         

<Chart
  options={state2.options}
  series={state2.series}
  type="line"
  height='250'
/>
</div>
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