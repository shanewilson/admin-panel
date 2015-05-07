import EventEmitter from 'events';
import Immutable from 'immutable';

import AppDispatcher from '../../dispatcher/AppDispatcher';
import Constants from './ToastsConstants';
import Actions from './ToastsActions';

const CHANGE_EVENT = 'change';

var _data = Immutable.List();

const Store = Object.assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    console.log(callback);
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  /**
   * Get toasts
   * @return {array}
   */
  getToasts: function() {
    return _data;
  }
});


function add(content) {
  let id = Math.random();

  _data = _data.push({
    key: id,
    title: content.title,
    children: content.children
  });

  setTimeout(() => {
    Actions.remove(id);
  }, 3000);
}

function remove(id) {
  _data = _data.filter(t => t.key !== id);
}

// Register to handle all updates
AppDispatcher.register(function(action) {
  switch (action.actionType) {
    case Constants.TOAST_ADD:
      add(action.content);
      break;

    case Constants.TOAST_REMOVE:
      remove(action.id);
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
