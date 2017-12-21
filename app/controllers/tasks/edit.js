import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editTask: function(id) {
      var self = this;
      var title=this.get('model.title');
      var date=this.get('model.date');
      var description=this.get('model.description');

      // Update task
      this.store.findRecord('task', id).then(function(task){
        task.set('title', title);
        task.set('description', description);
        task.set('date', new Date(date));

        // Save to Database
        task.save();

        self.transitionTo('tasks');
      });
    }
  }
});
