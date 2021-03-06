import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service("session"),
  actions: {
    authenticate(){
      let {login, password} = this.getProperties("login", "password");
      this.get("session").authenticate("authenticator:devise", login, password)
        .then( () => {
          this.set('errorMessage', null);
        },
        (reason) => {
          this.set('errorMessage', reason.error || reason);
        });
    }
  }
});
