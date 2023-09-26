import React from "react";
import './Locker.scss'
import Header from '../../components/header/Header';
import FavoriteCount from "./FavoriteCount";
import BookmarkCount from "./BookmarkCount";

const menuList = {
  0: <FavoriteCount />,
  1: <BookmarkCount />,
};


class Locker extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  changeMenu = (menuIndex) =>{
    this.setState({menu : menuIndex});
  }

  render(){
    return(
      <>
        <Header/>
          <section className="l_warp">
              {/* <h1>보관함</h1> */}
                <div>
                  <div className="menuBar">
                      <ul className="tabs">
                        <li className={`${this.state.menu === 0? 'active': ''}`} onClick={() => this.changeMenu(0)}>좋아요</li>
                        <li className={`${this.state.menu === 1? 'active': ''}`} onClick={() => this.changeMenu(1)}>북마크</li>
                      </ul>
                    </div>
                    <div className="contentArea">
                      {menuList[this.state.menu]}
                    </div>
                </div>
          </section>
      </>
    )
  }
}

export default Locker
