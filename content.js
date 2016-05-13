/*WebFont.load({
	custom: {
        families: ['Nanum Gothic'],
        urls: ['//fonts.googleapis.com/earlyaccess/nanumgothic.css']
    }
});*/
document.addEventListener('DOMSubtreeModified', function(e) {
	changeStyle();
});

window.addEventListener('storage', function(e) {  
  changeStyle();
});

function changeStyle(){
	chrome.storage.sync.get({
		favoriteColor: 'red'
	}, function(items) {
		//console.log(items.favoriteColor);
		var ghx_card = document.getElementsByClassName('ghx-card');
		//console.log("ghx_card.length: "+ghx_card);
		for(var i=0, len=ghx_card.length; i<len; i++)
	    {
	        ghx_card[i].style.borderColor = items.favoriteColor;
	        
	    }
		
	});
}