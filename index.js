//list nama barang
$(function () {
  var availableTags = [
    'Annisa Amalia','Maulidwina','Rismawati','Rizal','Satrio','Ubaydillah','Wahyu','Wisma'
  ];
  $('body').on('click', '.nama', function() {
    $(this).autocomplete({
      source: availableTags
    });
  });
});
//list nama barang
$(function () {
  var availableTags = [
    'serological pipette 1 mL','serological pipette 2 mL','serological pipette 5 mL','serological pipette 10 mL','serological pipette 25 mL','conical tube 50 mL','conical tube 15 mL','cell culture flask T-75','cell culture flask T-25 green','cell culture flask T-25 white','cell strainer','cell scraper','96 well plate','24 well plate','6 well plate','syringe 1mL','syringe 5mL','filter 0.22 micron','disposable petri dish'
  ];
  $('body').on('click', '.barang', function() {
  $(this).autocomplete({
    source: availableTags
    });
  });
});
//fitur add more https://codepen.io/felipeumanzor/pen/BZjXPq
  //Clone the hidden element and shows it
  $('.add-one').click(function(){
    $('.dynamic-element').last().clone().appendTo('.dynamic-stuff').show();
    $('.dynamic-stuff #reset').last().val('');
    $('.dynamic-stuff #reset1').last().val('');
    $('.dynamic-stuff #reset2').last().val('');
    $('.dynamic-stuff #reset3').last().val('');
    attach_delete();
  });

  //Attach functionality to delete buttons
  function attach_delete(){
    $('.delete').off();
    $('.delete').click(function(){
      var n = $( "form" ).length;
      if(n>=2){
      $(this).closest('form').remove();
      }
    })
  }
//push ke spreadsheet https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175
jQuery.ajaxPrefilter(function (options) {
  if (options.crossDomain && jQuery.support.cors) {
    options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});
var promisesArray=[];
$('#submit-form').on('click', function (e) {
  //ajax and promise https://stackoverflow.com/questions/38738614/when-all-ajax-requests-complete
  $('form').each(function(){
    var $form = $(this).serializeObject();
    var url = 'https://script.google.com/macros/s/AKfycbzF1W0TZty5ITGRV01g3CHy0LiExO3jrdyJr3Z_gQuV136IhUvF/exec';
    promisesArray.push($.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form,
      })
    )
  });
  Promise.all(promisesArray)
  .then(function(){
    alert('Berhasil!');
    location.reload(true);
  })
  .catch(function(){
    alert('Gagal! Cek koneksi internet!');
  });
  /*
  //loading
  $("html, body").animate({ scrollTop: 0 }, "slow");
  $("#blur").css("pointer-events", "none");
  $("#blur").addClass('blur');
  $('#loader').show();
  */
})
