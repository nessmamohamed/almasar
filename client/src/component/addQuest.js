import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlus, faMinus, faSmile, 
faGrinAlt,  faMeh , faFrown} from '@fortawesome/free-solid-svg-icons'

import Fade from 'react-reveal/Fade';

import { Dropdown } from 'react-bootstrap';

import {connect} from 'react-redux'
import {addQuest} from '../actions/quest'

class addQuests extends React.Component{

    state={
        
            title: false,
            title_ar: false,
            quest_ar: '',
            answers_ar: [], 
            quest: '',
            answers: [],
            questions : [],
            language:'English'
        
    }


    onClickPlus =(e) => {
        e.preventDefault()

        let ele = document.getElementById('answer').value


      if(ele.length !== 0){
       
        this.setState({
            err: ''
        })

        this.setState({
            
            answers: [...this.state.answers, ele],

        })

        document.getElementById('answer').value = ''


      }else{
          this.setState({
              err: 'please enter a valid answer !'
          })
      }

      


    }

    onClickPlus_ar =(e) => {
        e.preventDefault()

        let ele = document.getElementById('answer_ar').value


      if(ele.length !== 0){
       
        this.setState({
            err: ''
        })

        this.setState({
            answers_ar: [...this.state.answers_ar, ele] 
        })

        document.getElementById('answer_ar').value = ''

      }else{
          this.setState({
              err: 'please enter a valid answer !'
          })
      }

      


    }

    onClickMinus = (answer_, e) => {
      e.preventDefault()

      

      this.setState({
          answers : this.state.answers.filter(answer => {
             return answer !== answer_
          })
      })


    }

    onChange =(e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }



    onClickMinus_ar = (answer_, e) => {
        e.preventDefault()
  
        
  
        this.setState({
            answers_ar : this.state.answers_ar.filter(answer => {
               return answer !== answer_
            })
        })
  
  
      }
  
      onChange =(e) => {
          this.setState({
              [e.target.name] : e.target.value
          })
      }


    onSubmit = (e) => {

        e.preventDefault()

        

       const {quest , answers, quest_ar, answers_ar, title, title_ar} = this.state

       if(!quest   || !quest_ar || !title || !title_ar ) {
           this.setState({
               err: 'please enter all fields !',
               success: false
           })

       }else{

       
        const question = {
            quest, answers, quest_ar, answers_ar
        }

        this.setState({
            err: '',
            answers: [],
            answers_ar:[],
            questions: [...this.state.questions, question],
            quest: '',
            quest_ar: '',
            success: false
        })

        e.target.elements.quest.value = ''
        e.target.elements.quest_ar.value = ''


       }
    }

    onClickMinus2 = (question ,e) => {
      e.preventDefault()

      const indx = this.state.questions.indexOf(question)

      this.setState({
          questions: this.state.questions.filter(question => {
              return question !== this.state.questions[indx]
          })
      })

     
    }

    onSubmit2 = (e) =>{
        e.preventDefault()

        const quest = this.state.questions
        const title = this.state.title
        const title_ar = this.state.title_ar

       if(!quest || !title || !title_ar){
           this.setState({
               err: 'please enter all fields'
           })
       }else{
        const questions = {
            quest, title, title_ar
        }

        this.props.addQuest(questions)

        setTimeout(() => {
            if(!this.props.error.status){
                 this.setState({
                     success: true,
                     questions : [],
                     title: false
                 })
            }
        }, 1000);
       }

        
    }

    onClickEmogi_ar = (e) => {
     
        e.preventDefault()

        this.setState({
            answers_ar: [...this.state.answers_ar , 'emoji']
        })
    }

    onClickEmogi= (e) => {
     
        e.preventDefault()

        this.setState({
            answers: [...this.state.answers , 'emoji']
        })
    }

    onTitle = (e) => {
        e.preventDefault()

        const ele = document.getElementById('title').value

        if(ele.length !== 0){
           
            this.setState({
                err: '',
                title: ele
            })


        }else{
            this.setState({
                err: 'please enter a valid title'
            })
        }
    }

    onTitle_ar = (e) => {
        e.preventDefault()

        const ele = document.getElementById('title_ar').value

        if(ele.length !== 0){
           
            this.setState({
                err: '',
                title_ar: ele
            })


        }else{
            this.setState({
                err: 'please enter a valid title'
            })
        }
    }


