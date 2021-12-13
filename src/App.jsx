import React, {Component} from 'react';


// Router
import {HashRouter as Router, Route, Switch} from "react-router-dom";

// CSS
import './css/App.css';
import './css/Mobile.css';

// Pages
import ComingSoon from './pages/ComingSoon';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ScrollApp from './pages/ScrollApp';


// App
class App extends Component {
    render() {
        return (
            <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={ComingSoon}/>
                            <Route exact path="/contact" component={Contact}/>
                            <Route
                                render={() => (
                                <div>
                                    <h3>404</h3>
                                </div>
                            )}/>
                        </Switch>
                    </div>
            </Router>
        );
    }
}

export default App;
