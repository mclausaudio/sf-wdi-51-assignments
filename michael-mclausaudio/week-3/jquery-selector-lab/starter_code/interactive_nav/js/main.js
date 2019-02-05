$(document).ready(function(){

let lastClick = '';
  $('#main-nav').on('click', 'a', function(){
    let panel = $(this).data('related-panel');
    let target = '#' + panel;
    $(lastClick).slideToggle();
    $(target).slideToggle();
    lastClick = target;
  });
});
