;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
// Application bootstrapper

module.exports = Em.Application.create();
},{}],2:[function(require,module,exports){
require('./helpers/home');
},{"./helpers/home":3}],3:[function(require,module,exports){
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
},{"../app":1}],4:[function(require,module,exports){
window.App = require('./app');

require('./templates');
require('./helpers');
require('./router');
},{"./app":1,"./helpers":2,"./router":5,"./templates":6}],5:[function(require,module,exports){
var App = require('./app');

App.IndexRoute = Em.Route.extend({
	redirect:function(){
        this.transitionTo('home');
    }
});

App.Router.map(function(){
    this.route('index',{path:'/'});
    this.route('home');
});
},{"./app":1}],6:[function(require,module,exports){
Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"container\">\n	<h1>Welcome to Ember-Sails</h1>\n\n	<div class=\"jumbotron\">\n	<p>You are now looking at:</p>\n	  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n	</div>\n\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("home.hbs");
  
});
},{}]},{},[4])
;