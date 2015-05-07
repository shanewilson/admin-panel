import React from 'react/addons';
import Immutable from 'immutable';

import Toasts from './Toasts.jsx';
import Store from './ToastsStore';
import Actions from './ToastsActions';

export default class ToastsContainer extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);

    this.state = {
      toasts: Store.getToasts()
    };
  }

  componentDidMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({toasts: Store.getToasts()});
  }

  handleClose(id) {
    Actions.remove(id);
  }

  render() {
    return (
      <Toasts
        handleClose={this.handleClose}
        toasts={this.state.toasts}/>
    );
  }
}
