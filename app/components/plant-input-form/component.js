import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPlant() {
      debugger
      this.sendAction('createPlant', this.get('commonName'), this.get('genus'), this.get('species'), this.get('trinimial'), this.get('fertilizationComments'), this.get('months'));
    }
  }
});
