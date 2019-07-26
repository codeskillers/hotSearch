import React from 'react';
import axios from 'axios';
import Scroll from '../../common/scroll/Scroll';
import './NewDate.styl';
class NewDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: []
        }
    }
    componentWillMount() {
        axios.get('https://www.easy-mock.com/mock/5d2c42e11ebe3b280d8bf11a/hotSearch/NewDate')
        .then(res => {
            console.log('topicDetail', res);
            this.setState({
                topic: res.data.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
    toTopicDetail = (index) =>{
        this.props.history.push({pathname: '/NewdateDetail', state: index})
    }
    render() {
        return (
            <div className="NewDateWrapper">
              <Scroll onScroll={()=>{}}>
              <div className="inWrapper">
                 {
                     this.state.topic.map((item, index) => {
                         return (
                             <div className="inWrapper-item" key={index} onClick={()=>{this.toTopicDetail(index)}}>
                                  <div className="item-cover">
                                      <img src={item.coverImg} alt="" className="coverImg"/>
                                  </div>
                                  <p className="item-title">{item.title}</p>
                                  <p className="item-desc">{item.desc}</p>
                             </div>
                         )
                     })
                 }
              </div>
              </Scroll>
            </div>
        )
    }
}
export default NewDate;