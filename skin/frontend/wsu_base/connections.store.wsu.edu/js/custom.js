(function($){
	$(document).ready(function(){
			
		$('.more-views a').lightbox({
			gallery: {
				enabled: true,
				loop: true,
			},
			dialog:{
				resizeToBestPossibleSize: false,
				draggable: false,
				resizable: false,
				modal: true,
				onCreate:function(){
					$('.ui-dialog-titlebar').remove();
					//$(".ui-dialog-buttonpane").remove();
					$('body').css({overflow:"hidden"});
				},
				onOpen:function(jObj){
					jObj.prepend('<span class="tabedBox infoClose">X</span>');
					jObj.find('.infoClose').off().on("click",function(e){
						//WSU_MAP.util.nullout_event(e);
						jObj.dialog( "close" );
					});
				},
				onClose: function(){//jObj) {
					//WSU_MAP.util.close_dialog_modle(obj);
					//jObj.remove();
					$('body').css({overflow:"auto"});
				}
			},
		});

			//$('.more-views a').lightbox( "option", "resizeToBestPossibleSize", false );
	});
})(jQuery);