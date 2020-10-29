import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getQuest} from '../actions/quest'
import {addResult} from '../actions/results'


import Nav from './nav'

import Translate from 'react-translate-component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faSmile, 
    faGrinAlt,  faMeh , faFrown} from '@fortawesome/free-solid-svg-icons'


class Quest extends React.Component{

    componentDidMount() {
        const search = this.props.location.search
        const params = new URLSearchParams(search)
        const id = params.get('id')

        this.props.getQuest(id)
    }

    state =  {
        err: false,
        form: false,
        results: [],
        results_ar: []
    }

   

    onChange = ( e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
      }

      onChange2 = (indx, e) => {

        let nam = e.target.name
       
       this.setState({[indx]: e.target.value})
        
        if(this.state.results.length === 0){
            this.setState({
                results: [...this.state.results, {[e.target.name] : e.target.value}]
            })
        }else{
           
            
        let arr = this.state.results


        arr.map(ar => {
            if(ar[nam]){
                ar[nam] = e.target.value
                

                this.setState({
                    results: [...arr],
                    
                })
            }else{
                this.setState({
                    results: [...this.state.results, {[e.target.name] : e.target.value}]
                })
            }
        })

       
    
    }

    

    
            }


            onClickFace = (quest, answer, indx ,e) => {
                let nam = quest
                   
                this.setState({
                    [indx]: answer
                })

                console.log(indx)

                if(this.state.results.length === 0){
                    this.setState({
                        results: [...this.state.results, {[quest] : answer}]
                    })
                }else{
                   
                    
                let arr = this.state.results
        
        
                arr.map(ar => {
                    if(ar[nam]){
                        ar[nam] = answer
                        
        
                        this.setState({
                            results: [...arr],
                            
                        })
                    }else{
                        this.setState({
                            results: [...this.state.results, {[quest] : answer}]
                        })
                    }
                })
        
               
            
            }
        

                
            }
      

    onClickSign2 =(e) => {
        e.preventDefault()

        this.setState({
            
            err: false
        })


        const title = this.props.quest.title

        const {Cname , name, phone, form} = this.state

        

      
            if(!Cname || !name || !phone) {
                this.setState({
                    err: 'please enter all feilds !',
                    success:false
                })

            }else if(phone.length < 10 || phone[0] !== '+'){
                this.setState({
                    err: 'please enter a valid number !',
                    success:false
                })
            }else{

                const quser = {
                  phone,
                  titles: title
                }
               
                if(this.state.results < 9){
                    this.setState({
                        err: ' please answer all questions ',
                        success:false
                    })
                }else{
                    axios.post('http://localhost:5000/quser' , ({quser}))
                    .then(res => {
                        this.setState({
                            success: true,
                            err: ''
                        })

                        const result = {
                           results: this.state.results,
                           title
                        }

                        this.props.addResult(result)


                    })
                    .catch(err => {
                        if(err){
                            this.setState({
                                err: 'you have already signed up before !',
                                success:false
                            })
                        }
                    })

                   
                }
                
            }
        }
    

   

