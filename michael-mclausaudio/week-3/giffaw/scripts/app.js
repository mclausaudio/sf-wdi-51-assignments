
// https://api.giphy.com/v1/gifs/search?api_key=ebZaNTs7nYUFw5m5X87u1ixBL2pIp9Bw&q=cats&limit=5
let key = 'ebZaNTs7nYUFw5m5X87u1ixBL2pIp9Bw';
let api_call = 'https://api.giphy.com/v1/gifs/search?api_key=ebZaNTs7nYUFw5m5X87u1ixBL2pIp9Bw&limit=25&q='
$('form').on('submit', function(e){
  e.preventDefault();

  let searchTerm = $('.gif-input').val();

  $.ajax({
    method: "GET",
    url: `${api_call}${searchTerm}`,
    success: onSuccess,
    error: onError
  })

})

function onSuccess(json){
  console.log(json);
  $('.gif-gallery').html('')
  if(json.data.length <= 0) {
    alert("Sorry, we couldn't find anything.  Please try another search term.");
  }
  json.data.forEach(gifObj => {
    console.log(gifObj.images.downsized_medium.url)
    let newGif = `<div class="gif-container">
                    <img src=${gifObj.images.downsized_medium.url} />
                  </div>`;
    $('.gif-gallery').append(newGif)
  })
}

function onError(err){
  console.log(err)
  alert('There has been an error.  Please try again.')
}

