import React, { Component } from 'react'; //webpack and babel
import { BrowserRouter, Route } from 'react-router-dom'; // browserRouter can be seen as brain, route used to set up a rule of whats visible and not
import { connect } from 'react-redux';
import * as actions from '../actions'

import  Header  from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";


class App extends Component{
    //called on first load
    //intial ajax request will happen here
    //componentwillmount and didmount are very much similar
    componentDidMount(){
        this.props.fetchUser(); //call the action
    }

    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <div className="container">
                        <Header></Header> 
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/surveys" component={Dashboard}/>
                        <Route path="/surveys/new" component={SurveyNew}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App); //mapstates to props null for now in connect