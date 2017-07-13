import Ember from 'ember';

export default Ember.Route.extend({

  model() {
      return Ember.RSVP.hash({
          beds: this.store.findAll('bed', {include: 'subBed'}),
          subBeds: this.store.findAll('subBed'),
      });
  },
  
});
