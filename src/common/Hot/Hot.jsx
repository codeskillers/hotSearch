import React from 'react';
import './Hot.styl';
class Hot extends React.Component {
    componentWillMount() {
        // console.log(this.props.hot);
    }
     render() {
         return (
             <div className={`${this.props.hot > 60 ? 'hotWrapper1' : `${this.props.hot > 40 ? 'hotWrapper2' : `${this.props.hot>=10? 'hotWrapper3' : null}`}`}`}>
                 
             </div>
         )
     }
}
export default Hot;