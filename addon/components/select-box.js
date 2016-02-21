/**
  @module ember-ui-components
*/
import Ember from 'ember';
import layout from '../templates/components/select-box';

/**
  # SelectBox

  Basic select element

  ```
  {{select-box
    selected=selectBoxValue
    options=selectBoxOptions}}
  ```

  The above will produce the same result as manually crafting a select element like below.
  ```
  <select onchange={{action (mut selectBoxValue) value="target.value"}}>
    {{#each selectBoxOptions as |option|}}
      <option value={{option}} selected={{is-equal selectBoxValue option}}>
        {{option}}
      </option>
    {{/each}}
  </select>
  ```

  @class SelectBoxComponent
  @namespace Components
*/
export default Ember.Component.extend({

  /**
    @property layout
    @type {String}
    @private
  */
  layout: layout,

  /**
    @property tagName
    @type {String}
    @private
    @default `select`
  */
  tagName: 'select',

  /**
    @property classNames
    @type {Array}
    @private
    @default `['select-box']`
  */
  classNames: ['select-box'],

  /**
    ## Selected

    The selected value.

    @property selected
    @type {String}
  */
  selected: null,

  /**
    ## Options

    This can be an array of strings

    ```
    ['Active', 'Complete']
    ```

    ...or can be an array of objects.  The objects should have a `value` and a
    `text` property.

    ```
    {
      value: 'active-value',
      text: 'Active'
    },
    {
      value: 'complete-value',
      text: 'Complete'
    }
    ```

    @property options
    @type {Array}
  */
  options: [],

  /**
    Set the `selected` value when the element changes.

    @event change
  */
  change(evt) {
    this.set('selected', evt.target.value);
  }
});