    render(){
        
        console.log(this.state)

        let i = 0
        
        
        return(
           <div>
               <Nav/>
                <div className='py-5 mx-auto' style={{maxWidth: '1000px'}}>
                <div className='card mt-5' id='quest-card' style={{boxShadow:' 0 .5rem 1rem GREEN'}}>
                    <div className='card-body shadow ' style={{ minHeight: '800px'}}>
                       
                    <div className='text-center my-4'>
                            <h5>{localStorage.getItem('language') === 'en' ? this.props.quest.title
                            : this.props.quest.title_ar}</h5>

                            <div className='dashed mx-auto'></div>
                        </div>

                           <div>

                               <div className='mb-5' >
                               <form >
                         <input onChange={this.onChange} name='Cname' className="form-control mx-auto  mb-2 mt-5"  aria-describedby="emailHelp" placeholder={localStorage.getItem('language') === 'en' ? 'company name' : 'اسم الشركة'} style={{width: '70%', textAlign: localStorage.getItem('language') === 'en' ? 'left' : "right"}} />
                         
                         <input onChange={this.onChange}  name='name'  className="form-control mx-auto mb-2"  aria-describedby="emailHelp" placeholder={localStorage.getItem('language') === 'en' ? 'email' :"الايميل"} style={{width: '70%', textAlign: localStorage.getItem('language') === 'en' ? 'left' : "right"}} />
                         <input onChange={this.onChange} name='phone'  className="form-control mx-auto mb-2 "  aria-describedby="emailHelp" placeholder={localStorage.getItem('language') === 'en' ? 'phone number' : "رقم الهاتف"} style={{width: '70%', textAlign: localStorage.getItem('language') === 'en' ? 'left' : "right"}} />
                         </form>
                               </div>

                              {this.props.quest ?
                               this.props.quest.questions.map((question, indx= i++) => (
                                <div >
                                     {localStorage.getItem('language') === 'en' ?
                                     <div>
                                         <h6>{question.quest}</h6>
                                     </div>  : 
                                     <div className='text-right mr-3'>
                                         <h6>{question.quest_ar}</h6>
                                         </div>}

                                    <div className='my-3'>
                                      {question.answers.length === 0 ?
                                      <div className="form-group">
                                      <textarea onChange={this.onChange2} name={question.quest} id={question.quest_ar} className="form-control shadow"  rows="3"></textarea>
                                    </div>
                                     : 
                                      
                                      localStorage.getItem('language') === 'en' ? 
                                      question.answers.map((answer, key = 0) => (
                                          <div >
                                              {answer === 'emoji' ? 
        <div> - <button onClick={this.onClickFace.bind(this, question.quest, 'extremely satisfied', indx)}    className='btn btn-light p-0 ml-2 pt-1' style={{background: 'white', borderColor: this.state[indx] === 'extremely satisfied' ? 'red' : 'white'}}> 
        <FontAwesomeIcon icon={faGrinAlt} className='my-auto mx-2 ' color='mediumseagreen' style={{fontSize: '40px'}}/>
    </button>
    <button onClick={this.onClickFace.bind(this, question.quest, 'satisfied', indx)}  className='btn btn-light p-0 ml-2 pt-1' style={{background: 'white',  borderColor: this.state[indx] === 'satisfied' ? 'red' : 'white'}}> 
        <FontAwesomeIcon icon={faSmile} className='my-auto mx-2 ' color='limegreen' style={{fontSize: '40px'}}/>
    </button>
    <button onClick={this.onClickFace.bind(this, question.quest, 'neutral', indx)}  className='btn btn-light p-0 ml-2 pt-1' style={{background: 'white',  borderColor: this.state[indx] === 'neutral' ? 'red' : 'white'}}> 
        <FontAwesomeIcon icon={faMeh} className='my-auto mx-2 ' color='#eae303' style={{fontSize: '40px'}}/>
    </button>   
    <button onClick={this.onClickFace.bind(this, question.quest, 'dissatisfied', indx)}  className='btn btn-light p-0 ml-2 pt-1' style={{background: 'white', borderColor: this.state[indx] === 'dissatisfied' ? 'red' : 'white'}}> 
        <FontAwesomeIcon icon={faFrown} className='my-auto mx-2 ' color='#ffc107' style={{fontSize: '40px'}}/>
    </button>  
    <button onClick={this.onClickFace.bind(this, question.quest, 'extremely dissatisfied', indx)} className='btn btn-light p-0 ml-2 pt-1' style={{background: 'white',  borderColor: this.state[indx] === 'extremely dissatisfied' ? 'red' : 'white'}}> 
        <FontAwesomeIcon icon={faFrown} className='my-auto mx-2 ' color='#f11c1c' style={{fontSize: '40px'}}/>
    </button> 
    <div className="form-group my-4" style ={{display: this.state[indx] === 'extremely dissatisfied' ? 'block' : 'none'}} >
                                      <textarea onChange={this.onChange} name={question.quest} id={question.quest_ar} className="form-control shadow "  rows="2" placeholder='write the reason ...'></textarea>
                                    </div>
        </div> 
         : 

answer === 'extremely dissatisfied' ? 
<div>
<div className="form-check ">
<input onChange = {this.onChange2.bind(this, indx)} className="form-check-input shadow" id={question.quest_ar} type="radio" name={question.quest}  value={answer} />
<label className="form-check-label" htmlFor="exampleRadios1">
  {answer}
</label>
<div className="form-group my-4" style ={{display: (this.state[indx] === 'dissatisfied' || this.state[indx] === 'extremely dissatisfied')  ? 'block' : 'none'}} >
                                      <textarea onChange={this.onChange} name={question.quest} id={question.quest_ar} className="form-control shadow"  rows="2" placeholder='write the reason ...'></textarea>
                                    </div>

</div>
</div>:
<div className="form-check ">
<input onChange = {this.onChange2.bind(this, indx)} className="form-check-input shadow" id={question.quest_ar} type="radio" name={question.quest}  value={answer} />
<label className="form-check-label" htmlFor="exampleRadios1">
  {answer}
</label>
</div>}
                                         

                                          </div> 

                                      )) : 
                                      question.answers_ar.map((answer, key = 0) => (
                                        <div className='text-right mr-3'>
                                        {answer === 'emoji' ? 
  <div>   <button onClick={this.onClickFace.bind(this, question.quest, 'extremely satisfied', indx)}    className='btn btn-light p-0 ml-2 pt-1' style={{background: 'white',  borderColor: this.state[indx] === 'extremely satisfied' ? 'red' : 'white'}}> 
  <FontAwesomeIcon icon={faGrinAlt} className='my-auto mx-2 ' color='mediumseagreen' style={{fontSize: '40px'}}/>
</button>
<button onClick={this.onClickFace.bind(this, question.quest, 'satisfied', indx)} className='btn btn-light p-0 ml-2 pt-1' style={{background: 'white',  borderColor: this.state[indx] === 'satisfied' ? 'red' : 'white'}}> 
  <FontAwesomeIcon icon={faSmile} className='my-auto mx-2 ' color='limegreen' style={{fontSize: '40px'}}/>
</button>
<button onClick={this.onClickFace.bind(this, question.quest, 'neutral', indx)} className='btn btn-light p-0 ml-2 pt-1' style={{background: 'white', borderColor: this.state[indx] === 'neutral' ? 'red' : 'white'}}> 
  <FontAwesomeIcon icon={faMeh} className='my-auto mx-2 ' color='#eae303' style={{fontSize: '40px'}}/>
</button>   
<button onClick={this.onClickFace.bind(this, question.quest, 'dissatisfied', indx)} className='btn btn-light p-0 ml-2 pt-1' style={{background: 'white',   borderColor: this.state[indx] === 'dissatisfied' ? 'red' : 'white'}}> 
  <FontAwesomeIcon icon={faFrown} className='my-auto mx-2 ' color='#ffc107' style={{fontSize: '40px'}}/>
</button>  
<button onClick={this.onClickFace.bind(this, question.quest, 'extremely dissatisfied', indx)} className='btn btn-light p-0 ml-2 pt-1' style={{background: 'white',  borderColor: this.state[indx] === 'extremely dissatisfied' ? 'red' : 'white'}}> 
  <FontAwesomeIcon icon={faFrown} className='my-auto mx-2 ' color='#f11c1c' style={{fontSize: '40px'}}/>
</button> 
   - 
   <div className="form-group my-4" style ={{display: this.state[indx] === 'extremely dissatisfied' ? 'block' : 'none'}} >
                                      <textarea onChange={this.onChange} name={question.quest} id={question.quest_ar} className="form-control shadow text-right"  rows="2" placeholder='... اذكر السبب '></textarea>
                                    </div> </div> 
   : 

  answer === 'غير راضي جدا' ? 
   <div>
   <div className="form-check " >
   
   <label className="form-check-label mr-4" htmlFor="exampleRadios1">
     {answer}
   </label>

   <input onChange = {this.onChange2.bind(this, indx)} className="form-check-input shadow" id={question.quest_ar} type="radio" name={question.quest}  value={answer} />
   <div className="form-group my-4" style = {{display: this.state[indx] ===  'غير راضي' || this.state[indx] ===   'غير راضي جدا' ? 'block' : 'none'}}>
                                         <textarea onChange={this.onChange} name={question.quest} id={question.quest_ar} className="form-control shadow text-right" placeholder='... اذكر السبب'  rows="2"></textarea>
                                       </div>
   
   </div>
   </div>:
   <div className="form-check ">

   <label className="form-check-label mr-4" htmlFor="exampleRadios1">
     {answer}
   </label>

   <input onChange = {this.onChange2.bind(this, indx)} className="form-check-input shadow" id={question.quest_ar} type="radio" name={question.quest}  value={answer} />
   </div>}
                                   

                                    </div> 
                                      ))}
                                    </div>
                                </div>

                                
                            )) : ''}
                            
                           </div>

                           {/** submit form */}

                           <div className="alert alert-danger mb-0 text-center" role="alert" style={{background: 'none', border: 'none'}}>
                    {this.state.err}
                   </div>

                   <div className="alert alert-success mb-0 text-center" role="alert" style={{background: 'none', border: 'none'}}>
                    {this.state.success ? 'thanks for your answers !' : ''}
                   </div>

                         

                   <div className='mx-auto text-center '>
                   <button className='btn btn-danger ' onClick = {this.onClickSign2}>
                       <Translate content='done'/>
                   </button>

                   </div>

                    </div>
                    
                    
                  
                </div>
               

                <div className=''>
                    <div className='block2 shadow'></div>
                    <div className='block3 shadow'></div>
                <div className='block shadow'></div>
               
             
                </div>
            </div>
           </div>
        )
    }
}

const mapStateToProps = (state) => ({
       quest : state.quests.quest
})

export default connect(mapStateToProps, {getQuest, addResult})(Quest)