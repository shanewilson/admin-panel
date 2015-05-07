
import React from 'react/addons';
import cx from 'classnames';

export default class Authenticator extends React.Component {
  render() {
    let status = '';
    if (this.props.status === 'checking') {
      status = 'fa-spin fa-cog';
    } else if (this.props.status === 'found') {
      status = 'fa-user';
    } else if (this.props.status === 'missing') {
      status = 'fa-sign-in';
    }

    return (<div className="Authenticator">
      <i className={'fa ' + status}></i>
    </div>);
  }
}
