$(function() {
    $('.gallery-slideshow').slideshow({
        interval: 4000,
        width: $("#slidecontainer").width(),
        height: $("#slidecontainer").height()
    });
});

$("ul.gallery-slideshow li img").each(function(index){
    var c_w = $("#slidecontainer").width();
    var c_h = $("#slidecontainer").height();

    var i_w = $(this).width();
    var i_h = $(this).height();
    
    //forhold h/b
    var rel = i_w / i_h;

    // Skaler opp, sett bredde til makselement og se om tilsv høyde overskrider elementet. 
    // Tilsvarende på andre dimensjonen, bruk den som ikke overskrider. 

    // Sjekk w:
    
    var w_w = c_w;
    var w_h = i_h * (c_w / i_w);

    var h_h = c_h;
    var h_w = i_w * (c_h / i_h);

    var act_h = 0;
    var act_w = 0;

    if (w_h <= c_h){
       // skalerte høyder er lik eller innenfor container når vi setter maks bredde
       act_h = w_h;
       act_w = w_w;
    } else {
        // skalerte høyder er lik eller innenfor container når vi setter maks høyde
        act_h = h_h;
        act_w = h_w;
    }
     
    $(this).height(act_h);
    $(this).width(act_w);
    $(this).css("left", (act_w/2)*-1);
    $(this).css("top", (act_h/2)*-1);

});




    
