import config from '../config/environment';
import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  intl: service(),

  actions: {
    changeLanguage(language) {
      let locale;
      if (language === "left") {
        locale = "en-us";
      }
      else {
        locale = "ru-ru";
      }
      return get(this, 'intl').set('locale', locale);
    }
  },
});
