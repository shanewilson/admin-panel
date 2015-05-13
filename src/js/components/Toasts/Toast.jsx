import React from 'react/addons';
import cx from 'classnames';

import Actions from '../../actions/UIActions';

class Toast extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentWillEnter(callback) {
    setTimeout(callback, 1000);
  }

  componentDidEnter() {
    this.setState({className: ['animated', 'fadeInUp']});
    setTimeout(() => {
      Actions.toastRemove(this.props.id);
    }, 3000);
  }

  componentWillLeave(callback) {
    this.setState({className: ['animated', 'fadeOutDown']});
    setTimeout(callback, 1000);
  }

  render() {
    const classNames = cx('Toasts-toast', this.state.className);

    return (
      <li className={classNames}>
        <span className="Toasts-toast-content">
          {this.props.children}
        </span>
        { this.props.action ?
          <a href="#" className="Toasts-toast-action"
             onClick={this.props.handleClick}>
            {this.props.action}
          </a>
          : '' }
      </li>
    );
  }
}

Toast.propTypes = {
  handleClick: React.PropTypes.func,
  action: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]).isRequired
};

export default Toast;

