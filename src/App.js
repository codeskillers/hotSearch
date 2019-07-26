import React from 'react';
import './App.styl';
import Header from './common/Header/Header';
import Nav from './common/Nav/Nav';
import HotSearch from './pages/hotSearch/HotSearch';
import City from './pages/city/City';
import Topic from './pages/topic/Topic';
import NewDate from './pages/newDate/NewDate';
import SearchDetail from './common/SearchDetail/SearchDetail';
import TopicDetail from './common/TopicDetail/TopicDetail';
import NewdateDetail from './common/NewdateDetail/NewdateDetail';
import CityDetail from './common/CityDetail/CityDetail';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
class App extends React.Component {
    render() {
      return (
        <div className="App">
           <Header></Header>
            <Router>
             <Nav></Nav>
                <Switch>
                    <Route path="/HotSearch" component={HotSearch} />
                    <Route path="/Topic" component={Topic} />
                    <Route path="/NewDate" component={NewDate} />
                    <Route path="/City" component={City} />
                    <Route path="/SearchDetail" component={SearchDetail} />
                    <Route path="/TopicDetail" component={TopicDetail} />
                    <Route path="/NewdateDetail" component={NewdateDetail} />
                    <Route path="/CityDetail" component={CityDetail} />
                    <Redirect from="/" to="/HotSearch" />
                </Switch>
            </Router>
        </div>
      );
    }
}
export default App;
