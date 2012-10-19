var chnsp = chnsp || {};

chnsp.shortenSplash = function() {
    $('#splashHolder').animate({height:'200px'}, 600);
    $('#splash').animate({top:'-200px'}, 600);
};

var sections = ['mission','projects','team']; 

chnsp.hideSections = function() {
    for (var i in sections) {
        $('#'+sections[i]).hide();      
    }
};

chnsp.init = function() {

    for (var i in sections) {
        $('#'+sections[i]+'-menu').bind('click', {type:sections[i]}, function(e) {
            //alert(e.data.type);
            chnsp.shortenSplash();
            chnsp.hideSections();
            $('#'+e.data.type).show();
        });
    }

    $('#splashHolder').bind('click',function(e) {
        $('#splashHolder').animate({height:'458px'});
        $('#splash').animate({top:'0px'});
        chnsp.hideSections();
    });

};

chnsp.init();
