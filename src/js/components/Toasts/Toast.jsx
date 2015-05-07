import React from 'react/addons';
import cx from 'classnames';

export default class ToastItem extends React.Component {
  render() {
    return (
      <div className="Toasts-toast">
        <div className="Toasts-toast-titlebar">
          <div className="Toasts-toast-titlebar-title">
            {this.props.title}
          </div>
          <button className="Toasts-toast-titlebar-close"
                  onClick={this.props.handleClose}>
            <i className="fa fa-close"></i>
          </button>
        </div>
        <div className="Toasts-toast-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

