requirejs.config({
    paths: {
		jquery: 'https://code.jquery.com/jquery-1.12.4.min',
		tmpl: 'tmpl'
    }
});

require(
    ['controller','model', 'view', 'jquery'],
    
    function( Controller, Model, View){
    	var toDoList = ['Check jQuery version!', 'Check sequence requires!', 'Start require.js'];
    	var model = new Model(toDoList);
    	var view = new View(model);
    	var controller = new Controller(model, view);
    }
);