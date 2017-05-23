webpackJsonp([1,0],[
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	var x = 'shemei';
	
	var y = new Promise(function (resolve, reject) {
		resolve();
	});
	
	var z = function () {
		var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(x, y) {
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return console.log('shemei');
	
						case 2:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));
	
		return function z(_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}();

/***/ }
]);
//# sourceMappingURL=app.bundle.js.map