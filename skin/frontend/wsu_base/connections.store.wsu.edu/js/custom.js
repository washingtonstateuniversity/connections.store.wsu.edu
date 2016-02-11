(function( window, $, WSU ){ 

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
		$.each($('.swatch-button'),function(idx,item){
			var tar =$(item);
			tar.tooltip({
				show: { effect: "fadeIn", duration: 50 }, 
				position: { 
					my: "center bottom-10",
					at: "center top"
				},
				items: "span",
				using: function( position, feedback ) {
					//$( this ).css( position );
					$( this ).addClass( $( this ).data('type') );
				},
				content: function() {
					var element = $( this );
					return element.next('.swatch-items').html();
				},
				hide: { effect: "fadeOut" }, //fadeOut
				close: function(event, ui){
					ui.tooltip.hover(
						function () {
							$(this).stop(true).fadeTo(100, 1); 
						},
						function () {
							$(this).fadeOut("400", function(){
								$(this).remove(); 
							})
						}
					);
				}  
			});
		});
		$('.filtering_button').on('click',function(){
			
			if( $(this).is('.open') ){
				$(this).removeClass('open');
				$('.filtering_block').removeClass('open');
			}else{
				$(this).addClass('open');
				$('.filtering_block').addClass('open');
			}
		});
		
		$('#narrow-by-list dt').on('click',function(){
			
			if( $(this).is('.open') ){
				$(this).removeClass('open');
				$(this).next('dd').removeClass('open');
			}else{
				$(this).addClass('open');
				$(this).next('dd').addClass('open');
			}
		});
		$(document).on('click',function(e){
			//console.log($(e.target).attr('class'));
			if( 0 === $(e.target).closest('.filtering_area ').length ){
				//console.log($(e.target).attr('class'));
				$('.filtering_block').removeClass('open');
				$('.filtering_button').removeClass('open');
			}
		});
		
			//$('.more-views a').lightbox( "option", "resizeToBestPossibleSize", false );
	});

	
}( window, jQuery, jQuery.WSU||{} ) );