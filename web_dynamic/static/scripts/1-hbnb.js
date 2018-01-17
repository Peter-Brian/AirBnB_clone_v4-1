let amen = [];
$(document).ready(function () {
  $('INPUT[type=checkbox]').click(function () {
    if (this.checked) {
      console.log('$(this).attr('data-name'))
      amen.push($(this).attr('data-name'));
    } else {
      amen.pop($(this).attr('data-name'));
    }
    $('.amenities h4').text(amen);
  });
});
