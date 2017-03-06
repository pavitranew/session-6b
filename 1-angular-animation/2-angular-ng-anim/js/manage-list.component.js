angular.module('myApp').component('manageList', {

	templateUrl: 'js/manage-list.template.html',

	controller: function ItemCtrl() {

		var self = this;
		self.items = [
		{ name: "Vessel" },
		{ name: "Booty" },
		{ name: "Loot" },
		{ name: "Pipe" },
		{ name: "Treasure" },
		{ name: "Arrgh" }
		];
		self.removeItem = function (index) {
			self.items.splice(index, 1);
		}
		self.addItem = function () {
			self.items.push(self.item);
			self.item = {};
		}
		self.bottomToTop = function() {
			self.items.unshift(self.items.pop());
		};
	}
});