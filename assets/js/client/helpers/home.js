var App = require('../app');

App.HomeController = Em.Controller.extend({
	submit: function(){
		var that = this;

		/*App.HomeModel.findAll().done(function(data){
			that.set('content',data);
		});*/

		var obj = {
			message: $('textarea').val()
		}

		//App.HomeModel.save(obj);

		socket.post('/messages',obj);
	}
});


App.HomeView = Em.View.extend({
	didInsertElement:function(){
		var that = this;
	}
});