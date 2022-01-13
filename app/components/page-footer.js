import Component from '@ember/component';
import { toLeft, toRight } from 'ember-animated/transitions/move-over';

export default Component.extend({

  tagName: '',

  isCurrentLanguageEnUs: true,

  toLeft,
  toRight,

});
