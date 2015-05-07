require('./Toasts.css');

import React from 'react/addons';
import Toast from './Toast.jsx';

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class Toasts extends React.Component {
  render() {
    const toastItems = this.props.toasts.map((t) => {
      return (
        <Toast
          handleClose={() => this.props.handleClose(t.key)}
          key={t.key}
          {...t}/>
      );
    });
    return (
      <div className="Toasts">
        <ReactCSSTransitionGroup transitionName="fade">
          {toastItems}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
