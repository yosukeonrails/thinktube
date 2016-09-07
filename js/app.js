 	$(document).ready(function(){

 		searchTerm= 'most popular'

		var params = {
			part: 'snippet',
			key: 'AIzaSyBp7g3qq01iUy3TWWek-WKppgmn3V1Jiuk',
			q: searchTerm,
			maxResults: '10' ,
			r:'json',

			};
	
	getRequest(searchTerm);


 	$('form').submit(function(){


 			event.preventDefault();

 			searchTerm= $('.video-search').val();
 		getRequest(searchTerm)

 	})

 	$('.fa.fa-search').click(function(){
 		searchTerm= $('.video-search').val();

 		getRequest(searchTerm)
 	})

	var myData;

 		function getRequest(searchTerm){

			var params = {
			part: 'snippet',
			key: 'AIzaSyBp7g3qq01iUy3TWWek-WKppgmn3V1Jiuk',
			q: searchTerm,
			r:'json',
			maxResults: '10' 


			};

		url ='https://www.googleapis.com/youtube/v3/search';


			$.getJSON(url, params, function(data){
			 
			   myData = data.items

			   console.log(data.items)

			showResults(myData)

			});

			}



	function showResults(results){

		var search_title;
		var search_thumbnails;

		$('ul.result-list li').remove();
		$('ul.result-list img').remove();

		$.each(results , function(index, value){


				search_title = value.snippet.title
				search_thumbnails= value.snippet.thumbnails.medium.url

				var item= '<img src=' +search_thumbnails +'>' + '<li>'+search_title+'</li>'

				$('ul.result-list').append(item)

		});



				$('ul.result-list').on('click', 'li',function(){

					console.log()
			})


	}




		

 	});