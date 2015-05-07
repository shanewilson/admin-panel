import React from 'react/addons';
import cookie from 'react-cookie';
import Immutable from 'immutable';

import AuthActions from '../../actions/AuthActions';
import AuthStore from '../../stores/AuthStore';
import ToastsActions from '../Toasts/ToastsActions';

import LinkTo from '../LinkTo.jsx';
import Authenticator from './view.jsx';

export default class AuthenticatorContainer extends React.Component {

  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
    this._getAuthState = this._getAuthState.bind(this);

    this.state = {
      data: Immutable.Map({
        status: 'checking',
        user: null
      })
    };
  }

  componentDidMount() {
    AuthStore.addChangeListener(this._onChange);

    setTimeout(() => {
      let token = cookie.load('token');

      if (token) {
        console.log('found!');
        this.open();
        this.setState(prev => ({
          data: prev.data.set('status', 'found')
        }));
        AuthActions.login(token);
      } else {
        console.log('nothing!');
        this.setState(prev => ({
          data: prev.data.set('status', 'missing')
        }));
        AuthActions.logout();
      }
    }, 1000);
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(this._getAuthState());
  }

  _getAuthState() {
    return prev => ({
      data: prev.data.set('user', AuthStore.getUser())
    });
  }

  open() {
    ToastsActions.toast({
      title: <span>Token Found!</span>,
      children: (
        <div>
          Token found for user <i className="fa fa-user"></i> username.<br />

        </div>
      )

    });
  }

  render() {
    //let status = this.state.data.get('status');
    //
    //return (
    //  <Authenticator
    //    status={ status }
    //    handleOpen={this.open}
    //    />
    //);
    return false;
  }
}
