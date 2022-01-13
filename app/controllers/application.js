import config from '../config/environment';
import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  intl: service(),

  loadListener: window.addEventListener('load', () => {
    let navItemActive;
    var navItem1 = document.getElementById('nav-link-1');
    if (navItem1.className.includes("active")) {
      navItem1.style.color = '#edd5ea';
      navItem1.style.backgroundColor = '#61505f';
      navItem1.style.boxShadow = '0px -1px 5px #888888';
    }
    var navItem2 = document.getElementById('nav-link-2');
    if (navItem2.className.includes("active")) {
      navItem2.style.color = '#edd5ea';
      navItem2.style.backgroundColor = '#61505f';
      navItem2.style.boxShadow = '0px -1px 5px #888888';
    }
    var navItem3 = document.getElementById('nav-link-3');
    if (navItem3.className.includes("active")) {
      navItem3.style.color = '#edd5ea';
      navItem3.style.backgroundColor = '#61505f';
      navItem3.style.boxShadow = '0px -1px 5px #888888';
    }
    var navItem4 = document.getElementById('nav-link-4');
    if (navItem4.className.includes("active")) {
      navItem4.style.color = '#edd5ea';
      navItem4.style.backgroundColor = '#61505f';
      navItem4.style.boxShadow = '0px -1px 5px #888888';
    }

  }, false),

  clickListener: document.body.addEventListener('click', () => {
    let navItemActive;
    var navItem1 = document.getElementById('nav-link-1');
    if (navItem1.className.includes("active")) {
      navItem1.style.color = '#edd5ea';
      navItem1.style.backgroundColor = '#61505f';
      navItem1.style.boxShadow = '0px -1px 5px #888888';
    }
    var navItem2 = document.getElementById('nav-link-2');
    if (navItem2.className.includes("active")) {
      navItem2.style.color = '#edd5ea';
      navItem2.style.backgroundColor = '#61505f';
      navItem2.style.boxShadow = '0px -1px 5px #888888';
    }
    var navItem3 = document.getElementById('nav-link-3');
    if (navItem3.className.includes("active")) {
      navItem3.style.color = '#edd5ea';
      navItem3.style.backgroundColor = '#61505f';
      navItem3.style.boxShadow = '0px -1px 5px #888888';
    }
    var navItem4 = document.getElementById('nav-link-4');
    if (navItem4.className.includes("active")) {
      navItem4.style.color = '#edd5ea';
      navItem4.style.backgroundColor = '#61505f';
      navItem4.style.boxShadow = '0px -1px 5px #888888';
    }
  }, false),

  actions: {
    changeLanguage(isEnUs) {
      let locale;
      if (isEnUs) {
        locale = "ru-ru";
      }
      else {
        locale = "en-us";
      }
      return get(this, 'intl').set('locale', locale);
    }
  },
});
