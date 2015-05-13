import React from 'react/addons';
const ReactTransitionGroup = React.addons.TransitionGroup;
import cx from 'classnames';

import { Flex } from './Grid';

export default (ComposedComponent) => {
  return class RemovableComponent extends React.Component {
    constructor() {
      super();
      this.state = {removed: false};

      this.handleRemoval = this.handleRemoval.bind(this);
    }

    handleRemoval() {
      this.setState({removed: true});
    }

    render() {
      return (!this.state.removed ?
        <ComposedComponent
          handleRemoval={this.handleRemoval}
          {...this.props} />
        : <span></span>
      );
    }
  };
};
