import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  intl: service(),

  beforeModel() {
    this.intl.setLocale([navigator.language, 'en-us']);
}
});
