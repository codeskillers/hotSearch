import React from 'react';
import axios from 'axios';
import './HotSearch.styl';
import Scroll from '../../common/scroll/Scroll';
import Hot from '../../common/Hot/Hot';
class HotSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hotSearch: []
        }
    }
    componentWillMount() {
        // 发起get请求 
        axios.get('https://www.easy-mock.com/mock/5d2c42e11ebe3b280d8bf11a/hotSearch/index')
        .then(res => {
             this.setState({
                 hotSearch: res.data.data
             })
        }).catch(err => {
            console.log('请求错误',err);
        })
     }
     ToSearchDetail = (index) => {
         this.props.history.push({pathname: '/SearchDetail',state: index})
     }
    render() {
        return (
            <div className="HotSearch">
              <Scroll onScroll={() => {}}>
              <div className="SearchWrapper">
               {
                    this.state.hotSearch.map((item, index) => {
                        return (
                            <div className="HotSearch-item" key={index} onClick={() => {this.ToSearchDetail(index)}}>
                            <span className="item-rank">
                              {item.rank}
                            </span>
                           <span className="item-kein">
                           <span className="item-keyword">
                              {item.keyword}
                            </span>
                            <span className="item-index">
                              {item.index}
                            </span>
                           </span>
                            <span className="item-hot">
                              <Hot hot={item.hot}></Hot>
                            </span>
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
export default HotSearch;