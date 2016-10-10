//MVC
function Model(data) {
	var self = this;

	self.data = data;
/*add array element*/
	self.addItem = function (item) {
		if (item.length === 0) {
			return;
		}

		self.data.push(item);

		return self.data;
	};
/*remove array element*/
	self.removeItem = function (item) {
		var index = self.data.indexOf(item);

		if (index === -1) {
			return;
		}

		self.data.splice(index, 1);

		return self.data;
	};
/*edit array element*/
	self.editItem = function(item, newText, promka) {
		var index = self.data.indexOf(item);

		promka = prompt('Editing...', item);
		var newText = promka;

		if (newText.length === 0) {
			return;
		}

		self.data.splice(index,1, newText);

		return self.data;

	}

}

function View(model) {
	var self = this;
/*initialization template*/
	 function init() {
		var wrapper = tmpl($('#wrapper-template').html());
		$('body').append(wrapper);
		self.elements = {
			input: $('.item-value'),
			addBtn: $('.item-add'),
			listContainer: $('.item-list'),
			editInput: $('.item-edit'),
			editBtn: $('.btn-edit')
		};
		self.renderList(model.data);
	};
/*display list*/
	self.renderList = function (data) {
		var list = tmpl($('#list-template').html(), {data: data});
		self.elements.listContainer.html(list);
	};


	init();
}

function Controller(model, view) {
	var self = this;
/*events*/
	view.elements.addBtn.on('click', addItem);
	view.elements.listContainer.on('click', '.item-delete', removeItem);
	view.elements.listContainer.on('click', '.item-edit', editItem);
/*add*/
	function addItem() {
		var newItem = view.elements.input.val();
		model.addItem(newItem);
		view.renderList(model.data);
		view.elements.input.val('');
	}
/*remove*/
	function removeItem() {
		var item = $(this).attr('data-value');

		model.removeItem(item);
		view.renderList(model.data);
	}

/*edit*/
	function editItem() {
		var item = $(this).attr('data-value');


		model.editItem(item);
		/*view result*/
		view.renderList(model.data);
	}


}


$(function() {
	var firstToDoList = ['First task', 'Second', 'Third'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);
});