import React from 'react';
import axios from 'axios';
import './NewdateDetail.styl';
import Scroll from '../scroll/Scroll';
class NewdateDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchDetail: []
        }
    }
     componentWillMount() {
        axios.get('https://www.easy-mock.com/mock/5d2c42e11ebe3b280d8bf11a/hotSearch/NewdateDetail')
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
     render() {
         return (
             <div className="NewdateDetail">
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
                                <span className="bottom-good">
                                    0
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
export default NewdateDetail;