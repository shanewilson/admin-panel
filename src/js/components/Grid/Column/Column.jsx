import React from 'react/addons';
import cx from 'classnames';

import Flex from '../Flex';

export default class Column extends React.Component {
  render() {
    const classes = cx('Flex--column', this.props.className);
    return (
      <Flex className={classes}>
        {this.props.children}
      </Flex>
    );
  }
}
