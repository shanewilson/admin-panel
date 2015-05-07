import React from 'react/addons';
import { RouteHandler } from 'react-router';
import cookie from 'react-cookie';

import Header from './views/common/Header.jsx';
import Flyout from './components/Flyout';
import FlyoutActions from './components/Flyout/FlyoutActions';
import FlyoutStore from './components/Flyout/FlyoutStore';
import Toasts from './components/Toasts';
import ToastsActions from './components/Toasts/ToastsActions';
import Authenticator from './components/Authenticator';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isFlyoutOpen: false
    };

    this.open = this.open.bind(this);
    this.slideOut = this.slideOut.bind(this);
  }

  open() {
    FlyoutActions.open({
        title: <div>Action!</div>,
        children: <div>Action!</div>
      }
    );
  }

  toast() {
    ToastsActions.toast({
        title: <div>Action!</div>,
        children: <div>Action!</div>
      }
    );
  }

  slideOut() {
    this.setState({isFlyoutOpen: FlyoutStore.isOpen()});
  }

  componentDidMount() {
    FlyoutStore.addChangeListener(this.slideOut);
  }

  componentWillUnmount() {
    FlyoutStore.removeChangeListener(this.slideOut);
  }

  render() {
    let body = this.state.isFlyoutOpen ?
      'MyApp-body MyApp-body--flyout' :
      'MyApp-body';
    return (
      <div className="MyApp">
        <Flyout />
        <div className={body}>
          <Toasts />
          <Header />
          <RouteHandler />
        </div>
      </div>
    );
  }
}
