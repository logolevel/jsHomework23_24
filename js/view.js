define(
	'view',
	['tmpl'],
	function() {
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
		return View;
	}
	);