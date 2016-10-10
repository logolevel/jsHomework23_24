define(
   'model',
   [],
   function() {
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
       return Model;
   }
);