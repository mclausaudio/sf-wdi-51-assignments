console.log("Sanity Check: JS is working!");

$(document).ready(() => {

  const handleSuccess = json =>  {
    console.log(json);
    json.forEach((i)=>{
      $('#json-display').append(`<h2>${i.title} by ${i.artist}</h2>`);
    });
  };

  const handleError = (xhr, status, errorThrown) => console.log('uh oh');
  
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/taquerias',
    success: (json) => {
     json.forEach((i)=>{
       $('#json-display').append(`<h2>Taco Time - ${i.name}</h2>`);
     });
    },
    error: handleError
  });
  
  $.ajax({
     method: 'GET',
     url: 'http://localhost:3000/api/albums',
     success: handleSuccess,
     error: handleError
   });

});
