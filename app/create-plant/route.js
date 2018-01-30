import Ember from 'ember';

export default Ember.Route.extend({

  bedService: Ember.inject.service('bed'),

  model() {
      return Ember.RSVP.hash({
          beds: this.store.findAll('bed', {include: 'subBed'}),
          subBeds: this.store.findAll('subBed'),
      });
  },

  afterModel(model) {
    this.set('bedService.subBeds', model.subBeds);
  },

  actions: {
    createPlant(commonName, genus, species, trinimial, fertilizationComments, months, beds) {
      var store = this.store;
      var fertilization = store.createRecord('fertilization', {
        comments: fertilizationComments
      });
      months.forEach(function(month) {
        var newMonth = store.createRecord('month', {
          month: month,
        });
        fertilization.get('months').addObject(newMonth);
        newMonth.save();
      });
      var plant = store.createRecord('plant', {
        commonName: commonName,
        genus: genus,
        species: species,
        trinimial: trinimial,
        fertilization: fertilization,
        beds: beds,
      });
      fertilization.save().then(function() {
        plant.save();
      });
      Ember.$('.ui.dropdown').dropdown('clear');
      Ember.$('.ui.form').form('clear');
      this.get('bedService').get('bedsToAdd').clear();
    }
  }
});
