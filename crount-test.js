
const assert = require( "assert" );
const crount = require( "./crount.js" );

assert.equal( crount( [ 1, 2, 3, 3, 4 ], 3 ), 2, "should be equal to '2'" );

assert.equal( crount( [ ], 1 ), 0, "should be equal to '0'" );

console.log( "ok" );
