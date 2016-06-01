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

	if( document.getElementById("jira") ){
		chrome.storage.sync.get({
			favoriteColor: 'red',
			titleSize: 'l',
			ticketType: 'default'
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

        //클릭시 제거되는 이벤트 걸기
        ghx_card[i].addEventListener("click", function(e) {
	        //var cardWrap = e.target.parentElement;
    			//(cardWrap).parentNode.removeChild(e.target);
		    });
	    }

	    //ticket type setting
	    var body_class_name = "ghx-print-card-body";
	   	if( body_class_name.indexOf("ghx-print-" + items.ticketType)  == -1 ){
	   		document.getElementById("jira").className = body_class_name + " ghx-print-" + items.ticketType;
	   	}

	   	if( items.ticketType == 'empty'){
	   		var ghx_card_key = document.getElementsByClassName('ghx-card-key');
	   		for(var i=0, len=ghx_card_key.length; i<len; i++){
	   			var key = ghx_card_key[i].innerText;
	   			split_key = key.split("-");
	   			ghx_card_key[i].innerText = split_key[0] + "-";
	   		}
	   	}
	    

			
		});
	}
	
}