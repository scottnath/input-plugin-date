'use strict';

/**
 * date Input Plugin
 *
 *
 * An input plugin for a single date input type.
 */
const validation = require('./lib/validation.js');

/**
 * Single date Input Plugin
 * @module dateInputPlugin
 */
module.exports = {
  name: 'date',
  description: 'An input plugin for a single date input type.',
  validation: {
    dateValidation: validation,
  },
  inputs: {
    date: {
      validation: {
        function: 'dateValidation',
        on: 'blur',
      },
      label: 'date',
      placeholder: 'date',
      type: 'date',
    },
  },
  html: '<label for="{{date.id}}">{{date.label}}</label><input type="{{date.type}}" id="{{date.id}}" name="{{date.name}}" value="{{date.value}}" placeholder="{{date.placeholder}}" />',
};
