require('./Toasts.css');

import React from 'react/addons';
import Toast from './Toast.jsx';

const ReactTransitionGroup = React.addons.TransitionGroup;

export default class Toasts extends React.Component {
  render() {
    const toastItems = this.props.children.take(1).map(t => {
      return (
        <Toast key={t.get('id')} {...t.toJS()}/>
      );
    });

    return (
      <ReactTransitionGroup component="ul" className="Toasts">
        {toastItems}
      </ReactTransitionGroup>
    );
  }
}

Toasts.propTypes = {
  children: React.PropTypes.object.isRequired
  //children: React.PropTypes.arrayOf(
  //  React.PropTypes.shape({
  //    id: React.PropTypes.number.isRequired,
  //    action: React.PropTypes.string,
  //    children: React.PropTypes.string.isRequired
  //  })
  //).isRequired
};

export default Toasts;
