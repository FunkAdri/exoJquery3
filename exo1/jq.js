var count = 0;
$('#button').click(function() {
  count++;
  $('#counter').html('Nombre de click : '+count);
});
