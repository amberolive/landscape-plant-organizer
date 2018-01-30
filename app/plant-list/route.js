import Ember from 'ember';

export default Ember.Route.extend({

  model() {
      return Ember.RSVP.hash({
          plants: this.store.findAll('plant', {include: 'beds'}, {include: 'fertilization'}),
          fertilizations: this.store.findAll('fertilization'),
          subBeds: this.store.findAll('sub-bed'),
      });
  },
});
