/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/uic-close-button';

/**
  # CloseButtonComponent

  ```
  {{uic-close-button action="actionName"}}
  ```

  @class CloseButtonComponent
  @namespace Components
*/
export default Ember.Component.extend({
  layout,

  /**
    @property tagName
    @type {String}
    @private
    @default `button`
  */
  tagName: 'button',

  /**
    @property classNames
    @type {Array}
    @private
    @default `['uic-close-button']`
  */
  classNames: ['uic-close-button'],

  /**
    @event click
  */
  click() {
    this.sendAction();
  }
});
