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

var title_size_config = {
	"s":{
		"fontSize": "1rem",
		"maxHeight": "90.4px",
		"margin": "10px 0",
		"itemHeight": "233px"
	},
	"m":{
		"fontSize": "1.25rem",
		"maxHeight": "90.4px",
		"margin": "10px 0",
		"itemHeight": "233px"
	},
	"l":{
		"fontSize": "1.5rem",
		"maxHeight": "90.4px",
		"margin": "10px 0",
		"itemHeight": "233px"
	},
	"xl":{
		"fontSize": "1.75rem",
		"maxHeight": "107px",
		"margin": "20px 0",
		"itemHeight": "250px"
	}
}
function changeStyle(){
	chrome.storage.sync.get({
		favoriteColor: 'red',
		titleSize: 'l'
	}, function(items) {
		//console.log(items.favoriteColor);
		var ghx_card = document.getElementsByClassName('ghx-card');
		//console.log("ghx_card.length: "+ghx_card);
		for(var i=0, len=ghx_card.length; i<len; i++)
	    {
	    	//console.log("#" + items.favoriteColor);
	    	//console.log(items.titleSize + "rem");
	        ghx_card[i].style.borderColor = "#" + items.favoriteColor;

	        //title setting
	        var ghx_card_summary = ghx_card[i].getElementsByClassName("ghx-card-summary")[0];
	        //console.log(title_size_config[items.titleSize].fontSize);
	        ghx_card_summary.style.fontSize = title_size_config[items.titleSize].fontSize;
	        ghx_card_summary.style.maxHeight = title_size_config[items.titleSize].maxHeight;
	        ghx_card_summary.style.margin = title_size_config[items.titleSize].margin;
	        ghx_card[i].style.height = title_size_config[items.titleSize].itemHeight;
	    }
		
	});
}