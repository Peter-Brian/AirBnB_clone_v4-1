let amen = [];
$(document).ready(function () {
   $('INPUT[type=checkbox]').click(function () {
    if (this.checked) {
      amen.push($(this).attr('data-name'));
    } else {
      amen.splice(amen.indexOf($(this).attr('data-name')), 1);
    }
    $('.amenities h4').text(Object.values(amen).join(', '));   
  });
});

$(function () {
//  let url = 'http://0.0.0.0:5001/api/v1/places_search/';

  $.ajax({
    'type': 'POST',
    'url': 'http://0.0.0.0:5001/api/v1/places_search/',
    'Content-Type': 'application/json',
    'dataType': 'json',
    'data': {}
   'success': function() {
      // Loop through result
      for (let i = 0; i < data.length; i++ ) {
	// add <article> to each item and list out components for each item. reference visual layout for previous tasks 
	$('<article></article>').appendTo($('.places'));
      };
  });

});

//data = {place, place2, place3}
// want name of place and info underneath 
