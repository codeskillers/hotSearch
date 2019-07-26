import React from 'react';
import axios from 'axios';
import './SearchDetail.styl';
import Scroll from '../scroll/Scroll';
import store from '../../store/index';
class SearchDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchDetail: [],
            goods: store.getState(),
            a: false,
            class1: 0
        }
        store.subscribe(this.ChangeGoods)
    }
  
     componentWillMount() {
        console.log(this.state.goods);
        axios.get('https://www.easy-mock.com/mock/5d2c42e11ebe3b280d8bf11a/hotSearch/searchDetail')
        .then(res => {
            const arr = res.data.data.filter((item,index)=> index===this.props.location.state).flat(1)
            this.setState({
                searchDetail: arr,
            })
            console.log(this.state.searchDetail);
        }).catch(err => {
            console.log(err);
        })
     }
     handleGoodsOne = (index) =>{
        var  action = {}
        this.setState({
            a: true
        })
        if(this.state.a) {
            action = {
                type: 'add_good',
                index
            }
            store.dispatch(action)
            this.setState({
                a: false,
                class1: 1
            })
        } 
        if(!this.state.a){
             action = {
                type: 'dele_good',
                index
            }
            this.setState({
                class1: ''
            })
            store.dispatch(action)
        }
     }
     ChangeGoods = () => {
         this.setState({
             goods: store.getState()
         })
     }
     render() {
         return (
             <div className="SearchDetail">
                 <p className="top"></p>
                 <p className="hotDot">热门</p>
                 <div className="outWrapper">
                     <Scroll onScroll={()=>{}}>
                     <div className="detail-one">
                    {
                        this.state.searchDetail.map((item,index)=>{
                            return (
                            <div className="detail" key={index}>
                              <div className="detail-avatar">
                              <img src={item.avatar} alt="" className="avatarImg"/>
                              </div>
                              <p className="detail-nickname">{item.nickname}</p>
                              <p className="detail-from">来自垃圾桶捡来的iphoneX</p>
                              <p className="detail-text">{item.text}</p>
                              <div className="detail-imgs">
                                  {
                                      item.imgs.map((item,index)=>{
                                          return (
                                               <div className="detail-img" key={index}>
                                                    <img src={item} alt="" className="detail-img_one"/>
                                               </div>
                                          )
                                      })
                                  }
                              </div>
                              <div className="detail-bottom">
                                <span className="bottom-share">
                                    {item.share}
                                </span>
                                <span className="bottom-comment">
                                    {item.comment}
                                </span>
                                <span className={`bottom-good ${this.state.class1 === 1 ? 'active' : ''}`} onClick={()  => this.handleGoodsOne(index)}>
                                   {this.state.goods.initValue}
                                </span>
                            </div>
                            </div>
                            )
                        })
                    }
                 </div>
                     </Scroll>
                 </div>
             </div>
         )
     }
}
export default SearchDetail;