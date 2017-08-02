"use strict";

/*;
	@test-license:
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
	@end-test-license

	@test-configuration:
		{
			"package": "crount",
			"path": "crount/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/crount.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"crount": "crount"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const crount = require( "./crount.js" );
//: @end-server

//: @client:
const crount = require( "./crount.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "crount", ( ) => {

	describe( `"crount( [ 1, 2, 3, 3, 4 ], 3 )"`, ( ) => {
		it( "should be equal to 2" , ( ) => {

			assert.equal( crount( [ 1, 2, 3, 3, 4 ], 3 ), 2 );

		} );
	} );

	describe( `"crount( [ ], 1 )"`, ( ) => {
		it( "should be equal to 0", ( ) => {

			assert.equal( crount( [ ], 1 ), 0 );

		} );
	} );


} );


//: @end-server


//: @client:

describe( "crount", ( ) => {

	describe( `"crount( [ 1, 2, 3, 3, 4 ], 3 )"`, ( ) => {
		it( "should be equal to 2" , ( ) => {

			assert.equal( crount( [ 1, 2, 3, 3, 4 ], 3 ), 2 );

		} );
	} );

	describe( `"crount( [ ], 1 )"`, ( ) => {
		it( "should be equal to 0", ( ) => {

			assert.equal( crount( [ ], 1 ), 0 );

		} );
	} );


} );

//: @end-client


//: @bridge:

describe( "crount", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( `"crount( [ 1, 2, 3, 3, 4 ], 3 )"`, ( ) => {
		it( `"should be equal to 2"`, ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return crount( [ 1, 2, 3, 3, 4 ], 3 );
				}

			).value;

			assert.equal( result, 2 );

		} );
	} );
	

	describe( `"crount( [ ], 1 )"`, ( ) => {
		it( `"should be equal to 0"`, ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return crount( [ ], 1 );
				}

			).value;

			assert.equal( result, 0 );

		} );
	} );

} );

//: @end-bridge
