require('./Flyout.css');

import React from 'react/addons';
import cx from 'classnames';

class Flyout extends React.Component {
  render() {
    return (
      <aside className={cx('Flyout', {
      'Flyout--open': this.props.isOpen
      })}>
        <div className="Flyout-titlebar">
          <div className="Flyout-titlebar-title">
            {this.props.title}
          </div>
          <button className="Flyout-titlebar-close"
                  onClick={this.props.handleClose}>
            <i className="fa fa-close"></i>
          </button>
        </div>
        <div className="Flyout-content">
          {this.props.children}
        </div>
      </aside>
    );
  }
}

Flyout.propTypes = {
  title: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
  children: React.PropTypes.element,
  isOpen: React.PropTypes.bool.isRequired,
  handleClose: React.PropTypes.func.isRequired
};

export default Flyout;
