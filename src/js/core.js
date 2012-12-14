//	@codekit-prepend "lib/jquery-1.8.3.min.js"
//	@codekit-prepend "lib/bigtext.js"

// (function(){
//   // if firefox 3.5+, hide content till load (or 3 seconds) to prevent FOUT
//   var d = document, e = d.documentElement, s = d.createElement('style');
//   if (e.style.MozTransform === ''){ // gecko 1.9.1 inference
//     s.textContent = 'body{visibility:hidden}';
//     var r = document.getElementsByTagName('script')[0];
//     r.parentNode.insertBefore(s, r);
//     function f(){ s.parentNode && s.parentNode.removeChild(s); }
//     addEventListener('load',f,false);
//     setTimeout(f,3000); 
//   }
// })();

$(document).ready(function() {
	setTimeout(function() {
		$('.bigtext').bigtext();
	}, 1000);
	
	var theDate = new Date();
	var currentYear = theDate.getFullYear();	
	
	$('#currentage').html('(' + String(currentYear - 1983) + ')');
	$('#experienceyears').html(String(currentYear - 2005));
	
	setTimeout(function() {
		$('html').removeClass('hide');		
	}, 2000);
});