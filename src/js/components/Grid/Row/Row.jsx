import React from 'react/addons';
import cx from 'classnames';

import Flex from '../Flex';

export default class Row extends React.Component {
  render() {
    const classes = cx('Flex--row', this.props.className);
    return (
      <Flex className={classes}>
        {this.props.children}
      </Flex>
    );
  }
}
