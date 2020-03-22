(function() {
	'use strict';

	if (window.location.href.match(/^https?:\/\/www.baidu.com/)) {
		var arr = ['id1', 'id2', 'id3'];
		arr.forEach(function(item) {
			try {
				document.getElementById(item).style.display = 'none'
			} catch (err) {}
		})
	}


}());