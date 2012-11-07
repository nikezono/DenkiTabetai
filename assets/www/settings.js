	$(function(){
		$( document ).bind( "mobileinit", function() {
			// jQuery Mobile フレームワークの設定変更は、ここで行なってください！
			$.support.cors = true;
			$.mobile.allowCrossDomainPages = true;
		});	
	});