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
