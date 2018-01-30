import Ember from 'ember';

export default Ember.Component.extend({

  bedService: Ember.inject.service('bed'),

  subBedToAdd: '',

  actions: {
    createPlant() {
      this.send('addBed');
      let beds = this.get('bedService').get('bedsToAdd');
      this.sendAction('createPlant', this.get('commonName'), this.get('genus'), this.get('species'), this.get('trinimial'), this.get('fertilizationComments'), this.get('monthsToAdd'), beds);
    },

    getSubBeds(bed) {
      //this.get('bedService').getSubBeds(bed);
    },

    addSubBed(subBed) {
      this.set('subBedToAdd', subBed);
      Ember.set(subBed, "quantity", this.get('quantity'));
    },

    addBed() {
      this.send('addSubBed', this.get('subBedToAdd'));
      this.get('bedService').addBed(this.get('subBedToAdd'));
    }
  }
});
