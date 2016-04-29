(function( window, $, WSU ){ 

	$(document).ready(function(){
		$(".spine-sitenav .parent a span").on("click",function(){
            $(this).closest("a").trigger("click");
        });

        $(window).on("beforeunload", function() {
            $(".fadeInRight").addClass("reverse");
            $(".fadeInLeft").addClass("reverse");
            $(".fadeInUp").addClass("reverse");
            $(".fadeInDown").addClass("reverse");
            $(".fadeIn").addClass("reverse");
            $(".catalog-category-view").addClass("reverse");
         });

        
        
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
					jObj.find(".infoClose").off().on("click", function(){//e){
						//WSU_MAP.util.nullout_event(e);
						jObj.dialog( "close" );
					});
				},
				onClose: function(){//jObj) {
					//WSU_MAP.util.close_dialog_modle(obj);
					//jObj.remove();
					$('body').css({overflow:"auto"});
				}
			}
		});
		$.each($('.swatch-button'),function(idx,item){
			var tar =$(item);
			var product = tar.closest('.item');
			tar.hover(
				function () {
					product.addClass('hover');
				},
				function () {
					product.removeClass('hover');
				}
			);
			
			
			tar.tooltip({
				show: { effect: "fadeIn", duration: 50 }, 
				position: { 
					my: "center bottom-10",
					at: "center top"
				},
				items: "span",
				using: function( ) {
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
							product.addClass('hover');
							$(this).stop(true).fadeTo(100, 1); 
						},
						function () {
							product.removeClass('hover');
							$(this).fadeOut("400", function(){
								
								$(this).remove(); 
							})
						}
					);
				},
				open:function(event, ui){
					product.addClass('hover');
					ui.tooltip.find('.swatch-item').on('click', function(){
						var id = $(this).data('superattribute_id');
						$(this).closest('.ui-tooltip-content').find('.active').removeClass('active');
						$(this).addClass('active');
						var superid = $(this).data('superid');
						var _product_id = $(this).data('_product_id');
						var _type = $(this).data('_type');
						var btn = $('.swatch-button[data-_product_id="'+_product_id+'"][data-_type="'+_type+'"]');
						btn.attr('data-set_superAttr_id',id);
						
						btn.html($(this).html());
						btn.closest('.swatch-area').find('.swatch-item.active').removeClass('active');
						btn.closest('.swatch-area').find('.swatch-item[data-superattribute_id="'+id+'"]').addClass('active');
	
					});
				}
			});
		});
		
		
		if($("#shopping-cart-totals-table").length){
            $("#shopping-cart-totals-table td").each(function(){
                 var text = $(this).text();
                 if(text.indexOf("Alumni Discount")>0){
                     $(this).closest("tr").remove();
                 }
             });
        }
		
		
		$('.inline-config-ok').off().on('click', function(e){
			e.preventDefault();
			e.stopPropagation();
			var btn = $(this);
			var top = btn.closest('.item');
			var url = btn.data('baseurl');
			
			var data = "";
			$.each(top.find('.swatch-button'), function(){
				var btn = $(this);
				data += "&super_attribute["+ btn.data("superattribute") +"]=" + btn.attr('data-set_superAttr_id');
			});
			console.log(url + "?qty=1" + data);
			window.location = url + "?qty=1" + data;
		});
		
		
			//$('.more-views a').lightbox( "option", "resizeToBestPossibleSize", false );
	});

	
}( window, jQuery, jQuery.WSU||{} ) );