$(function() {
	$('#okc').click(function(e) {
	  $('body').css('overflow', 'hidden');
		$('[data-type="modal"]').removeClass('hide');
	});
	$('#closeModal').click(function() {
	  $('body').css('overflow', 'auto');
		$('[data-type="modal"]').addClass('hide');
	});
});