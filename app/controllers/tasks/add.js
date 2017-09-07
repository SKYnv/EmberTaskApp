import Ember from 'ember';

export default Ember.Controller.extend({
	isExpanded: true,
	title: '',
	isValid: Ember.computed.match('title', /\w*/),
	
	actions: {
    addTask() {
    	const taskTitle = this.get('title');
    	this.set('title', '');
    	//console.log(this.getProperties('title'));
    	//console.log(taskTitle);
    	
    	//hack
    	const myController = this.container.lookup('controller:tasks.add');
    	//console.log(this.container.lookup('controller:tasks.add'));
    	console.log(Ember.getOwner(this).lookup('controller:tasks.add'));
    	
    	if (!taskTitle) {
    		alert('Please type a task title!');
    	}else{
			let nextId;
			let store;
			store = this.get('store');
			this.get('store').findAll('task').then(function(tasks) {
				tasks.getEach('id');
				nextId = Math.max(...(tasks.mapBy('id')));
				var task = store.createRecord('task', {title: taskTitle, id:nextId+1});
				task.save();
				myController.transitionToRoute('tasks');
				});
			}
	}
}

});
