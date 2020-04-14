import React, { Component } from 'react';
import Jumbotron from './jumbotron';

class Home extends Component {

    constructor(){
        super()

        this.state = {
            course_modules: [
                {id: 1, title: '1 - New app', description: 'lorem ipsum',active: false},
                {id: 2, title: '2 - Existing app', description: 'lorem ipsum',active: false},
                {id: 3, title: '3 - Hello world app', description: 'lorem ipsum',active: false},
                {id: 4, title: '4 - React app', description: 'lorem ipsum',active: false}
            ]
        }
    }

    render() {
        return(
            <Jumbotron/>
        )
    }
}

export default Home