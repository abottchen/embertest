import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addTask: function() {
      var title=this.get('title');
      var date=this.get('date');
      var description=this.get('description');

      // Create new
      var newTask = this.store.createRecord('task', {
        title: title,
        description: description,
        date: new Date(date)
      });
      
      // Save to Database
      newTask.save();

      // Clear the form
      this.setProperties({
        title: '',
        description: '',
        date: ''
      });
    }
  }
});
