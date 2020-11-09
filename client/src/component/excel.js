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

               const ress = row.reasons.map(res => {
                   return Object.values(res)
               })
               
               const ress2 = [...Object.values(ress)]
           

               const data =[
                   row.quser.name,
                   row.quser.Cname,
                   row.quser.phone,
                row.results[question[0]],
                row.results[question[1]],
                row.results[question[2]],
                row.results[question[3]],
                row.results[question[4]],
                row.results[question[5]],
                row.results[question[6]],
                row.results[question[7]],
                row.results[question[8]],
                row.results[question[9]] || '',
                '',
                ress2[0] || '',
                ress2[1] || '',
                ress2[2] || '',
                ress2[3] || '',
                ress2[4] || "",
                ress2[5] || '',
                ress2[6] || '',
                ress2[7] || '',
                ress2[8] || '',
          
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
            ...this.state.question_ar,
            "",
            'تعليق',
            'تعليق',
            'تعليق',
            'تعليق',
            'تعليق',
            'تعليق',
            'تعليق',
            'تعليق'

            
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
                  }
                  else{
                      return da
                  }
              })
  
              return da_ar
              
          })
        

        const csvData = this.state.dataTotal ?  [row, ...data_ar] : []

        
      

        console.log(csvData)

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