import Ember from 'ember';

export default Ember.Route.extend({

  redirect() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('index');
    }
  },

  actions: {
    login(email, password) {
      debugger;
      let session = this.get('session');
      this.intermediateTransitionTo('login.loading');
      session.open('firebase', {
        provider: 'password',
        email,
        password
      }).then(() => {
        this.transitionTo('index');
      }, error => {
        if(error) {
          this.controller.set('invalidCredentials', true);
        }
        this.intermediateTransitionTo('login');
      });
    },

    willTransition(transition) {
      if(transition) {
        this.controller.set('invalidCredentials', false);
      }
    },

    forgotPassword() {

      this.transitionTo('forgot');

    },
  },
});
