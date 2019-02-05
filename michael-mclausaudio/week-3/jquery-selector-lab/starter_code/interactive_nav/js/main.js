$(document).ready(function(){
let lastClick = '';
  $('#main-nav').on('click', 'a', function(){
    let target = '#' + $(this).data('related-panel');
    if(target !== lastClick){
      $(lastClick).slideUp();
    };
    $(target).slideToggle();
    lastClick = target;
  });
});
