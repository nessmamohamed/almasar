import React from 'react'
import { BrowserRouter as Router , Route} from 'react-router-dom'

import App from './App'
import AddQuest from './component/addQuest'
import Quest from './component/quest'
import Quests from './component/quests'
import Dashboard from './component/dashboard'

import store from './store'
import {Provider} from 'react-redux'

import counterpart from 'counterpart';

import {getQuests} from './actions/quest'
import {getResults} from './actions/results'


import en from './component/lang/en'
import ar from './component/lang/ar'


counterpart.registerTranslations('en', en);
counterpart.registerTranslations('ar', ar);

counterpart.setLocale(localStorage.getItem('language') ? localStorage.getItem('language') : 'ar' )

export default class root extends React.Component{

    
    componentDidMount(){
           
        store.dispatch(getQuests())
        store.dispatch(getResults())
      }

      
    render(){

        return(
           <Provider store={store}>
                <div>
                <Router>
                    <Route exact path='/' component={App}/>
                    <Route  path='/addQuest' component={AddQuest}/>
                    <Route  path='/quests/:id' component={Quest}/>
                    <Route  path='/dashboard' component={Dashboard}/>
                    <Route  path='/masarquests' component={Quests}/>
                    
                </Router>
            </div>
           </Provider>
        )
    }
}