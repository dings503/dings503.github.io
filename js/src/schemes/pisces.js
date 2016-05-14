$(document).ready(function () {
  var sidebarTop = $('.header-inner').height() + 10;

  $('#sidebar').css({ 'margin-top': sidebarTop }).show();

  require([], function (){
  	if($(".instagram").length) {
    	require(['/js/photo.js', '/fancybox/jquery.fancybox.js', '/js/jquery.lazyload.js'], function(obj) {
        obj.init();
    	});
	}
  });

});
