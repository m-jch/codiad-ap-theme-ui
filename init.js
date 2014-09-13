/*
 *  license: MIT
 */

(function(global, $){
    
    // Define core
    var codiad = global.codiad,
        scripts= document.getElementsByTagName('script'),
        path = scripts[scripts.length-1].src.split('?')[0],
        curpath = path.split('/').slice(0, -1).join('/')+'/';

    // Instantiates plugin
    $(function() {    
        codiad.AP_THEME_UI.init();
    });

    codiad.AP_THEME_UI = {
        path: curpath,

        init: function() {
        	
        },
         
         RIGHTBAR: function() {
    		alert('ap-theme-ui v0.1 \nfor disable this theme remove plugin from plugins directory \n');
         }

    };

})(this, jQuery);
