import React, {Component} from 'react';

// PAGES
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Main from './Game/Main';
import Example from './components/ExampleComponent'

// ROUTER
import {Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/play" component={Main}/>
                <Route path="/test" component={Example}/>
                <Route component={Homepage}/>
            </Switch>
        );
    }
}

export default App;
