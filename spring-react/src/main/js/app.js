'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

import Employees from './employees.js';
import News from './news.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 'employees'
        }
        this.handleClick.bind(this);
    }

    handleClick() {
        alert("handleClick " + this.state);
        this.setState(prevState => ({
            active: prevState.active == 'employees' ? 'news' : 'employees'
        }))
    }

    render() {
        if (this.state.active == "employees") {
            return (
                <div>
                    <button title="employees" disabled>employees</button>
                    <button title="news" onClick={this.handleClick}>news</button>
                    <Employees />
                </div>
            )
        } else {
            return (
                <div>
                    <button title="employees" onClick={this.handleClick}>employees</button>
                    <button title="news" disabled>news</button>
                    <News />
                </div>
            )
        }
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)