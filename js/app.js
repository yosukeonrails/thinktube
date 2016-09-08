 	$(document).ready(function(){

 		var nextToken;

 		searchTerm= 'iu'

		// var params = {
		// 	part: 'snippet',
		// 	key: 'AIzaSyBp7g3qq01iUy3TWWek-WKppgmn3V1Jiuk',
		// 	q: searchTerm,
		// 	maxResults: '10' ,
		// 	r:'json',

		// 	};
	
	getRequest(searchTerm);



	function getRequest(searchTerm){

			var params = {

			part: 'snippet',
			key: 'AIzaSyBp7g3qq01iUy3TWWek-WKppgmn3V1Jiuk',
			q: searchTerm,
			r:'json',
			maxResults:'10'

			};

		url ='https://www.googleapis.com/youtube/v3/search';


			$.getJSON(url, params, function(data){
			 
			   myData = data.items

			
			   console.log(data)

			showResults(myData)

			});

			}



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


 		


	function showResults(results){

		var search_title;
		var search_thumbnails;

		$('ul.result-list li').remove();
		$('ul.result-list img').remove();

		$.each(results , function(index, value){


				search_title = value.snippet.title
				search_thumbnails= value.snippet.thumbnails.medium.url


				var search_link;

				kind_video= 'watch?v='+ value.id.videoId
				kind_channel='channel/'+value.id.channelId
				kind_playlist='playlist?list='+value.id.playlistId

				if (value.id.videoId){ console.log('this is video')

					     search_link=kind_video

					}

					else if (value.id.channelId){ console.log('this is channel')

				   search_link= kind_channel 
			}
						else if (value.id.playlistId){console.log('this is playlist ')

							search_link= kind_playlist
					}
				
				
						search_url='https://www.youtube.com/'+search_link


				// if(search_link==value.id.videoId){
				//     search_url= 'https://www.youtube.com/watch?v='+search_link}
				// 	else {
				// 		search_link = value.id.channelId
				// 		search_url= 'https://www.youtube.com/channel/'+search_link}

				var item= '<a href='+ search_url +'><img src=' +search_thumbnails +'>' + '<li>'+search_title+'</li></a>'

				$('ul.result-list').append(item)

				
				console.log(search_url)



				});

			}

				// var nextToken= data.nextPageToken

			$('.next').click(function(){

				  

			})






		

 	});