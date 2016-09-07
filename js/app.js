	
	
 	


 	$(document).ready(function(){

 		searchTerm= 'most popular'

		var params = {
			part: 'snippet',
			key: 'AIzaSyBp7g3qq01iUy3TWWek-WKppgmn3V1Jiuk',
			q: searchTerm,
			r:'json'
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
			r:'json'
			};

		url ='https://www.googleapis.com/youtube/v3/search';

			$.getJSON(url, params, function(data){
			 
			   myData = data.items

			   console.log(data.items)

			showResults(myData)

			});

			}



		function showResults(results){

			

			$.each(results , function(index, value){


					var search_title = value.snippet.title
					var search_thumbnails= value.snippet.thumbnails.medium.url

					var item= '<img src=' +search_thumbnails +'>' + '<li>'+search_title+'</li>'


				$('ul.result-list').append(item)


			});
		}



		

 	});

		



	