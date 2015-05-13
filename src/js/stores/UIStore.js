import EventEmitter from 'events';
import Immutable from 'immutable';

import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/UIConstants';
import Actions from '../actions/UIActions';

const CHANGE_EVENT = 'change';

const _data = {
  toastData: Immutable.List(),
  flyoutData: Immutable.Map({
    isOpen: false,
    title: null,
    children: null
  })
};

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
  getToastData: function() {
    return _data.toastData;
  },

  /**
   * Get toasts
   * @return {array}
   */
  getFlyoutData: function() {
    return _data.flyoutData;
  }
});


function toastAdd(content) {
  const id = Math.random();

  _data.toastData = Store.getToastData().push(Immutable.Map({
    id: id,
    action: content.action,
    children: content.children
  }));
}
function toastExpire(id) {
  let idx = Store.getToastData().findIndex(t => t.get('id') === id);
  _data.toastData = Store.getToastData().update(idx, (t) => t.set('expired', true));
}
function toastRemove(id) {
  console.info('Toast Remove: ', id);
  _data.toastData = Store.getToastData().filter(t => t.get('id') !== id);
}

function flyoutOpen(content) {
  _data.flyoutData = Store.getFlyoutData().merge(Immutable.Map({
    isOpen: true,
    title: content.title,
    children: content.children
  }));
}
function flyoutClose() {
  _data.flyoutData = Store.getFlyoutData().set('isOpen', false);
}

// Register to handle all updates
AppDispatcher.register(function(action) {
  switch (action.actionType) {
    case Constants.UI_TOAST_ADD:
      toastAdd(action.content);
      break;
    case Constants.UI_TOAST_REMOVE:
      toastRemove(action.key);
      break;
    case Constants.UI_TOAST_EXPIRE:
      toastExpire(action.key);
      break;

    case Constants.UI_FLYOUT_OPEN:
      flyoutOpen(action.content);
      break;
    case Constants.UI_FLYOUT_CLOSE:
      flyoutClose();
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
