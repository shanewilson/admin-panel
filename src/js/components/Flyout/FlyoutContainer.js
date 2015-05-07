import React from 'react/addons';
import Immutable from 'immutable';

import Flyout from './Flyout.jsx';
import Store from './FlyoutStore';
import Actions from './FlyoutActions';

export default class FlyoutContainer extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.close = this.close.bind(this);

    this.state = {
      data: this._getFlyoutState()
    };
  }

  _getFlyoutState() {
    return Immutable.Map({
      isOpen: Store.isOpen(),
      title: Store.getTitle(),
      children: Store.getChildren()
    });
  }

  componentDidMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  close() {
    Actions.close();
  }

  onChange() {
    this.setState({data: this._getFlyoutState()});
  }

  render() {
    return (
      <Flyout
        isOpen={this.state.data.get('isOpen')}
        handleClose={this.close}
        title={this.state.data.get('title')}>
        {this.state.data.get('children')}
        </Flyout>
    );
  }
}
