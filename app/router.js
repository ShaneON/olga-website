import EmberRouter from '@ember/routing/router';
import config from 'olga-personal-website/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('teaching');
  this.route('translation');
  this.route('contact');
});
