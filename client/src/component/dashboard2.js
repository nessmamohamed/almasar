import React from 'react'

import Chart from 'react-apexcharts'

import {connect} from 'react-redux'


class dashboard2 extends React.Component{
    render(){

        const quest = this.props.quest[0]
        

        const question = quest ? quest.questions[3].quest : ''
        const question_ar = quest ? quest.questions[3].quest_ar : ''

        const answers = quest ? quest.questions[2].answers : ''
        const answers_ar = quest ? quest.questions[2].answers_ar : ''

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


        const state1 = {
            series: [44, 55, 41, 17, 15],
            options: {
              chart: {
                type: 'donut',
              },fill: {
                  colors:['rgb(254, 176, 25)', 'rgb(0, 143, 251)', 'rgb(119, 93, 208)', 'rgb(255, 69, 96)', 'rgb(0, 227, 150)']
              },
              labels: localStorage.getItem('language') === 'en' ? [...answers] : [...answers_ar],
              colors:['rgb(254, 176, 25)', 'rgb(0, 143, 251)', 'rgb(119, 93, 208)', 'rgb(255, 69, 96)', 'rgb(0, 227, 150)'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 100
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
        }


        //chart2

        const question2 = quest ? quest.questions[4].quest : ''
        const question_ar2 = quest ? quest.questions[4].quest_ar : ''

        const results1_2 = results ? results.filter(result => {
            return result.results[question2] ===  answers_ar[0] || result.results[question2] ===  answers[0]
        }) : 0

        const results2_2 = results?  results.filter(result => {
            return result.results[question2] ===  answers_ar[1] || result.results[question2] ===  answers[1]
        }):0

        const results3_2 = results ? results.filter(result => {
            return result.results[question2] ===  answers_ar[2] || result.results[question2] ===  answers[2]
        }) : 0

        const results4_2 = results?  results.filter(result => {
            return result.results[question2] ===  answers_ar[1] || result.results[question2] ===  answers[1]
        }):0

        const results5_2 = results ? results.filter(result => {
            return result.results[question2] ===  answers_ar[2] || result.results[question2] ===  answers[2]
        }) : 0



        const state2 = {
            series: [44, 55, 13, 43, 22],
            
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },fill: {
                colors:['rgb(254, 176, 25)', 'rgb(0, 143, 251)', 'rgb(119, 93, 208)', 'rgb(255, 69, 96)', 'rgb(0, 227, 150)']
            },
              labels: localStorage.getItem('language') === 'en' ? [...answers] : [...answers_ar],
              colors:['rgb(254, 176, 25)', 'rgb(0, 143, 251)', 'rgb(119, 93, 208)', 'rgb(255, 69, 96)', 'rgb(0, 227, 150)'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
        }


        //chart 3

        const question3 = quest ? quest.questions[5].quest : ''
        const question_ar3 = quest ? quest.questions[5].quest_ar : ''

        const results1_3 = results ? results.filter(result => {
            return result.results[question3] ===  answers_ar[0] || result.results[question3] ===  answers[0]
        }) : 0

        const results2_3 = results?  results.filter(result => {
            return result.results[question3] ===  answers_ar[1] || result.results[question3] ===  answers[1]
        }):0

        const results3_3 = results ? results.filter(result => {
            return result.results[question3] ===  answers_ar[2] || result.results[question3] ===  answers[2]
        }) : 0

        const results4_3 = results?  results.filter(result => {
            return result.results[question3] ===  answers_ar[1] || result.results[question3] ===  answers[1]
        }):0

        const results5_3 = results ? results.filter(result => {
            return result.results[question3] ===  answers_ar[2] || result.results[question3] ===  answers[2]
        }) : 0


        const state3 ={

            series: [14, 23, 21, 17, 15],
            options: {
              chart: {
                type: 'polarArea',
              },
              stroke: {
                colors: ['#fff']
              },
              fill: {
                opacity: 0.8
              },
              labels: localStorage.getItem('language') === 'en' ? [...answers] : [...answers_ar],
              colors:['rgb(254, 176, 25)', 'rgb(0, 143, 251)', 'rgb(119, 93, 208)', 'rgb(255, 69, 96)', 'rgb(0, 227, 150)'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 300
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
        }

        //chart 4 


        
        const question4 = quest ? quest.questions[6].quest : ''
        const question_ar4 = quest ? quest.questions[6].quest_ar : ''

        const results1_4 = results ? results.filter(result => {
            return result.results[question4] ===  answers_ar[0] || result.results[question4] ===  answers[0]
        }) : 0

        const results2_4 = results?  results.filter(result => {
            return result.results[question4] ===  answers_ar[1] || result.results[question4] ===  answers[1]
        }):0

        const results3_4 = results ? results.filter(result => {
            return result.results[question4] ===  answers_ar[2] || result.results[question4] ===  answers[2]
        }) : 0

        const results4_4 = results?  results.filter(result => {
            return result.results[question4] ===  answers_ar[1] || result.results[question4] ===  answers[1]
        }):0

        const results5_4 = results ? results.filter(result => {
            return result.results[question4] ===  answers_ar[2] || result.results[question4] ===  answers[2]
        }) : 0


        const state4 = {
         
          series: [44, 55, 41, 17, 15],
          options: {
            chart: {
              width: 380,
              type: 'donut',
              dropShadow: {
                enabled: true,
                color: '#111',
                top: -1,
                left: 3,
                blur: 3,
                opacity: 0.2
              }
            },
            stroke: {
              width: 0,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      showAlways: true,
                      show: true
                    }
                  }
                }
              }
            },
            labels: localStorage.getItem('language') === 'en' ? [...answers] : [...answers_ar],
            colors:['rgb(254, 176, 25)', 'rgb(0, 143, 251)', 'rgb(119, 93, 208)', 'rgb(255, 69, 96)', 'rgb(0, 227, 150)'],
            dataLabels: {
              dropShadow: {
                blur: 3,
                opacity: 0.8
              }
            },
            fill: {
            type: 'pattern',
              opacity: 1,
              pattern: {
                enabled: true,
                style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'],
              },
            },
            states: {
              hover: {
                filter: 'none'
              }
            },
            theme: {
              palette: 'palette2'
            },
            title: {
              text: "Favourite Movie Type"
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
        
        

        
        
          
          };



        return(
            <div>

             <div className = 'row justify-content-center mt-2'>
                <div className= ''>
                <div className='card shadow ml-5' style={{width: '400px'}} >
                     <div className='card-body'>
                     <h6>{localStorage.getItem('language') === 'en' ? question : question_ar}</h6>
                         <div className='mixed-chart'>
                             
                             <Chart
                             options={state1.options} series={state1.series} type="donut" height='170'/>
                         </div>
                     </div>
                 </div>
                </div>

               
           <div style={{width:'min-content'}}>
           <div className='card shadow ml-5' style={{width: '20%' , minWidth:' 400px'}} >
                     <div className='card-body'>
                     <h6>{localStorage.getItem('language') === 'en' ? question2 : question_ar2}</h6>
                         <div className='mixed-chart'>
                             
                             <Chart
                             options={state2.options} series={state2.series} type="pie" height='170'/>
                         </div>
                     </div>
               
               
             </div>
           </div>


            <div style={{width:'min-content'}}>
              
            <div className='card shadow ml-5' style={{width:' 400px'}} >
                     <div className='card-body'>
                     <h6>{localStorage.getItem('language') === 'en' ? question3 : question_ar3}</h6>
                         <div className='mixed-chart'>
                             
                             <Chart
                             options={state3.options} series={state3.series} type="polarArea" height='170' />
                         </div>
                     </div>
                 </div>
            </div>

              

                 
                 <div className='card shadow ml-5' style={{width: '20%' , minWidth:' 400px'}} >
                     <div className='card-body'>
                     <h6>{localStorage.getItem('language') === 'en' ? question4 : question_ar4}</h6>
                         <div className='mixed-chart'>
                             
                             <Chart
                             options={state4.options} series={state4.series} type="donut" height='170' />
                         </div>
                     </div>
                 </div>
               
             

             </div>

            


            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    results: state.results.results, 
    quest: state.quests.quests
})


export default connect(mapStateToProps)(dashboard2)