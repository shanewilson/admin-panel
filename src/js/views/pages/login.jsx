import React from 'react/addons';

import AuthActions from '../../actions/AuthActions';
import AuthStore from '../../stores/AuthStore';
import UIActions from '../../actions/UIActions';

import Panel from '../../components/Panel';

class Login extends React.Component {
  static willTransitionTo(transition) {
    if (AuthStore.getUser()) {
      transition.redirect('/');
    }
  }

  constructor() {
    super();

    this.login = this.login.bind(this);
    this.forward = this.forward.bind(this);
    this.open = this.open.bind(this);

    this.state = {
      status: 'checking'
    };
  }

  componentDidMount() {
    AuthStore.addChangeListener(this.forward);

    setTimeout(() => {
      let token = localStorage.getItem('token');
      if (token) {
        this.open(token);
        AuthActions.login(token);
      } else {
        this.setState({status: 'missing'});
        AuthActions.logout();
      }
    }, 1000);
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.forward);
  }

  login(user) {
    AuthActions.login(user);
  }

  forward() {
    var { router } = this.context;
    var nextPath = router.getCurrentQuery().nextPath || '/';
    router.replaceWith(nextPath);
  }

  open(token) {
    UIActions.toastAdd({
      children: (
        <div>
          Token found for <strong>{token}</strong>.
        </div>
      )
    });
  }

  render() {
    const checking = this.state.status === 'checking';
    const medallion = checking ?
      <i className='fa fa-spin fa-cog'></i> :
      <i className='fa fa-key'></i>;
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh'}}>
        <div style={{width: '75vw'}}>
          <Panel title="LOGIN" medallion={medallion}>
            <div style={{'alignSelf': 'center', padding: '2rem 0 5rem'}}>
              {checking ?
                <div>
                  <button disabled>Checking for Authentication Token</button>
                </div>
                :
                <div>
                  <button onClick={() => this.login('admin')}>I am admin!</button>
                  <button onClick={() => this.login('submitter')}>I am user!</button>
                </div>
              }
            </div>
          </Panel>
        </div>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.func
};

export default Login;
