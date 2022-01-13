import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  intl: service(),

  setupController(controller) {
    this._super(...arguments);
    // controller.set('isMobile', this.media.isMobile),
    controller.set('header', "header");
    controller.set('locale', this.intl.get('primaryLocale'));
    this._checkScroll(controller);
  },

  _checkScroll(controller) {
    window.addEventListener('scroll', (() => {
      let scrollPosition = Math.round(window.scrollY);
      if (scrollPosition > 123){
        controller.set('header', "sticky");
      }
      else {
        controller.set('header', "header");
      }
    }));
  }
});