    render(){


        let answers = this.state.answers
        let answers_ar = this.state.answers_ar

        return(
            <div className='mx-auto mt-5' style={{maxWidth: '500px'}}>
               <div className = 'card shadow text-center ' >
                   <div className='card-header bg-success text-light'>Add Quest</div>

                   <div className='card-body'>

   

                   <div className="alert alert-danger" role="alert" style={{background: 'white', border: 'white'}}>
                    {this.state.err}
                   </div>

                   <div className="alert alert-success" role="alert" style={{background: 'white', border: 'white'}}>
                    {this.state.success ? 'the quest has successfully puplished'  : ''}
                   </div>

                   <h6 className='mb-3'>{this.state.title}</h6>

                   <h6 className='mb-3'>{this.state.title_ar}</h6>
                   

                   <div className="form-group d-flex text-center justify-content-center">

    <input  name='title_ar'  className="form-control mr-3 " id="title_ar" aria-describedby="emailHelp" placeholder="title (arabic)" style={{width: '70%'}} />
    <button className ='btn btn-danger ' onClick = {this.onTitle_ar}>ok</button>
    
  </div>

  <div className="form-group d-flex text-center justify-content-center">

    <input  name='title'  className="form-control mr-3 " id="title" aria-describedby="emailHelp" placeholder="title" style={{width: '70%'}} />
    <button className ='btn btn-danger ' onClick = {this.onTitle}>ok</button>
    
  </div>

                   <form onSubmit = {this.onSubmit}>

                   <div className="form-group">
    <label htmlFor="question">Question (arabic)</label>
    <input onChange = {this.onChange} name='quest_ar'  className="form-control" id="question" aria-describedby="emailHelp" placeholder="Enter Question"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="answer">answer(arabic)</label>
    <div className='d-flex'>
    <input  className="form-control mr-3" id="answer_ar" placeholder="answer" style={{width: '80%'}}/>

<button onClick={this.onClickEmogi_ar} className='btn btn-light mr-2'><FontAwesomeIcon icon={faSmile} className='my-auto' color='pink' style={{fontSize: '22px'}}/></button>

<button onClick={this.onClickPlus_ar} className='btn btn-light'><FontAwesomeIcon icon={faPlus} className='my-auto' color='red'/></button>
    </div>
  </div>

  <div className='mx-auto text-left'>
      { 
      answers_ar.map((answer, key = 1) => (
       <Fade key = {key ++ }>
            <div className = 'd-flex mb-2' >
        <button   onClick={this.onClickMinus_ar.bind(this, answer)} className='btn btn-light mr-2 py-0'><FontAwesomeIcon icon={faMinus}  color='red'/></button>
        {answer === 'emoji' ? 
        <div>
            <FontAwesomeIcon icon={faGrinAlt} className='my-auto mx-2 ' color='mediumseagreen' style={{fontSize: '40px'}}/>
            <FontAwesomeIcon icon={faSmile} className='my-auto mx-2 ' color='limegreen' style={{fontSize: '40px'}}/>
            <FontAwesomeIcon icon={faMeh} className='my-auto mx-2 ' color='#eae303' style={{fontSize: '40px'}}/>
            <FontAwesomeIcon icon={faFrown} className='my-auto mx-2 ' color='#ffc107' style={{fontSize: '40px'}}/>
            <FontAwesomeIcon icon={faFrown} className='my-auto mx-2 ' color='#f11c1c' style={{fontSize: '40px'}}/>
        </div> 
         : 
         <h6  className='my-auto '> {answer}</h6>}
      
      </div> 
       </Fade>
      ))}
  </div>

<hr className = 'my-5'/>

  <div className="form-group">
    <label htmlFor="question">Question</label>
    <input onChange = {this.onChange} name='quest'  className="form-control" id="question" aria-describedby="emailHelp" placeholder="Enter Question"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="answer">answer</label>
    <div className='d-flex'>
    <input  className="form-control mr-3" id="answer" placeholder="answer" style={{width: '80%'}}/>

    <button onClick={this.onClickEmogi} className='btn btn-light mr-2'><FontAwesomeIcon icon={faSmile} className='my-auto' color='pink' style={{fontSize: '22px'}}/></button>

<button onClick={this.onClickPlus} className='btn btn-light'><FontAwesomeIcon icon={faPlus} className='my-auto' color='red'/></button>
    </div>
  </div>

  <div className='mx-auto text-left'>
      { 
      answers.map((answer, key = 0) => (
       <Fade key = {key ++ }>
            <div className = 'd-flex mb-2' >

        <button   onClick={this.onClickMinus.bind(this, answer)} className='btn btn-light mr-2 py-0'><FontAwesomeIcon icon={faMinus}  color='red'/></button>
        {answer === 'emoji' ? 
        <div>
          <FontAwesomeIcon icon={faGrinAlt} className='my-auto mx-2 ' color='mediumseagreen' style={{fontSize: '40px'}}/>
            <FontAwesomeIcon icon={faSmile} className='my-auto mx-2 ' color='limegreen' style={{fontSize: '40px'}}/>
            <FontAwesomeIcon icon={faMeh} className='my-auto mx-2 ' color='#eae303' style={{fontSize: '40px'}}/>
            <FontAwesomeIcon icon={faFrown} className='my-auto mx-2 ' color='#ffc107' style={{fontSize: '40px'}}/>
            <FontAwesomeIcon icon={faFrown} className='my-auto mx-2 ' color='#f11c1c' style={{fontSize: '40px'}}/>
        </div> 
         : 
         <h6  className='my-auto '> {answer}</h6>}
      
      </div> 
       </Fade>
      ))}
  </div>


 
  <button type="submit" className="btn btn-danger px-4 shadow ">Submit</button>
</form>




                   </div>
               </div>

    {/**Quest */}

    <div className= 'card shadow my-5'>
        <div className='card-header bg-success text-light d-flex'>
           <h6 className='mt-2'>the Quest</h6>

           <div className='ml-auto'>
            <Dropdown  >
  <Dropdown.Toggle variant="success" id="dropdown-basic2" style={{background: 'none', border: 'none', }}>

      {this.state.language}
      </Dropdown.Toggle>

  <Dropdown.Menu className='text-center'>
    
    <Dropdown.Item onClick= {() => {this.setState({language: 'arabic'})} } name='ar' >
    العربية
      </Dropdown.Item>
    <Dropdown.Item onClick= {() => {this.setState({language: 'English'})} } name='en'>
     الانجليزية
    </Dropdown.Item>
   
  </Dropdown.Menu >

</Dropdown>
            </div>
        </div>

        <div className='card-body'>
            {this.state.questions.map((question, key=1) => (
                <div key={key++} >



                    <div style={{display: '-webkit-box'}}>
                    <button   onClick={this.onClickMinus2.bind(this, question)} className='btn btn-light mr-2 py-0'><FontAwesomeIcon icon={faMinus}  color='red'/></button>
                     <div>
                     <h6>{this.state.language === 'English' ? question.quest : question.quest_ar}</h6>
                    <ul className='mt-4' style={{listStyle: question.answers[0] === 'emoji' ? 'none' : 'decimal'}}>
  {this.state.language === 'English' ? 
  question.answers.map((answer, key=1) => (
    <li >
        {answer === 'emoji' ? 
        <div>
          <FontAwesomeIcon icon={faGrinAlt} className='my-auto mx-2 ' color='mediumseagreen' style={{fontSize: '40px'}}/>
            <FontAwesomeIcon icon={faSmile} className='my-auto mx-2 ' color='limegreen' style={{fontSize: '40px'}}/>
            <FontAwesomeIcon icon={faMeh} className='my-auto mx-2 ' color='#eae303' style={{fontSize: '40px'}}/>
            <FontAwesomeIcon icon={faFrown} className='my-auto mx-2 ' color='#ffc107' style={{fontSize: '40px'}}/>
            <FontAwesomeIcon icon={faFrown} className='my-auto mx-2 ' color='#f11c1c' style={{fontSize: '40px'}}/>
        </div> 
         : 
         <h6  className='my-auto '> {answer}</h6>}
    </li>
)) :
question.answers_ar.map(answer => (
    <li>
        {answer === 'emoji' ? 
        <div>
         <FontAwesomeIcon icon={faGrinAlt} className='my-auto mx-2 ' color='mediumseagreen' style={{fontSize: '40px'}}/>
            <FontAwesomeIcon icon={faSmile} className='my-auto mx-2 ' color='limegreen' style={{fontSize: '40px'}}/>
            <FontAwesomeIcon icon={faMeh} className='my-auto mx-2 ' color='#eae303' style={{fontSize: '40px'}}/>
            <FontAwesomeIcon icon={faFrown} className='my-auto mx-2 ' color='#ffc107' style={{fontSize: '40px'}}/>
            <FontAwesomeIcon icon={faFrown} className='my-auto mx-2 ' color='#f11c1c' style={{fontSize: '40px'}}/>
        </div> 
         : 
         <h6  className='my-auto '> {answer}</h6>}
    </li>
))}
</ul>
                     </div>
                    </div>


                   
                    
                </div>
            ))}

           <div className='text-center mt-4 '>
           {this.state.questions[0] ?
            <button type='submit' onClick={this.onSubmit2} className='btn btn-danger '>Puplish The Quest</button> : ''}
           </div>
        </div>
    </div>
            </div>

        )
    }
}

const mapStateToProps =(state) => ({
    error: state.error
})

export default connect(mapStateToProps, {addQuest})(addQuests)