import React from 'react';
import SearchBg from '../../static/images/searchBg.png'
import './Header.styl';
class Header extends React.Component {
     render() {
         return (
             <div className="header-imgWrapper">
                <img src={SearchBg} alt=""  className="header-bg" />
             </div>
         )
     }
}
export default Header;