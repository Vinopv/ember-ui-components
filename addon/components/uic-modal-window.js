/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-modal-window';

const computed = Ember.computed;
const alias = computed.alias;

/**
  @class ModalWindowComponent
  @namespace Components
*/
export default Ember.Component.extend({

  layout,

  /**
    Injected LookupService
    @property lookup
    @type {Object}
    @private
  */
  lookup: Ember.inject.service(),

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-modal-window', 'uic-modal-container']`
  */
  classNames: ['uic-modal-window', 'uic-modal-container'],

  /**
    @property showCloseButton
    @type {Boolean}
    @default `true`
  */
  showCloseButton: true,

  /**
    Alias of `lookup.currentRouteName`
    @property currentRouteName
    @type {String}
    @private
  */
  currentRouteName: alias('lookup.currentRouteName'),

  /**
    @property parentRouteName
    @type {String}
    @private
  */
  parentRouteName: alias('lookup.parentRouteName'),

  /**
    @event didInsertElement
    @private
  */
  didInsertElement() {
    this._super(...arguments);
    Ember.$('body').addClass('modal-window-is-open');
  },

  /**
    @event didDestroyElement
    @private
  */
  didDestroyElement() {
    this._super(...arguments);
    Ember.$('body').removeClass('modal-window-is-open');
  },

  /**
    @method _closeModal
    @private
  */
  _closeModal() {
    this.sendAction('closeModal');
  },

  actions: {

    /**
      @method closeModal
    */
    closeModal() {
      this._closeModal();
    }
  }
});