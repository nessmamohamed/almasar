import { faDownload } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

import {connect} from 'react-redux'

import { CSVLink, CSVDownload } from "react-csv";

class excel extends React.Component{

    state = {
        question_ar: [],
        show: false,
         dataTotal:[]
    }



   toggle=()=>{
       this.setState({
           show:false
       })
   }

    onReport = (e) => {
      e.preventDefault()

      const quest = this.props.quest[0]

      const question = quest ? quest.questions.map(quests => {
          return quests.quest
      }): ''


      const quserdata = this.props.result.map(row => 
        
            {

                let reasons = {}

               const ress = row.reasons.map(res => {
                   return reasons = {...reasons , ...res}
               })
               
             

               const data =[
                   row.quser.name,
                   row.quser.Cname,
                   row.quser.phone,
                row.results[question[0]],
                reasons[question[0]] || '',
                row.results[question[1]],
                reasons[question[1]] || '',
                row.results[question[2]],
                reasons[question[2]] || '',
                row.results[question[3]],
                reasons[question[3]] || '',
                row.results[question[4]],
                reasons[question[4]] || "",
                row.results[question[5]],
                reasons[question[5]] || '',
                row.results[question[6]],
                reasons[question[6]] || '',
                row.results[question[7]],
                reasons[question[7]] || '',
                row.results[question[8]],
                reasons[question[8]]|| '',
                row.results[question[9]] || '',
                
                
                
                
                
                
                
                
                
                
          
               ]

        return data

            
          
           
            
            
      })


    

      const question_ar = quest ? quest.questions.map(quests => {
          return quests.quest_ar
      }): ''

      this.setState({
        dataTotal : quserdata, 
        question_ar, 
        show: true
    })

   

    
    
      
    }





    

  
    

    render(){

        const row =[
            'الاسم', 
            'الشركة', 
            'الرقم',
            this.state.question_ar[0],
            'تعليق',
            this.state.question_ar[1],
            'تعليق',
            this.state.question_ar[2],
            'تعليق',
            this.state.question_ar[3],
            'تعليق',
            this.state.question_ar[4],
            'تعليق',
            this.state.question_ar[5],
            'تعليق',
            this.state.question_ar[6],
            'تعليق',
            this.state.question_ar[7],
            'تعليق',
            this.state.question_ar[8],
            'تعليق',
            this.state.question_ar[9],
            'تعليق',


            
        ]


        let data_ar = this.state.dataTotal.map(data => {
            const da_ar =  data.map(da =>{
                  if(da === 'extremely satisfied'){
                      return da = 'راضي جدا'
                  }else if(da === 'satisfied'){
                      return da = 'راضي'
                  }else if(da === 'neutral'){
                      return da = 'مقبول'
                  }else if(da === 'dissatisfied'){
                      return da = 'غير راضي'
                  }else if(da === 'extremely dissatisfied'){
                      return da = 'غير راضي جدا'
                  }else if(da === 'accurate'){
                    return da = 'دقيق'
                }else if(da === 'not accurate'){
                    return da = 'غير دقيق'
                }
                  else{
                      return da
                  }
              })
  
              return da_ar
              
          })
        

        const csvData = this.state.dataTotal ?  [row, ...data_ar] : []

        
      
        
     

        return(
            <div>
                
              
                <button onClick ={this.onReport} className='btn btn-light text-light' style={{background: 'none', border: 'none'}}>Excel Sheet</button>
                <CSVLink onClick={this.toggle} data={csvData} className ='download '  style={{display: this.state.show ? 'block': 'none'}}>Download me</CSVLink>

             </div>
        )
    }
}


const mapStateToProps= (state) => ({
    result : state.results.results,
    quest: state.quests.quests
})
export default connect(mapStateToProps)(excel) 