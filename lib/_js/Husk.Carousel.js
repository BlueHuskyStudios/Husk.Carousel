var HC_DEFAULT_SLIDE_DELAY = 4.000; // default slide delay in seconds

var hc_sliders = [];
var hc_easyClass = undefined;

function hc_init() {
	
}

function hc_goToSlide(carousel, slideNum) {
	var kids = carousel.getElementsByTagName('*'), i;
	for (i in kids) {
		// set each element's "left" style to (slideNum * -100) + "%"
	}
}

function hc_getByClass(className) {
	if (hc_easyClass === undefined) {
			hc_easyClass = true;
		try {
			return document.getElementsByClassName(className);
		}
		catch (c) {
			hc_easyClass = false;
		}
	}
	if (hc_easyClass) {
		return document.getElementsByClassName(className);
	}
	else {
		var elems = document.getElementsByTagName('*'), i, cn;
		for (i in elems) {
			cn = elems[i].className;
			if(cn && cn.match(new RegExp("(^|\\s)" + className + "(\\s|$)")) {
				return elems[i];
			}
		}
	}
	return null;
}



/**
 * call this if Husk.Carousel fails to load. It shows all elements with the class hide-when-husk-carousel-supported
 */
function hc_fail() {
	//include jQuery because it's way too hard to show/hide elements in naked JS
	var script = document.createElement('script');
	script.src = 'https://code.jquery.com/jquery-1.11.1.min.js';
	script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);
	
	// show warnings when Husk.Carosuel can't work
	$(".hide-when-husk-carousel-supported").show();
}

// try to add hc_init to the content load listener
try {
	document.addEventListener("DOMContentLoaded", hc_init, false);
}
catch(e) {
	var oldload = window.onload;
	window.onload = function() {
		if (oldload)
			oldload();
		try {
			hc_init();
		}
		catch (e) {
			hc_fail();
		}
	};
	catch (e) {
		hc_fail();
	}
}