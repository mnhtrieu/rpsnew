import React, {Component} from 'react';

// PAGES
import Homepage from './pages/Homepage'
import Contact from './pages/Contact'

// ROUTER
import { Route, Switch } from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>

            </div>
        )
    }
}

export default App;
