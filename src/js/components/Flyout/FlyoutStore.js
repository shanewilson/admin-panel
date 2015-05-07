import EventEmitter from 'events';
import Immutable from 'immutable';

import AppDispatcher from '../../dispatcher/AppDispatcher';
import Constants from './FlyoutConstants';
import Actions from './FlyoutActions';

const CHANGE_EVENT = 'change';

var _data = Immutable.Map({
  open: false,
  content: null
});

const Store = Object.assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  /**
   * Get the state
   * @return {boolean}
   */
  isOpen: function() {
    return _data.get('open');
  },

  /**
   * Get the content
   * @return {Component}
   */
  getTitle: function() {
    return _data.get('title');
  },

  /**
   * Get the content
   * @return {Component}
   */
  getChildren: function() {
    return _data.get('children');
  }
});


function open(content) {
  console.log('store1: ', content);
  _data = _data.merge(Immutable.Map({
    open: true,
    title: content.title,
    children: content.children
  }));
}

function close() {
  _data = _data.set('open', false);
}

// Register to handle all updates
AppDispatcher.register(function(action) {
  switch (action.actionType) {
    case Constants.FLYOUT_OPEN:
      open(action.content);
      break;

    case Constants.FLYOUT_CLOSE:
      close();
      break;

    default:
      return true;
  }

  // This often goes in each case that should trigger a UI change. This store
  // needs to trigger a UI change after every view action, so we can make the
  // code less repetitive by putting it here.  We need the default case,
  // however, to make sure this only gets called after one of the cases above.
  Store.emitChange();

  return true; // No errors.  Needed by promise in Dispatcher.
});

export default Store;
