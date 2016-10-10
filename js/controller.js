
define(
	'controller',
	[],
	function() {
		function Controller(model, view) {
			var self = this;
			/*events*/
			view.elements.addBtn.on('click', addItem);
			view.elements.listContainer.on('click', '.item-delete', removeItem);
			view.elements.listContainer.on('click', '.item-edit', editItem);

			$('.item-value').keyup(function(event){
				if(event.keyCode == 13){
					addItem()
				}
			});


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
		return Controller;
	}
	);