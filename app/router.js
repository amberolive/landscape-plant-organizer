import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', function() {});
  this.route('forgot');
  this.route('create-plant');
  this.route('beds');
  this.route('bed-input');
  this.route('bed-list');
  this.route('plant-list');
});

export default Router;
