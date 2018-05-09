$(document).ready(function(){

	$("#search-btn").on("click", function(e){
		e.preventDefault();
		$("#results").html("");
		search();
	})

});

function search(){

	var query = $("#search").val();

	$.ajax({
	    url: 'https://allorigins.me/get?url=https%3A//en.wikipedia.org/w/api.php%3Faction%3Dopensearch%26search%3D'+query+'%26limit%3D10%26format%3Djson&callback=?',
	    dataType: 'json',
	    type: 'POST',
	   	headers: { 'Api-User-Agent': 'wikiviewer/1.0' },
	    success: function(data) {
	    	var json = JSON.parse(data.contents);
	       	console.log(json);
	       	for(var i = 0; i < json[1].length; i++){
	       		$("#results").append(
	       			"<a href="+json[3][i]+"><div class='result'>"+
	       				"<h1>"+json[1][i]+"</h1>"+
	       				"<p>"+json[2][i]+"</p>"+
	       			"</div></a>"
	       		);
	       	}
	    },
	    error: function(err){
	    	console.log(err);
	    }
	});
}

