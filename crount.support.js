"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "crount",
              			"path": "crount/crount.js",
              			"file": "crount.js",
              			"module": "crount",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon"
              			],
              			"repository": "https://github.com/volkovasystems/crount.git",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Count element occurrence in array.
              	@end-module-documentation
              
              	@include:
              		{
              			"doubt": "doubt",
              			"eqe": "eqe",
              			"raze": "raze"
              		}
              	@end-include
              */

var doubt = require("doubt");
var eqe = require("eqe");
var raze = require("raze");

var crount = function crount(array, element) {
	/*;
                                              	@meta-configuration:
                                              		{
                                              			"array:required": "[*]",
                                              			"element:required": "*"
                                              		}
                                              	@end-meta-configuration
                                              */

	if (!doubt(array, AS_ARRAY)) {
		throw new Error("invalid array");
	}

	return raze(array).reduce(function (count, value) {
		if (eqe(value, element)) {
			return count + 1;
		}

		return count;
	}, 0);
};

module.exports = crount;

//# sourceMappingURL=crount.support.js.map