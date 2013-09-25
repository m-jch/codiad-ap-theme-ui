/*
 *  Place copyright or other info here...
 */

(function(global, $){
    
    // Define core
    var codiad = global.codiad,
        scripts= document.getElementsByTagName('script'),
        path = scripts[scripts.length-1].src.split('?')[0],
        curpath = path.split('/').slice(0, -1).join('/')+'/';

    // Instantiates plugin
    $(function() {    
        codiad.MYPLUGIN.init();
    });

    codiad.MYPLUGIN = {
        
        // Allows relative `this.path` linkage
        path: curpath,

        init: function() {

            // Start your plugin here...

        },

        /**
         * 
         * This is where the core functionality goes, any call, references,
         * script-loads, etc...
         * 
         */

    };

})(this, jQuery);