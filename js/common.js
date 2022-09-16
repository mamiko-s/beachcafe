$(function () {
	//ナビゲーション開閉
	if($("#navControl a").attr("class") == "close"){
			$(".l-header__nav").css("display","none");
		}

	/*slide menu*/
	$("#navControl a").click(function(){
		if($(this).attr("class") == "close"){
			$(".l-header__nav").slideDown("fast");
			$(this).removeClass();
			$(this).addClass("active");
		}
		else{
			 $(".l-header__nav").slideUp("fast");
			 $(this).removeClass();
			 $(this).addClass("close");
		}
		return false;
	});

});
$(function(){
    $('.in').on('inview', function(event, isInView){
        if(isInView){
            $(this).addClass('fadeIn');
        }else{
        }
    });
});
$(function(){
    $('.up').on('inview', function(event, isInView){
        if(isInView){
            $(this).addClass('fadeInUp');
        }else{
        }
    });
});
$(function(){
    $('.left').on('inview', function(event, isInView){
        if(isInView){
            $(this).addClass('fadeInLeft');
        }else{
        }
    });
});
$(function(){
    $('.right').on('inview', function(event, isInView){
        if(isInView){
            $(this).addClass('fadeInRight');
        }else{
        }
    });
});
$(function(){
    $('.flipX').on('inview', function(event, isInView){
        if(isInView){
            $(this).addClass('flipInX');
        }else{
        }
    });
});
$(function(){
    $('.flipY').on('inview', function(event, isInView){
        if(isInView){
            $(this).addClass('flipInY');
        }else{
        }
    });
});















