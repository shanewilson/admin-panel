import React from 'react/addons';
import cx from 'classnames';

import {Link} from 'react-router';

var LinkTo = React.createClass({
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.object
    ]).isRequired,
    target: React.PropTypes.string.isRequired
  },
  render: function() {
    var target = this.props.target;
    return (
      <Link
        className={cx('ns-LinkTo', 'ns-LinkTo--' + this.props.target)}
        to={target}>
        {this.props.children}
      </Link>
    );
  }
});

var Home = React.createClass({
  render: function() {
    var linkName = this.props.children || 'Home';
    return <LinkTo target='home'>{linkName}</LinkTo>;
  }
});

var Login = React.createClass({
  render: function() {
    var linkName = this.props.children || 'Login';
    return <LinkTo target='login'>{linkName}</LinkTo>;
  }
});

var Logout = React.createClass({
  render: function() {
    var linkName = this.props.children || 'Logout';
    return <LinkTo target='logout'>{linkName}</LinkTo>;
  }
});

var External = React.createClass({
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    href: React.PropTypes.string.isRequired
  },
  render: function() {
    var linkName = this.props.children || this.props.href;
    return <a href={this.props.href}>X::{linkName}</a>;
  }
});

export default {
  LinkTo: LinkTo,
  Home: Home,
  External: External,
  Login: Login,
  Logout: Logout
};
