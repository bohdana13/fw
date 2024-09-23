"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
  function Library() {
    this.items = [];
  }
  Library.prototype.add = function (item) {
    this.items.push(item);
  };
  Library.prototype.remove = function (item) {
    this.items = this.items.filter(function (x) {
      return x !== item;
    });
  };
  Library.prototype.removeById = function (id) {
    var itemToDelete = this.items.filter(function (x) {
      return x.id === id;
    })[0];
    if (!itemToDelete) {
      throw new Error("Item was not found");
    }
    this.items = this.items.filter(function (x) {
      return x.id !== id;
    });
  };
  Library.prototype.find = function (id) {
    return this.items.filter(function (x) {
      return x.id === id;
    })[0];
  };
  Library.prototype.getAll = function () {
    return this.items;
  };
  Library.prototype.getPaginated = function (pageNumber, pageSize) {
    var start = (pageNumber - 1) * pageSize;
    var end = start + pageSize;
    return this.items.slice(start, end);
  };
  Library.prototype.getTotalCount = function () {
    return this.items.length;
  };
  return Library;
})();
exports.Library = Library;
