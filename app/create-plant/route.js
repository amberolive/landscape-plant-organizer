import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createPlant(commonName, genus, species, trinimial, fertilizationComments, months) {
      debugger;
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
      });

      fertilization.save().then(function() {
        plant.save();
      });
    }
  }
});
