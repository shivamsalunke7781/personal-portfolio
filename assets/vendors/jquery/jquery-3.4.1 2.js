
    /*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
    (function( global, factory ) {
        "use strict";
        if ( typeof module === "object" && typeof module.exports === "object" ) {
            module.exports = global.document ?
                factory( global, true ) :
                function( w ) {
                    if ( !w.document ) {
                        throw new Error( "jQuery requires a window with a document" );
                    }
                    return factory( w );
                };
        } else {
            factory( global );
        }
    })( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
        // jQuery code...
    });
    