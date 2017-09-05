$(document).ready(function(){
	$("#search").click(function(){

		var searchForm = $("#searchForm").val();

		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchForm + "&format=json&callback=?";

		var card = '<li class="info-cont card hvr-grow">epa</li>';

		$.ajax(
		{
			type: "GET", url: url, 
			async: false, 
			dataType: "json",
			success: function(data){
				$("#output").html('')
				for(var i = 0; i< data[1].length;i++ ){
				$("#output").append('<a class="animated fadeInUp" href="'+data[3][i]+'" target="_blank"><li class="info-cont card hvr-grow"> 	<p class="title" id="title" style="color: black">' + data[1] [i] + '	</p> <p id="content" style="color: red">' + data[2] [i] + '	</p> </li></a>');

				}
			}, 
			error: function(errorMessage){
				alert("Error");
			}		
		})


	})
})