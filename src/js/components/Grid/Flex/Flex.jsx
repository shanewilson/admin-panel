require('./Flex.css');

import React from 'react/addons';
import cx from 'classnames';

export default class Flex extends React.Component {
  render() {
    const classes = cx('Flex', this.props.className);
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}
