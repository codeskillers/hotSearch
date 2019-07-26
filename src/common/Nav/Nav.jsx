import React from 'react';
import './Nav.styl';
import {withRouter} from "react-router-dom"
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            tab: [
            {
                name:'热搜榜',
                path:'/HotSearch',
               
            },
            {
                name:'话题榜',
                path: '/Topic',
                
            },
            {
                name:'新时代',
                path: '/NewDate',
               
            },
            {
                name:'同城榜',
                path: '/City',
        
            }
            ],
        }
    }
        switchTab = (index, pathname) => {
            this.setState({
                current: index
            })
         this.props.history.push({pathname: pathname})
    }
     render() {
         return (
             <div className="navWrapper">
                 <ul className="ulWrapper">
                    {
                        this.state.tab.map((tabItem, index) => {
                            return (
                                <li className={`nav-item ${index===this.state.current ? "active" : "noactive"}`} key={index} onClick={() => this.switchTab(index,tabItem.path)}>{tabItem.name}</li>
                            )
                        })
                    }
                 </ul>
             </div>
         )
     }
}
export default withRouter(Nav);