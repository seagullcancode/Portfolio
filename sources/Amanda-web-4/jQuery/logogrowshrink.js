$('#logoimg').ready(function(){
    
    var $image = $('#logoimg');
    var theWidth = $image.width();
    var theHeight = $image.height();
    var mult = 1.2;
    
    $('#logoimg').on('mouseenter', function(){
        $(this).animate({height: theHeight * mult, width: theWidth * mult}, 500);
    });
    
    $('#logoimg').on('mouseleave', function(){
        $(this).animate({height: theHeight, width: theWidth}, 500);
    }); 
    
});