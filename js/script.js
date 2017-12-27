$(function() {
    $("img")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "over.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("over.png", ".png");
            $(this).attr("src", src);
        });
});