import React from 'react';

import {Home, Logout} from '../../components/LinkTo.jsx';

import AuthenticatedComponent from '../../components/AuthenticatedComponent.jsx';

class Header extends React.Component {
  render() {
    return (
      <header className="MyHeader">
        <div className="MyHeader-nav">
          {this.props.nothing ?
            <Home><i className="fa fa-tachometer"></i></Home>
            : ''}
          {this.props.user ?
            <input type="text" placeholder="Search here..."/>
            : ''
          }
        </div>
        <div className="MyHeader-logo">
          <i className="fa fa-cogs"></i>
        </div>
        <div className="MyHeader-settings">
          {this.props.user ?
            <span>
          <a href="#"><i className="fa fa-comment"></i></a>
          <Logout><i className="fa fa-sign-out"></i></Logout>
            </span>
            : ''}
        </div>
      </header>
    );
  }
}

export default AuthenticatedComponent(Header);
